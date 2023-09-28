# 【A-3】Absolute Values

## Absolute Values

### As Its Distance from Zero

The absolute value of a number $a$, denoted by $\mid a \mid$, is ==the distance from $a$ to $0$== on the real number line.

Distances are always positive or $0$, so we have

$$
\mid a \mid \; \geq 0 \quad \text{for every number } a
$$

> [!example]
$$
\begin{gather}
    \mid 3 \mid \; = 3 \qquad
    \mid -3 \mid \; = 3 \qquad
    \mid 0 \mid \; = 0 \qquad
    \\\\
    \mid \sqrt{2} - 1 \mid \; = \sqrt{2} - 1 \qquad
    \mid 3 - \pi \mid \; = \pi - 3
\end{gather}
$$

### Definition

> [!note|label:Definition]
$$
\begin{align}
    & \mid a \mid \; = a
    & \text{if } a \geq 0
    \\\\
    & \mid a \mid \; = -a
    & \text{if } a < 0
\end{align}
$$

> [!example]
Express $\mid 3x - 2 \mid$ without using the absolute-value symbol.

$$
\begin{align}
    \mid 3x - 2 \mid
    & =
    \begin{cases}
        3x - 2
        & \text{if } 3x - 2 \geq 0
        \\\\
        -(3x - 2)
        & \text{if } 3x - 2 < 0
    \end{cases}
    \\\\
    & =
    \begin{cases}
        3x - 2
        & \text{if } x \geq \dfrac{2}{3}
        \\\\
        2 - 3x
        & \text{if } x < \dfrac{2}{3}
    \end{cases}
\end{align}
$$

### Positive Square Root

Recall that the symbol $\sqrt{ r }$ means "the positive square root of $r$."

Thus $\sqrt{r} = s$ means $s^2 = r$ and $s \geq 0$.

Therefore the equation $\sqrt{a^2} = a$ is not always true. It is true only when $a \geq 0$.

If $a < 0$, then $-a > 0$, so we have $\sqrt{a^2} = -a$.

We then have the equation

> [!note]
$$
\sqrt{a^2} = \; \mid a \mid
$$

### Properties

> [!note|label:Properties of absolute values]
> Suppose $a$ and $b$ are any real numbers and $n$ is an integer. Then
>
> 1. $\mid ab \mid \; = \; \mid a \mid \; \mid b \mid$
> 2. $\mid \dfrac{a}{b} \mid \; = \dfrac{\mid a \mid}{\mid b \mid} \qquad ( \; b \neq 0 \;)$
> 3. $\mid a^n \mid \; = \; \mid a \mid ^n$

For solving equations or inequalities involving absolute values, it’s often very helpful to use the following statements.

> [!note|label:Properties of absolute values]
> Suppose $a > 0$. Then
>
> 1. $\mid x \mid \; = a \quad \text{if and only if} \quad x = \pm a$
> 2. $\mid x \mid \; < a \quad \text{if and only if} \quad -a < x < a$ <img src="./數學/微積分/img/A-3_1.png" style="max-width: 50%;">
> 3. $\mid x \mid \; > a \quad \text{if and only if} \quad x > a \enspace \text{or} \enspace x < -a$

> [!example]
$\mid a - b \mid \; = \; \mid b - a \mid$

<img src="./數學/微積分/img/A-3_2.png" style="max-width: 50%;">

> [!example]
Solve $\mid 2x - 5 \mid \; = 3$.

$$
\begin{align}
    & \mid 2x - 5 \mid \; = 3
    \\\\
    \Rightarrow \quad
    & \begin{cases}
        2x - 5 = 3
        \\\\
        2x - 5 = -3
    \end{cases}
    \\\\
    & x = 4 \text{ or } x = 1
\end{align}
$$

> [!example]
Solve $\mid x - 5 \mid \; < 2$.

$$
\begin{gather}
    & \mid x - 5 \mid \; < 2
    \\\\
    \Rightarrow
    & -2 < x - 5 < 2
    \\\\
    & 3 < x < 7
\end{gather}
$$

$\mid x - 5 \mid \; < 2$ says that the distance from $x$ to the $5$ is less than $2$.

<img src="./數學/微積分/img/A-3_3.png" style="max-width: 50%;">

?> Sketch  $f(x) = \; \mid x - 5 \mid$ and the solution of $f(x) < 2$.

$$
\begin{gather}
    f(x) = \; \mid x - 5 \mid
    \\\\
    f(x) =
    \begin{cases}
        x - 5
        & \text{if } x \geq 5
        \\\\
        -x + 5
        & \text{if } x < 5
    \end{cases}
\end{gather}
$$

<img src="./數學/微積分/img/A-3_4.png" style="max-width: 70%;">

> [!example]
Solve $\mid 3x + 2 \mid \; \geq 4$.

$$
\begin{align}
    & \mid 3x + 2 \mid \; \geq 4
    \\\\
    \Rightarrow \quad
    & \begin{cases}
        3x + 2 \geq 4
        \\\\
        3x + 2 \leq -4
    \end{cases}
    \\\\
    \Rightarrow \quad
    & \begin{cases}
        x \geq \dfrac{2}{3}
        \\\\
        x \leq -2
    \end{cases}
\end{align}
$$

So the solution set is

$$
\{ x \mid x \leq -2 \text{ or } x \geq \frac{2}{3} \}
= (-\infty,\ -2] \; \cup \; [\frac{2}{3},\ \infty)
$$

### The Triangle Inequality

> [!note|label:The triangle inequality]
If $a$ and $b$ are any real numbers, then
$$
\mid a + b \mid \; \leq \; \mid a \mid \; + \; \mid b \mid
$$

Notice that

$$
\begin{gather}
    -\mid a \mid \; \leq a \leq \; \mid a \mid
    & \quad (1)
    \\\\
    -\mid b \mid \; \leq b \leq \; \mid b \mid
    & \quad (2)
    \\\\
    -(\; \mid a \mid \; + \; \mid b \mid \;) \leq a + b \leq \; \mid a \mid \; + \; \mid b \mid
    & \quad (1) + (2)
\end{gather}
$$

let $k = \; \mid a \mid \; + \; \mid b \mid$

$$
\begin{align}
    -k & \leq a + b \leq k
    \\\\
    \Rightarrow \quad
    & \mid a + b \mid \; \leq k
    \\\\
    \Rightarrow \quad
    & \mid a + b \mid \; \leq \; \mid a \mid \; + \; \mid b \mid
\end{align}
$$

> [!example]
If $\mid x - 4 \mid \; < 0.1$ and $\mid y - 7 \mid \; < 0.2$, use the triangle inequality to estimate $\mid (x + y) - 11 \mid$.

$$
\begin{align}
\mid (x + y) - 11 \mid \; & = \; \mid (x - 4) + (y - 7) \mid
\\\\
& \leq \; \mid x - 4 \mid \; + \; \mid y - 7 \mid
\\\\
& < 0.1 + 0.2 = 0.3
\end{align}
$$

Thus

$$
\mid (x + y) - 11 \mid \; < 0.3
$$
