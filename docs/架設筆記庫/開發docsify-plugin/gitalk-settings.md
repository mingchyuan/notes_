# 使用 Gitalk 替每個頁面加入獨一無二的專屬留言區

!> 請斟酌使用。

## Gitalk

官方文件：[Gitalk](https://github.com/gitalk/gitalk)

### 新增 OAuth Apps

`GitHub` → `Settings` → `Developer Settings` → `OAuth Apps`

### 關於 Client Secrets

[暴露 client secrets 是否安全](https://github.com/imsun/gitment#is-it-safe-to-make-my-client-secret-public)

理論上 client secrets 是只能用在自己的 domain。

## 動機

避免不同頁面使用到相同的留言區。

## 解決方法

抓取該頁面的路徑與檔名，稍微處理後再設定為 id（作為 issues 中的 label）。<br />
這使得每個頁面 id 都不相同，能讓留言儲存在相對應的 issues 中。

!> label 有長度限制，所以只擷取前 50 字元。需要注意路徑資料夾與檔案名稱的長度。

## 相關檔案連結

- [docsify-plugin-gitalk-settings.js](https://raw.githubusercontent.com/mingchyuan/notes/main/docs/plugins/docsify-plugin-gitalk-settings.js)
