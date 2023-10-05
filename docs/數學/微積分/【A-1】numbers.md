# 【A-1】Numbers

## Numbers

$$
\texttt{Complex: } \mathbb{C} =
\begin{cases}
    & \texttt{Real: } \mathbb{R} =
    & \begin{cases}
        & \texttt{Rational: } \mathbb{Q}
        & \begin{cases}
            & \texttt{Integers: } \mathbb{Z}
            & \begin{cases}
                & \texttt{Natural: } \mathbb{N}
                \\\\
                & \texttt{Negative integers}
            \end{cases}
            \\\\\\
            & \texttt{Nonintegers}
            & \begin{cases}
                & \texttt{Finite decimal}
                \\\\
                & \texttt{Repeating decimal}
            \end{cases}
        \end{cases}
        \\\\
        & \texttt{Irrational: } \mathbb{Q}^C
        & \texttt{Nonrepeating decimal}
    \end{cases}
    \\\\
    & \texttt{Imaginary}
\end{cases}
$$

## Real Numbers

Calculus is based on the real number system.

The set of all real numbers is denoted by the symbol $\mathbb{R}$.

### Integers

The set of integers is denoted by the symbol $\mathbb{Z}$.

> [!example]
$$
\dotsc -3, -2, -1, \ 0, \ 1, \ 2, \ 3, \ 4, \dotsc
$$

### Rational Numbers

The set of all rational numbers is denoted by the symbol $\mathbb{Q}$.

We construct the rational numbers, which are ==ratios of integers==. Thus any rational number can be expressed as

> [!note|label:Rational numbers]
$$
r = \frac{m}{n} \quad \texttt{where }
m \texttt{ and }
n \texttt{ are integers and }
n \neq 0
$$

> [!example]
$$
\frac{1}{2} \qquad
-\frac{3}{7} \qquad
46 = \frac{46}{1} \qquad
0.17 = \frac{17}{100}
$$

>[!warning|label:Division by 0 is undefined]
$$
\frac{3}{0} \qquad \frac{0}{0}
$$

If the number is rational, then ==the corresponding decimal is repeating==.

> [!example]
$$
\begin{align}
    \frac{1}{2}
    & = 0.500 \dotsc = 0.5 \overline{0}
    & \frac{2}{3}
    & = 0.666 \dotsc = 0. \overline{6}
    \\\\
    \frac{157}{495}
    & = 0.31717 \dotsc = 0.3 \overline{17}
    & \frac{7}{9}
    & = 1.285714285714 \dotsc = 0. \overline{285714}
\end{align}
$$

### Irrational Numbers

The set of all irrational numbers is denoted by the symbol $\mathbb{Q}^C$.

> [!note]
$\mathbb{Q}^C$ :  The [absolute complement](https://en.wikipedia.org/wiki/Complement_(set_theory)#Absolute_complement) of $\mathbb{Q}$, which is the set of elements not in $\mathbb{Q}$.

Some real numbers, such as $\sqrt{2}$, can’t be expressed as a ratio of integers and are therefore called irrational numbers.

> [!example]
$$
\sqrt{3} \qquad
\sqrt[3]{2} \qquad
\pi \qquad
\sin{1^\circ} \qquad
\log_{10} 2
$$

If the number is irrational, ==the decimal is nonrepeating==.

> [!example]
$$
\sqrt{2} = 1.414213562373095 \dotsc \qquad
\pi = 3.141592653589793 \dotsc
$$

If we stop the decimal expansion of any number at a certain place, we get an approximation to the number.

> [!example]
$$
\pi \approx 3.14159
$$

The symbol $\approx$ is read "is approximately equal to."

### Real Number Line

The real numbers can be represented by points on a line.

<img src="./數學/微積分/img/A-1_1.png">

## Set-Builder Notation

A set is a collection of objects, and these objects are called the elements of the set.

The ==empty set==, denoted by ==$\varnothing$==, is the set that contains no element.

If $S$ is a set.

> [!example]
$$
\begin{align}
    a \in S \quad
    & \texttt{means that } a \texttt{ is an element of } S
    \\\\
    a \notin S \quad
    & \texttt{means that } a \texttt{ is not an element of } S
\end{align}
$$

if $\mathbb{Z}$ represents the set of integers.

> [!example]
$$
-3 \in \mathbb{Z} \qquad \pi \notin \mathbb{Z}
$$

If $S$ and $T$ are sets.

| Set Operation |                  Set Notation                   |                                                    Diagram                                                     |
| :-----------: | :---------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
|     Union     | $S \cup T = \{ x \mid x \in S$ or $x \in T \}$  |    ![Union](https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Venn0111.svg/200px-Venn0111.svg.png)     |
| Intersection  | $S \cap T = \{ x \mid x \in S$ and $x \in T \}$ | ![Intersection](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Venn0001.svg/200px-Venn0001.svg.png) |

Some sets can be described by listing their elements between braces.

> [!example]
$$
A = \{ 1,\ 2,\ 3,\ 4,\ 5,\ 6 \}
$$

We could also write $A$ in set-builder notation as

> [!example]
$$
A = \{ x \mid  x \in \mathbb{Z} \texttt{ and } 0 < x < 7 \}
$$

which is read "$A$ is the set of $x$ such that $x$ is an integer and $0 < x < 7$."
