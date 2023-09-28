# 【1-3】Computer Components

We can think of a computer as being made up of three components:

- computer hardware
- data
- computer software

## Computer Hardware

Computer hardware today has four components under the von Neumann model, although we can have different types of memory, different types of input/output subsystems, and so on.

See Chapter【5】.

## Data

The von Neumann model clearly defines a computer as a data processing machine that accepts the input data, processes it, and outputs the result.

### Storing Data

If a computer is an electronic device, the best way to store data is in the form of an electrical signal, specifically its presence or absence.<br />
This implies that a computer can store data in one of two states.

Obviously, the data we use in daily life is not just in one of two states.

- Our numbering system uses digits that can take one of ten states (0 to 9).<br />
It needs to be changed to another system that uses only two states (0 and 1).
- We also need to be able to process other types of data (text, image, audio, video).<br />
These also cannot be stored in a computer directly, but need to be changed to the appropriate form (0s and 1s).

See Chapter【3】【4】.

### Organizing Data

Although data should be stored only in one form inside a computer, a binary pattern, data outside a computer can take many forms.

In addition, computers (and the notion of data processing) have created a new field of study known as data organization, which asks the question: can we organize our data into different entities and formats before storing them inside a computer?

See Chapter【11】-【14】.

## Computer Software

The main feature of the Turing or von Neumann models is the concept of the ==program==.

Although early computers did not store the program in the computer’s memory, they did use the concept of programs.<br />
Programming those early computers meant changing the wiring systems or turning a set of switches on or off.<br />
Programming was therefore a task done by an operator or engineer before the actual data processing began.

### Programs Must Be Stored

In the von Neumann model programs are stored in the computer’s memory.<br />
Not only do we need memory to hold data, but we also need memory to hold the program.

<img src="./資訊工程/計算機概論/img/1-3_1.png" style="max-width: 30%;">

### A Sequence of Instructions

Another requirement of the model is that the program must consist of a sequence of instructions.<br />
Each instruction operates on one or more data items.<br />
Thus, an instruction can change the effect of a previous instruction.

We might ask why a program must be composed of instructions.<br />
The answer is ==reusability==.

Today, computers do millions of tasks.<br />
If the program for each task was an independent entity without anything in common with other programs, programming would be difficult.

The Turing and von Neumann models make programming easier by defining the different instructions that can be used by computers.<br />
A programmer can then combine these instructions to make any number of programs.<br />
Each program can be a different combination of different instructions.

### Algorithms

A programmer must first solve the problem in a step-by-step manner, then try to find the appropriate instruction (or series of instructions) to implement those steps.

This step-by-step solution is called an ==algorithm==.

### Languages

At the beginning of the computer age there was only one computer language, ==machine language==.<br />
Programmers wrote instructions (using binary patterns) to solve a problem.

However, as programs became larger, writing long programs using these patterns became tedious.<br />
Computer scientists came up with the idea of using symbols to represent binary patterns, just as people use symbols (words) for commands in daily life.<br />

Of course, the symbols used in daily life are different from those used in computers.<br />
So the concept of computer languages was born.

A natural language such as English is rich and has many rules to combine words correctly:<br />
a computer language, on the other hand, has a more limited number of symbols and also a limited number of words.

See Chapter【9】.

### Software Engineering

Something that was not defined in the von Neumann model is software engineering, which is the design and writing of structured programs.

Today it is not acceptable just to write a program that does a task: the program must follow strict rules and principles.

See Chapter【10】.

### Operating Systems

During the evolution of computers, scientists became aware that there was a series of instructions common to all programs.<br />
For example, instructions to tell a computer where to receive data and where to send data are needed by almost all programs.

It is more efficient to write these instructions only once for the use of all programs.<br />
Thus the concept of the operating system emerged.

An operating system originally worked as a manager to facilitate access to the computer’s components by a program, although today operating
systems do much more.

See Chapter【7】.
