# 替 docsify-toc 加上 Highlight 與同步捲動的功能

!> 請斟酌使用。

## docsify-toc

官方文件：[docsify-toc](https://github.com/mrpotatoes/docsify-toc)

## 動機

可以了解目前瀏覽的位置。

## 解決方法

### 移除 Click 事件

不需要原本 docsify-toc 提供的 click highlight 功能。

```js
/*
var tocClick = function(e) {…}
*/
```

### 目的

判斷出現在視窗畫面中的元素是屬於哪個標題，並 highlight 在 TOC 中的該標題。

### 主要邏輯

- 觀察進入視窗畫面中的元素，highlight 該元素對應的目錄標題。
- 觀察離開視窗畫面中的元素，unhighlight 該元素對應的目錄標題。
    - 當向上捲動網頁（Page Up），直到屬於此標題的第一個元素從畫面下方離開後，才 unhighlight 此標題。
    - 當向下捲動網頁時（Page Down），直到屬於此標題的最後一個元素從畫面上方離開後，才 unhighlight 此標題。

```js
if (hasEnteredWindow) {
    tocHeading.classList.add("active");
}

if (isFirstElementOfPreviousHeading(element, headingLevel) && wasLeftFromBottom(element)) {
    tocHeading.classList.remove("active");
}

if (isLastElementOfPreviousHeading(element, headingLevel) && wasLeftFromTop(element)) {
    tocHeading.classList.remove("active");
}
```

### 使用 IntersectionObserver

IntersectionObserver 能觀察元素與視窗的相交變動，當元素進入或離開視窗畫面時就會觸發。

```js
const allElementsExceptHeadings = document.querySelectorAll("#main h1 ~ *:not(h2, h3)");

const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // 主要邏輯
    });
});

allElementsExceptHeadings.forEach((element) => {
    activeObserver.observe(element);
});
```

!> 但需要注意：當捲動速度太快，超出螢幕更新率會導致 IntersectionObserver 未觸發。<br />
詳情參閱：[javascript - Intersection Observer fails sometimes when i scroll fast - Stack Overflow](https://stackoverflow.com/questions/61951380/intersection-observer-fails-sometimes-when-i-scroll-fast)

## 同步捲動

當使用者捲動文章時，也會將目錄捲動至適當位置。

```js
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
```

### 實際效果演示

<img src="./架設筆記庫/開發docsify-plugin/img/toc-scrolling-sync-demo.gif" style="max-width: 50%;">

## 相關檔案連結

- [docsify-toc-and-docsify-gitalk.css](https://raw.githubusercontent.com/mingchyuan/notes/main/docs/css/docsify-toc-and-docsify-gitalk.css)
- [docsify-toc@1.0.0_dist_toc.js](https://raw.githubusercontent.com/mingchyuan/notes/main/docs/plugins/docsify-toc@1.0.0_dist_toc.js)
- [docsify-plugin-toc-highlight-and-scrolling-sync.js](https://raw.githubusercontent.com/mingchyuan/notes/main/docs/plugins/docsify-plugin-toc-highlight-and-scrolling-sync.js)
