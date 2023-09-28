# 讓 docsify 支援非正式的 Markdown Highlight Text

!> 請斟酌使用。

## 動機

### Markdown 支援斜體與粗體

<!-- tabs:start -->

#### **Markdown**

編寫 Markdown 文件時，可以標記需要強調的文字：

```markdown
*single asterisks*

_single underscores_

**double asterisks**

__double underscores__
```

#### **轉換成 HTML**

docsify 會將 Markdown 轉換成相對應的 HTML 格式：

```html
<em>single asterisks</em>

<em>single underscores</em>

<strong>double asterisks</strong>

<strong>double underscores</strong>
```

#### **呈現在網頁上**

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

<!-- tabs:end -->

### Markdown 不支援 Highlight

<!-- tabs:start -->

#### **Markdown**

儘管一些 Markdown 編輯器，例如 Obsidian，有提供上色文字背景的語法：

```markdown
==一些想塗上背景顏色的文字==
```

#### **呈現在編輯器上**

==一些想塗上背景顏色的文字==

#### **呈現在網頁上**

&#61;&#61;一些想塗上背景顏色的文字&#61;&#61;

#### **原因**

因為此語法並非是 Markdown 提供的標準語法，所以 docsify 將 Markdown 轉換成 HTML 後，會是

```html
<p>==一些想塗上背景顏色的文字==</p>
```

而非 HTML 的 highlight text 標籤

```html
<mark>一些想塗上背景顏色的文字</mark>
```

<!-- tabs:end -->

## 解決方法

### 目的

要在 docsify 把 Markdown 轉換成 HTML 前，將==在code block 外==的 ```==一些文字==``` 修改成 `<mark>一些文字</mark>`。

### 使用正規表達式找出目標

利用 [regex 線上測試網站](https://regex101.com/) 直接貼上 Markdown 內容來觀察配對成果。

### 分析 Code Block 結構找出合適的 Regex

將區塊分為三部份配對。而 inline code 就增加一點規則限制來配合 regex。

<style>
#regex-example {
    color: #383d41;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
}
</style>

> [!example]
<code id="regex-example" class="paragraph-color blue-background-color">&nbsp<br />&#96;&#96;&#96;cpp&nbsp<br />if (a </code><code id="regex-example" class="paragraph-color yellow-background-color">&#61;&#61; 1 || b &#61;&#61;</code><code id="regex-example" class="paragraph-color green-background-color"> 2) {&nbsp<br />    // do something&nbsp<br />}&nbsp<br />&#96;&#96;&#96;&nbsp<br />&nbsp</code>

<!-- tabs:start -->

#### **<span class="paragraph-color yellow-background-color">黃色部份</span>**

- 配對 ```== ==``` 之間的字串，且該字串中不可包含換行字元（`\n`）。

    $e.g.$
     &#61;&#61;text1&#61;&#61;text2&#61;&#61;
    - [ ] ```==(.*)==``` 配對到 &#61;&#61;text1&#61;&#61;text2&#61;&#61;
    - [x] ```==(.*?)==``` 配對到 &#61;&#61;text1&#61;&#61;

- <span id="highlight-rule">==設定 highlight 規則==</span>：<br />
Highlight 的字串左右不可空白。==至少要有兩個字元==才會替換成`<mark>` ，字元太少請直接使用 `<mark></mark>`。

    - ```(==\S(.*?)\S==)```

#### **<span class="paragraph-color blue-background-color">藍色部份</span>**

配對一個字元（含空白、換行）：

- `[\s\S]`

在不是 ==&#96;&#96;&#96;== 的地方配對一個字元（含空白、換行）：

- ``((?!`{3})[\s\S])``

在不是 ==&#96;&#96;&#96;== 的地方配對一串字元（含空白、換行）：

- ``(((?!`{3})[\s\S])*)``

最前方必須是 ==\n&#96;&#96;&#96;== 。且考慮到 inline code，所以改成 `\s`：

- ``(\s`{3})(((?!`{3})[\s\S])*)``

code block 的 ==&#96;&#96;&#96;== 下一字元是英文（某個程式語言的開頭字母）。<br />
而 inline code 的 ==&#96;&#96;&#96;== 下一字元則是非空白字元（自訂規則），但也可能不存在該字元 ，例如 ==&#96;&#96;&#96;&#61;&#61;==。所以加上 `\S?`：

- ``(\s`{3}\S?)(((?!`{3})[\s\S])*)``

#### **<span class="paragraph-color green-background-color">綠色部份</span>**

在不是 ==&#96;&#96;&#96;== 的地方配對一串字元（含空白、換行）：

- ``(((?!`{3})[\s\S])*)``

最後方必須是 ==&#96;&#96;&#96;\n==，且考慮到 inline code，所以改成 `\s`：

- ``(((?!`{3})[\s\S])*)(`{3}\s)``

#### **自訂 inline code 編寫規則**

==設定規則==：

1. code 左右不可空白。
2. ==&#96;== 外要有空白字符。
3. 若是 code 含有 `==`
    `==` 就跟寫得跟 code block 一樣，但在同一行內。

    $e.g.$

    ==&nbsp;==
    ==&#96;&#96;&#96;==
    ```if( a == 1 && b == 2 ) {…}```
    ==&#96;&#96;&#96;==
    ==&nbsp;==

4. 當 code 中沒有 `==` 可以改回正常寫法。

    $e.g.$

    ==&nbsp;==
    ==&#96;==
    `int i = 1;`
    ==&#96;==
    ==&nbsp;==

    ==&nbsp;==
    ==&#96;&#96;&#96;==
    ```int i = 1;```
    ==&#96;&#96;&#96;==
    ==&nbsp;==

<!-- tabs:end -->

將三個部份合併起來起來後，就能配對到完整 code block 或 inline code 的字串：

```js
const regex = /(\s`{3}\S?)(((?!`{3})[\s\S])*)(==\S(.*?)\S==)(((?!`{3})[\s\S])*)(`{3}\s)/;
```

接下來，因為不需要 ```== ==``` 以外的部分，所以利用 `(?:pattern)` 取得符合<span class="blue-background-color">藍</span><span class="green-background-color">綠</span>的 pattern，但不需要<span class="blue-background-color">藍</span><span class="green-background-color">綠</span>字串。<br />
也就是只得到==黃色部份==的字串：

```js
const regex = /(?:\s`{3}\S?)(?:((?!`{3})[\s\S])*)(==\S(.*?)\S==)(?:((?!`{3})[\s\S])*)(?:`{3}\s)/
```

最後使用  `(?!pattern)`，得到非 code block 也非 inline  code 的 ```==highlight text==``` ：

```js
const regex = /(?!(?:\s`{3}\S?)(?:((?!`{3})[\s\S])*))(==\S(.*?)\S==)(?!(?:((?!`{3})[\s\S])*)(?:`{3}\s))/;
```

### 將 == 替換成 \<mark>

需要在 docsify 將 Markdown 文件轉換成 HTML 前執行替換：

```js
// Invoked on each page load before new markdown is transformed to HTML.
hook.beforeEach(function (markdown) {
    // 將 ==文字== 替換成 <mark>文字</mark>
    return markdown;
});
```

把配對到的舊子字串修改成新子字串：

```js
function replaceMatchWithString(source, match, string) {
    const firstHalf = source.substring(0, match.index);
    const secondHalf = source.substring(match.index + match[0].length, source.length);

    return firstHalf + string + secondHalf;
}
```

接著不斷搜尋並替換：

```js
const regex;
let match;

while (match = markdown.match(regex)) {
    const newText = "<mark>" + match[0].replace(/==/g, "") + "</mark>";
    markdown = replaceMatchWithString(markdown, match, newText);
}
```

## 相關檔案連結

- [html-tag.css](https://raw.githubusercontent.com/mingchyuan/notes/main/docs/css/html-tag.css)
- [docsify-plugin-markdown-highlight-text.js](https://raw.githubusercontent.com/mingchyuan/notes/main/docs/plugins/docsify-plugin-markdown-highlight-text.js)

## 注意事項

### HTML Character

有時可以使用 [HTML Charset](https://www.w3schools.com/html/html_charset.asp)，例如：

- ==&#61;==：`&#61;`
- ==&#96;==：`&#96;`

### LaTeX 的數學排版

?> 先 docsify-latex 再導入此外掛，就不用考慮後兩項了。

```html
<!-- index.html -->

<!-- docsify-latex & MathJax -->
<script src="//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-latex@0"></script>

<!-- 支援 Markdown 的 ==Highlighted text== 語法 -->
<script src="./plugins/docsify-plugin-markdown-highlight-text.js"></script>
```

?> 或是在 `==` 內的文字兩旁加上空白。參考：[設定 highlight 規則](#highlight-rule)

$$
\text{== 文字兩旁有空白 ==}
$$

?> 或是排除 `$` 字符。

```js
const regex = /(?!(?:\s`{3}\S?|\$)(?:((?!`{3})[\s\S])*))(==\S(.+?)\S==)(?!(?:((?!`{3})[\s\S])*)(?:`{3}\s|\$))/;
```

### 巢狀 Code Block

?> 建議在 `==` 內的文字兩旁加上空白。參考：[設定 highlight 規則](#highlight-rule)

```markdown
==文字兩旁無空白==
== 文字兩旁有空白 ==
    
    ```markdown
    ==文字兩旁無空白==
    == 文字兩旁有空白 ==
    
        ```markdown
        ==正常運作==
        ```
        
    ==正常運作==
    ```
    
==正常運作==
```
