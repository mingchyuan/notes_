(function () {
    const gitalkSettings = function (hook, vm) {
        const gitalkConfig = {
            clientID: 'e8d7ce169c8b6025211b',
            clientSecret: 'cb4e2a8cf04f811ffa343f78079ac38eacaee99f',
            repo: 'notes',
            owner: 'mingchyuan',
            admin: ['mingchyuan'],
            distractionFreeMode: false,
            perPage: 20,
        };

        hook.doneEach(function () {
            const path = vm.route.path.split("/");
            const fileName = path.pop();
            let folderName = path.pop();
            let parentFolder;

            while (parentFolder = path.pop()) {
                folderName = parentFolder + "_" + folderName;
            }

            // Gitalk id
            let label;

            if (!folderName) {
                label = encodeURI("首頁");
            } else if (fileName == "README") {
                label = folderName;
            } else {
                label = folderName + "_" + fileName;
            }

            // 處理中文字元
            label = decodeURI(label);

            if (label.length >= 50) {
                // issues 中的 label 有長度限制，所以只取前 50 個字元
                label = label.substring(0, 50);
            }

            const dom = Docsify.dom;
            const main = dom.getNode("#main");

            Array.apply(
                null,
                document.querySelectorAll("div.gitalk-container")
            ).forEach(function (element) {
                element.remove();
            });

            const div = dom.create("div");
            div.id = "gitalk-container-" + label;
            div.className = "gitalk-container";
            dom.appendTo(dom.find(".content"), div);

            const gitalk = new Gitalk(
                Object.assign(
                    gitalkConfig,
                    {
                        // 每個留言區都有各自不重複的 id，讓留言儲存在相對應的 issues 中
                        id: label
                    }
                )
            );

            gitalk.render("gitalk-container-" + label);
        });
    };

    // Add plugin to docsify's plugin array
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], gitalkSettings);
})();