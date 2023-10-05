# 【2-1】Primitive Built-in Types

See also [Fundamental types - cppreference.com](https://en.cppreference.com/w/cpp/language/types)

C++ defines a set of primitive types that include the arithmetic types and a special
type named void.

## Void Type

The `void` type has no associated values and can be used in only a few circumstances, most commonly as the return type for
functions that do not return a value.

## Arithmetic Types

The arithmetic types are divided into two categories:

- integral types (which include character and boolean types)
- floating-point types

==The size of the arithmetic types varies across machines.==<br />
==The standard guarantees minimum sizes as listed in Table.==

| Type        | Meaning                           | Minimum Size          |
| :---------- | :-------------------------------- | :-------------------- |
| bool        | boolean                           | NA                    |
| char        | character                         | 8 bits                |
| wchar_t     | wide character                    | 16 bits               |
| char16_t    | Unicode character                 | 16 bits               |
| char32_t    | Unicode character                 | 32 bits               |
| short       | short integer                     | 16 bits               |
| int         | integer                           | 16 bits               |
| long        | long integer                      | 32 bits               |
| long long   | long integer                      | 64 bits               |
| float       | single-precision floating-point   | 6 significant digits  |
| double      | double-precision floating-point   | 10 significant digits |
| long double | extended-precision floating-point | 10 significant digits |

However, compilers are allowed to use larger sizes for these types.

### Boolean Type

The `bool` type represents the truth values `true` and `false`.

### Character Types

There are several character types, most of which exist to support internationalization.

The basic character type is `char`.<br />
A `char` is guaranteed to ==be big enough to hold== numeric values corresponding to the characters in the machine’s ==basic character set==.<br />

The remaining character types are used for extended character sets.

- `wchar_t`: is guaranteed to be large enough to hold any character in the machine’s largest extended character set.
- `char16_t`, `char32_t`: are intended for Unicode characters.

Unicode is a standard for representing characters used in essentially any natural language.

### Integral Types

The remaining integral types represent integer values of (potentially) different sizes.

The language guarantees that `long long` $\geq$ `long` $\geq$ `int` $\geq$ `short`.

The type `long long` was introduced by the new standard (C++11).

Width in bits by data model:

|    Type     | C++ standard | LP32 | ILP32 | LLP64 | LP64 |
| :---------: | :----------: | :--: | :---: | :---: | :--: |
|   `char`    |  at least 8  |  8   |   8   |   8   |  8   |
|   `short`   | at least 16  |  16  |  16   |  16   |  16  |
|    `int`    | at least 16  |  16  |  32   |  32   |  32  |
|   `long`    | at least 32  |  32  |  32   |  32   |  64  |
| `long long` | at least 64  |  64  |  64   |  64   |  64  |

### Floating-Point Types

The floating-point types represent

- single-precision values
- double-precision values
- extended-precision values

==The standard specifies a minimum number of significant digits.==<br />
==Most compilers provide more precision than the specified minimum.==

Typically,

- `float`is represented in one word (32 bits),
- `double` in two words (64 bits),
- and `long doubles` in either three or four words (96 or 128 bits).

The `float` and `double` types typically yield about 7 and 16 significant digits, respectively.<br />
The type `long double` is often used as a way to accommodate special-purpose floating-point hardware;
its precision is more likely to vary from one implementation to another.

### Machine-Level Representation of the Built-in Types

Computers store data as a sequence of bits, each holding a 0 or 1, such as

$$
00011011011100010110010000111011\ \text{…}
$$

Most computers deal with memory as chunks of bits of sizes that are powers of 2.

#### Byte

Byte is ==the smallest chunk of addressable memory==.

In C++ a byte has at least as many bits as are needed to hold a character in the machine’s basic character
set.<br />
That is, a `char` is the same size as a single machine byte.

#### Word

Word is ==the basic unit of storage==, usually a small number of bytes.

On most machines

- a byte contains 8 bits
- and a word is either 32 or 64 bits, that is, 4 or 8 bytes.

#### Address

Most computers associate a number (called an “address”) with each byte in memory.

> [!example]
> On a machine with 8-bit bytes and 32-bit words,we might view a word of memory as follows<br />
> <img src="./程式語言/C++/img/2-1_1.png" style="max-width: 50%;">
> Here, the byte’s address is on the left, with the 8 bits of the byte following the address.<br />
> <br />
> We can use an address to refer to any of several variously sized collections of bits starting at that address.<br />
> It is possible to speak of the word at address 736424 or the byte at address 736427.<br />
> To give meaning to memory at a given address, we must know the type of the value stored there.<br />
> The type determines how many bits are used and how to interpret those bits.<br />
> <br />
> If the object at location 736424 has type `float` and if `float` on this machine are stored in 32 bits, then we know that the object at that address spans the entire word.<br />
> <br />
> The value of that `float` depends on the details of how the machine stores floating point numbers.<br />
> Alternatively, if the object at location 736424 is an unsigned char on a machine using the ISO-Latin-1 character set, then the byte at that address represents a semicolon.

### Signed and Unsigned Types

==Except for== `bool` and the extended character types (`wchar_t`, `char16_t`, `char32_t`),<br />
==the integral types may be==

- Signed: negative or positive numbers (including zero)

    $e.g.$ `short`, `int`, `long`, and `long long` are all signed.

- Unsigned: greater than or equal to zero

    We obtain the corresponding unsigned type by adding `unsigned` to the type, such as

    ```cpp
    unsigned short var1;
    unsigned int var2;
    unsigned long var3;
    unsigned long long var4;
    ```

Unlike the other integer types, there are three distinct basic character types:

- `char`
- `signed char`
- `unsigned char`

!> `char` is equivalent to `signed char` or `unsigned char` ==depends on the compiler==.

In an unsigned type, all the bits represent the value.

> [!example]
an 8-bit `unsigned char` can hold the values from 0 through 255 inclusive ($2^8 = 256$).

The standard does not define how signed types are represented, but does specify that the range should be evenly divided between positive and negative values.<br />

> [!example]
>
> - Hence, an 8-bit `signed char` is guaranteed to be able to hold values from –127 through 127;
> - most modern machines use representations that allow values from –128 through 127.

### Deciding Which Type to Use

?> Use `unsigned` when you know that the values cannot be negative.

?> For integer arithmetic, use `int` or `long long` (if data values are larger than the minimum guaranteed size of an `int`).

- `short` is usually too small.
- `long` often has the same size as `int`.

?> Use `char` or `bool` only to hold characters or truth values.

If you need a tiny integer, explicitly specify either `signed char` or `unsigned char`.<br />
(Computations using `char` are especially problematic because `char` is signed on some machines and unsigned on others.)

?> Use `double` for floating-point computations.

- `float` usually does not have enough precision.
- the cost of double-precision calculations versus single-precision is negligible.
- In fact, on some machines, double-precision operations are faster than single.
- The precision offered by `long double` usually is unnecessary and often entails considerable run-time cost.

## Type Conversions

See Chapter【4-11】.

## Literals

A value, such as 42, is known as a literal because its value self-evident.<br />
Every literal has a type. The form and value of a literal determine its type.

### Integer Literals

See also [Integer literal](https://en.cppreference.com/w/cpp/language/integer_literal)

We can write an integer literal using the following notation:

| Notation    | Begin With   |
| ----------- | ------------ |
| decimal     |              |
| octal       | `0` (zero)   |
| hexadecimal | `0x` or `0X` |

The following variables are initialized to the same value:

```cpp
int d = 42;   // 42 (decimal, base 10)
int o = 052;  // 52 (octal, base 8)
int x = 0x2a; // 2a (hexadecimal, base 16)
int X = 0X2A; // 2A (hexadecimal, base 16)
```

### Floating-Point Literals

TODO...
