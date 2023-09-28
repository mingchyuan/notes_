# C++ 學習資源

## 參考書籍

- Stanley B. Lippman, Josée Lajoie, Barbara E. Moo. (2012). *C++ Primer, 5th Edition*.
- Bjarne Stroustrup. (2013). *The C++ Programming Language, 4th Edition*.

## 網路資源

- [C++ reference](https://en.cppreference.com/w/cpp)

## IDE 與 Compiler

- [C/C++ for Visual Studio Code](https://code.visualstudio.com/docs/languages/cpp)
- [Using GCC with MinGW](https://code.visualstudio.com/docs/cpp/config-mingw)

在設置 C++ 環境前，可能已經安裝過其他 C/C++ compiler，例如為了使用 LaTaX 而安裝 VS Code + MiKTex + Perl。<br />
其中的 Strawberry Perl 包含了 C/C++ compiler，因此系統環境變數順序需要調整成 msys2 在前：

```text
C:\msys64\ucrt64\bin
C:\Strawberry\perl\bin
```
