# 使用 VS Code 撰寫 Markdown 文件

## VS Code

[Visual Studio Code](https://code.visualstudio.com/)

### 等寬字型推薦

- [Cascadia Code](https://github.com/microsoft/cascadia-code)：微軟為了 Windows Terminal 設計的字體，已內建在 win11 中。
- [Noto Sans TC](https://fonts.google.com/noto/specimen/Noto+Sans+TC?noto.query=Noto+Sans+Traditional+Chinese)：Google 開發的開源字型。

```json
// settings.json

{
    // 後三個字型為預設字型
    "editor.fontFamily": "'Cascadia Code', 'Noto Sans TC', Consolas, 'Courier New', monospace",
    // 啟用連字
    "editor.fontLigatures": true,
}
```

### VS Code 延伸模組

- 繁體中文套件

    - [Chinese (Traditional) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hant)

- Markdown

    - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
    - [Markdown Table](https://marketplace.visualstudio.com/items?itemName=TakumiI.markdowntable)

- Mermaid

    - [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)
    - [Mermaid Markdown Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=bpruitt-goddard.mermaid-markdown-syntax-highlighting)

- LaTeX

    - [LaTeX Workshop wiki](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
        - [安裝 MikTex 並更新套件](https://miktex.org/download)
        - [安裝 Perl](https://strawberryperl.com/)

            設定 Perl 環境變數：

            `開始選單右鍵` → `系統` → `進階系統設定`<br />
            `進階` → `環境變數` → `系統變數` → `編輯 Path` → `新增 C:\Strawberry\perl\bin`

        - [安裝 LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

            `VS Code設定` → `找到 Latex-workshop > latex: Recipes` → `在 settings.json 內編輯`

            把設定中的

            ```json
            {
                "name": "latexmk (xelatex)",
                "tools": [
                    "xelatexmk"
                ]
            },
            ```

            移到最上方，形成

            ```json
            "latex-workshop.latex.recipes": [
                {
                    "name": "latexmk (xelatex)",
                    "tools": [
                        "xelatexmk"
                    ]
                },
                {
                    "name": "latexmk",
                    "tools": [
                        "latexmk"
                    ]
                },
                {
                    "name": "latexmk (latexmkrc)",
                    "tools": [
                        "latexmk_rconly"
                    ]
                },

                …

            ],
            ```

        - 參考：[使用 VS Code 撰寫中文 LaTeX 文件](https://kaibaoom.tw/posts/notes/vscode-latex/)

## Markdown

- [Markdown 語法說明](https://markdown.tw/)

## Mermaid

- [Docs | Mermaid](http://mermaid.js.org/intro/)
- [Mermaid Live Editor](https://mermaid.live/)

## LaTeX

- [LaTeX wiki](https://en.wikibooks.org/wiki/LaTeX)
- [Overleaf 提供的範例參考](https://www.overleaf.com/learn)

## MathJax

- [MathJax basic tutorial and quick reference](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## GeoGebra

數學繪圖工具。

[計算機套件 - GeoGebra](https://www.geogebra.org/calculator)
