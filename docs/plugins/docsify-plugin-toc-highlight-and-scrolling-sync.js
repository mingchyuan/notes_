(function () {
    const tocHighlight = function (hook, vm) {
        hook.doneEach(function () {
            const allElements = document.querySelectorAll("#main h1 ~ *");
            const allElementsExceptHeadings = document.querySelectorAll("#main h1 ~ *:not(h2, h3)");

            // 只要出現在視窗上的元素（包含標題），就新增 displayed class
            const displayedObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const element = entry.target;
                    if (entry.intersectionRatio > 0) {
                        element.classList.add("displayed");
                    } else {
                        element.classList.remove("displayed");
                    }
                });
            });

            allElements.forEach((element) => {
                displayedObserver.observe(element);
            });

            // 只觀察非標題的元素
            const activeObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    function isHeading(element) {
                        if (!element) {
                            return false;
                        }
                        return element.localName.charAt(0) == "h";
                    }

                    function getHeadingLevel(heading) {
                        return heading.localName.charAt(1);
                    }

                    function getPreviousHeading(element, headingLevel) {
                        let previousSibling = element.previousElementSibling;

                        if (!previousSibling) {
                            return null;
                        }

                        while (!isHeading(previousSibling) || !(getHeadingLevel(previousSibling) <= headingLevel)) {
                            previousSibling = previousSibling.previousElementSibling;
                        };

                        if (getHeadingLevel(previousSibling) != headingLevel) {
                            return null;
                        }

                        return previousSibling;
                    }

                    function wasLeftFromTop(element) {
                        const thisElementHasLeftWindow = entry.intersectionRatio == 0;
                        const previousElement = element.previousElementSibling;

                        if (!previousElement) {
                            // 此元素是文章中第一個元素，甚至沒有標題在前面
                            // 所以若能離開視窗畫面，一定是從上方離開（往下捲動）
                            return true;
                        }

                        return thisElementHasLeftWindow && !previousElement.classList.contains("displayed");
                    }

                    function wasLeftFromBottom(element) {
                        const thisElementHasLeftWindow = entry.intersectionRatio == 0;
                        const previousElement = element.previousElementSibling;

                        if (!previousElement) {
                            // 此元素是文章中第一個元素，基本上不太可能從下方離開畫面（往上捲動）
                            return false;
                        }

                        return thisElementHasLeftWindow && previousElement.classList.contains("displayed");
                    }

                    function isFirstElementOfPreviousHeading(element, headingLevel) {
                        let previousElement = element.previousElementSibling;

                        // 處理小標題的前一元素是大標題的情形
                        while (isHeading(previousElement)) {
                            if (getHeadingLevel(previousElement) == headingLevel) {
                                return true;
                            }
                            previousElement = previousElement.previousElementSibling;
                        }
                        return false;
                    }

                    function isLastElementOfPreviousHeading(element, headingLevel) {
                        const nextElement = element.nextElementSibling;

                        return !nextElement || (isHeading(nextElement) && (getHeadingLevel(nextElement) <= headingLevel));
                    }

                    function setActive(headingLevel) {
                        const element = entry.target;
                        const hasEnteredWindow = entry.intersectionRatio > 0;
                        const previousHeading = getPreviousHeading(element, headingLevel);

                        if (previousHeading) {
                            const href = previousHeading.querySelector("a").href;
                            const tocHeading = document.querySelector('.page_toc li a[href="' + href + '"]');

                            if (hasEnteredWindow) {
                                tocHeading.classList.add("active");
                            }

                            if (isFirstElementOfPreviousHeading(element, headingLevel) && wasLeftFromBottom(element)) {
                                tocHeading.classList.remove("active");
                            }

                            if (isLastElementOfPreviousHeading(element, headingLevel) && wasLeftFromTop(element)) {
                                tocHeading.classList.remove("active");
                            }
                        }
                    }

                    // h2, h3
                    setActive(2);
                    setActive(3);
                });
            });

            allElementsExceptHeadings.forEach((element) => {
                activeObserver.observe(element);
            });

            // 讓目錄卷軸與視窗畫面卷軸同步
            function scrollingSync() {
                const toc = document.querySelector(".page_toc");
                window.addEventListener("scroll", (event) => {
                    const windowScrollHeight = window.document.documentElement.scrollHeight;
                    const windowClientHeight = window.document.documentElement.clientHeight;
                    const windowHeight = windowScrollHeight - windowClientHeight;
                    const windowScrollTop = window.document.documentElement.scrollTop;
                    const windowHeightPercentage = windowScrollTop / windowHeight;

                    const tocScrollHeight = toc.scrollHeight;
                    const tocClientHeight = toc.clientHeight;
                    const tocHeight = tocScrollHeight - tocClientHeight;

                    toc.scrollTop = windowHeightPercentage * tocHeight;
                });
            }

            scrollingSync();
        });
    };

    // Add plugin to docsify's plugin array
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], tocHighlight);
})();