# 使用 GitHub Pages 將筆記架設成網站

## 使用 Git

官方文件：[Git - Book](https://git-scm.com/book/zh-tw/v2)

在專案資料夾 `notes` 建立一個名為 .git 的子資料夾，其中包含 Git 所有必需的倉儲檔案：

```bash
cd notes
git init
```

追蹤所有檔案：

```bash
git add -A
```

提交：

```bash
git commit
```

建立分支：

```bash
git branch -M main
```

先在 GitHub 建立 `notes` 倉儲 ( repository ) 後，再設定成遠端版本庫：

```bash
git remote add origin https://github.com/mingchyuan/notes.git
```

將完成的提交推送到遠端伺服器上：

```bash
git push -u origin main
```

### 在 VS Code 中使用 Git

延伸模組：[Git Extension Pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.git-extension-pack)

- [在 VS Code 啟用 Git？介紹 Git 版面基本操作](https://pythonviz.com/git/use-git-in-vs-code-basic-operations/)
- [為你自己學 Git](https://gitbook.tw/)

### Git Commit Message 規範與實例

- [Git Commit Message 這樣寫會更好，替專案引入規範與範例](https://wadehuanglearning.blogspot.com/2019/05/commit-commit-commit-why-what-commit.html)
- [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)

## 部屬至 GitHub Pages

`notes` repository → `Settings` → `Pages`

接著選擇 `main` banch 和 `/docs` folder，存檔後即可在上方獲得部屬網址。
