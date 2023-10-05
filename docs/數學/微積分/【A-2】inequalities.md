# 【A-2】Inequalities

## Intervals

### Open Interval

> [!example]
$$
(a,\ b) = \{ x \mid  a < x < b \}
$$

<img src="./數學/微積分/img/A-2_1.png" style="max-width: 40%;">

### Closed Interval

> [!example]
$$
[a,\ b] = \{ x \mid a \leq x \leq b \}
$$

<img src="./數學/微積分/img/A-2_2.png" style="max-width: 40%;">

### Table of Intervals

| Notation             | Set description                |
| :------------------- | :----------------------------- |
| $(a,\ b)$            | $\{ x \mid a < x < b \}$       |
| $[a,\ b]$            | $\{ x \mid a \leq x \leq b \}$ |
| $[a,\ b)$            | $\{ x \mid a \leq x < b \}$    |
| $(a,\ b]$            | $\{ x \mid a < x \leq b \}$    |
| $(a,\ \infty)$       | $\{ x \mid x > a \}$           |
| $[a,\ \infty)$       | $\{ x \mid x \geq a \}$        |
| $(-\infty,\ b)$      | $\{ x \mid x < b \}$           |
| $(-\infty,\ b]$      | $\{ x \mid x \leq b \}$        |
| $(-\infty,\ \infty)$ | $\mathbb{R}$                   |

> [!example]
$$
[a,\ \infty) = \{ x \mid  x \geq a \}
$$

<img src="./數學/微積分/img/A-2_3.png" style="max-width: 40%;">

> [!attention]
$\infty$ ("infinity") is not a number. The notation stands for the set of all numbers that are either greater than or equal to $a$.

## Inequalities

### Rules for Inequalities

> [!note|label:Rules for inequalities]
>
> 1. $\texttt{If } a < b \texttt{ , then } a + c < b + c$
> 2. $\texttt{If } a < b \texttt{ and } c < d \texttt{ , then } a + c < b + d$
> 3. $\texttt{If } a < b \texttt{ and } c > 0 \texttt{ , then } ac < bc$
> 4. <mark>$\texttt{If } a < b \texttt{ and } c < 0 \texttt{ , then } ac > bc$</mark>
> 5. $\texttt{If } 0 < a < b \texttt{ , then } \frac{1}{a} > \frac{1}{b}$

### Example

> [!example]
Solve $1 + x < 7x + 5$.

$$
\begin{align}
    & 1 + x < 7x + 5
    &&
    \\\\
    & x < 7x + 4
    && \texttt{( Rule 1 with } C = -1 \texttt{ )}
    \\\\
    & -6x < 4
    && \texttt{( Rule 1 with } C = -7x \texttt{ )}
    \\\\
    & x > -\frac{4}{6} = -\frac{2}{3}
    && \texttt{( Rule 4 with } C = -\frac{1}{6} \texttt{ )}
\end{align}
$$

> [!example]
Solve $4 \leq 3x - 2 < 13$

$$
\begin{gather}
    4 \leq 3x - 2 < 13
    \\\\
    6 \leq 3x < 15
    \\\\
    2 \leq x < 5
    \\\\
\end{gather}
$$

> [!example]
Solve $x^2 - 5x + 6 \leq 0$.

$$
\text{let } y = f(x) = x^2 - 5x + 6 \overset{set}{=} 0
$$

Factor the function.

$$
(x - 2)(x - 3) = 0
$$

[【playlist】How to factor polynomials - YouTube](https://www.youtube.com/playlist?list=PLxV9sWI37Onf9RpDQkqCKOE1JwvuoBZzH)

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=MYKsRxHxew8o9yQF&amp;list=PLxV9sWI37Onf9RpDQkqCKOE1JwvuoBZzH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Find the zeros of the polynomial ( x-intercept, root ).

$$
x = 2, \quad x = 3
$$

The numbers 2 and 3 divide the real line into three intervals.

$$
(-\infty,\ 2) \qquad (2,\ 3) \qquad (3,\ \infty)
$$

==Use test values in each interval.==

For example. In interval $(-\infty,\ 2)$, let's pick $x = 1$

$$
\overset{neg}{(x - 2)} \overset{neg}{(x - 3)} = \overset{pos}{f(x)} = y
$$

Then we record these signs.

<img src="./數學/微積分/img/A-2_4.png" style="max-width: 40%;">

$x^2 - 5x + 6$ is negative when $2 < x < 3$.

Thus the solution of the inequality $x^2 - 5x + 6 \leq 0$ is

$$
\{ x \mid 2 \leq x \leq 3 \} = [2,\ 3]
$$

<img src="./數學/微積分/img/A-2_5.png" style="max-width: 40%;">

[Sketching polynomials (the precalculus way: using zeros, sign chart and end behavior) - YouTube](https://www.youtube.com/watch?v=wCTwBwe2xqY)

<iframe width="560" height="315" src="https://www.youtube.com/embed/wCTwBwe2xqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> [!example]
Solve $x^3 + 3x^2 > 4x$.

$$
\begin{gather}
    x^3 + 3x^2 > 4x
    \\\\
    f(x) = x^3 + 3x^2 - 4x > 0
    \\\\
    x(x - 1)(x + 4) > 0
\end{gather}
$$

use the solutions

$$
x = -4, \quad x = 0, \quad x = 1
$$

to divide the real line into four intervals

$$
(-\infty,\ -4) \qquad (-4,\ 0) \qquad (0,\ 1) \qquad (1,\ \infty)
$$

On each interval the product keeps a constant sign as shown in the following chart:

|     Interval |  $x$  | $x-1$ | $x+4$ | $f(x)=x(x-1)(x+4)$ |
| -----------: | :---: | :---: | :---: | :----------------: |
|     $x < -4$ |  $-$  |  $-$  |  $-$  |        $-$         |
| $-4 < x < 0$ |  $-$  |  $-$  |  $+$  |        $+$         |
|  $0 < x < 1$ |  $+$  |  $-$  |  $+$  |        $-$         |
|      $x > 1$ |  $+$  |  $+$  |  $+$  |        $+$         |

Then we read from the chart that the solution set is

$$
\{ x \mid -4 < x < 0 \texttt{ or } x > 1 \} = (-4,\ 0) \cup (1,\ \infty)
$$

<img src="./數學/微積分/img/A-2_6.png" style="max-width: 40%;">

?> Sketch $f(x) = x^3 + 3x^2 - 4x$ and the solution of $f(x) > 0$.

<img src="./數學/微積分/img/A-2_7.png" style="max-width: 70%;">

?> Sketch $g(x) = x^3 + 3x^2,\ h(x) = 4x$ and the solution of $x^3 + 3x^2 > 4x$.

<img src="./數學/微積分/img/A-2_8.png">
