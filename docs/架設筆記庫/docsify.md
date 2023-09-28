# 使用 docsify 將 Markdown 文件渲染成網頁

## 安裝 docsify

以瀏覽器查看本地 markdown 文件。

官方文件：[docsify](https://docsify.js.org/#/?id=docsify)

1. 安裝 [Node.js](https://nodejs.org/zh-tw/download)。並檢查 npm ( node 套件管理器 ) 版本：

    ```bash
    npm -v
    ```

2. 安裝 `docsify-cli` ：

    ```bash
    npm i docsify-cli -g
    ```

3. 先替網站建立一個資料夾，例如 `D:\notes`。並於該資料夾初始化，產生初始資料夾：

    ```bash
    docsify init ./docs
    ```

4. 啟用本地預覽，該 cmd 要維持運作：

    ```bash
    docsify serve docs
    ```

預覽網址為：[http://localhost:3000](http://localhost:3000)

## 基本檔案介紹

初始化後，在 `./docs` 中會產生以下檔案：

- `index.html` ：作為入口文件。
- `README.md` ：作為首頁。
- `.nojekyll` ：防止 GitHub Pages 忽略以下劃線開頭的檔案。

## 目錄樹

例如以下目錄樹：

```text
.
└── docs
    ├── _sidebar.md
    ├── README.md
    |
    ├── 微積分
    | ├── _sidebar.md
    | └── README.md
    |
    └── 架設筆記庫
        ├── _sidebar.md
        ├── README.md
        ├── markdown.md
        └── docsify.md
```

其相對應的路徑為：

$$
\begin{align}
    & \text{docs/README.md}
    & \Rightarrow \qquad
    & \text{domain.com/#/}
    \\
    &
    & \text{或} \qquad
    & \text{domain.com/#/README}
    \\\\
    & \text{docs/微積分/README.md}
    & \Rightarrow \qquad
    & \text{domain.com/#/微積分/}
    \\
    &
    & \text{或} \qquad
    & \text{domain.com/#/微積分/README}
    \\\\
    & \text{docs/架設筆記庫/README.md}
    & \Rightarrow \qquad
    & \text{domain.com/#/架設筆記庫/}
    \\
    &
    & \text{或} \qquad
    & \text{domain.com/#/架設筆記庫/README}
    \\\\
    & \text{docs/架設筆記庫/markdown.md}
    & \Rightarrow \qquad
    & \text{domain.com/#/架設筆記庫/markdown}
    \\\\
    & \text{docs/架設筆記庫/docsify.md}
    & \Rightarrow \qquad
    & \text{domain.com/#/架設筆記庫/docsify}
\end{align}
$$

## 製作側邊攔

```html
<!-- index.html -->
    
<script>
    window.$docsify = {
        // _sidebar.md
        loadSidebar: true,

        // 側邊欄標題
        name: '學習筆記',

        // 初始側邊欄深度
        sidebarDisplayLevel: 2,
    }
</script>
```

新增 `_sidebar.md`：

```markdown
<!-- _sidebar.md -->

- [首頁](/)
- [架設筆記庫](/架設筆記庫/README.md)
- [微積分](/微積分/README.md)
```

新增 `架設筆記庫/_sidebar.md`：

```markdown
<!-- 架設筆記庫/_sidebar.md -->

- [首頁](/)
- [架設筆記庫](/架設筆記庫/README.md)
    - [使用 docsify 將 .md 渲染成網頁](/架設筆記庫/docsify.md)
```

## 外掛程式

[可用外掛程式清單](https://docsify.js.org/#/awesome?id=plugins)

此筆記庫使用以下外掛：

- [docsify-latex](https://scruel.github.io/docsify-latex/)
- [docsify-fontawesome](https://github.com/erickjx/docsify-fontawesome)
- [docsify-plugin-flexible-alerts](https://github.com/fzankl/docsify-plugin-flexible-alerts)
- [docsify-tabs](https://jhildenbiddle.github.io/docsify-tabs/#/?id=docsify-tabs)
- [docsify-sidebar-collapse](https://github.com/iPeng6/docsify-sidebar-collapse)
- [Full text search](https://docsify.js.org/#/plugins?id=full-text-search)
- [Gitalk](https://github.com/gitalk/gitalk)
- [docsify-toc](https://github.com/mrpotatoes/docsify-toc)
- [PrismJS](https://prismjs.com/index.html)
- [mermaid-docsify](https://github.com/Leward/mermaid-docsify#readme)
- [Zoom image](https://docsify.js.org/#/plugins?id=zoom-image)
