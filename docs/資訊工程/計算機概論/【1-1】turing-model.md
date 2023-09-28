# 【1-1】Turing Model

## Turing Model

The idea of a universal computational device was first described by Alan Turing in 1936.<br />
He proposed that all computation could be performed by a special kind of a machine, now called a Turing machine.

### Data Processors

Before discussing the Turing model, let us define a computer as a data processor.<br />
Using this definition, a computer acts as a black box that accepts input data, processes the data, and creates output data.

?> A single-purpose computing machine
<img src="./資訊工程/計算機概論/img/1-1_1.png" style="max-width: 80%;">

Another problem with this model is that it does not specify the type of processing, or whether more than one type of processing is possible.<br />
In other words, it is not clear how many types or sets of operations a machine based on this model can perform.<br />
==Is it a specific-purpose machine or a general-purpose machine?==

==This model could represent a specific-purpose computer (or processor) that is designed to do a single job==,<br />
such as controlling the temperature of a building or controlling the fuel usage in a car.

==However, computers, as the term is used today, are general-purpose machines.==<br />
They can do many different types of tasks.

### Programmable Data Processors

The Turing model is a better model for a general-purpose computer.<br />
This model adds an extra element to the specific computing machine: the ==program==.<br />
A program is ==a set of instructions== that tells the computer what to do with data.

?> A computer based on the Turing model: programmable data processor
<img src="./資訊工程/計算機概論/img/1-1_2.png" style="max-width: 80%;">

In the Turing model, the output data depends on the combination of two factors:

- the input data
- the program.

With the same input data, we can generate different output if we change the program.<br />
Similarly, with the same program, we can generate different outputs if we change the input data.<br />
Finally, if the input data and the program remain the same, the output should be the same.

#### Same Program, Different Input Data

> [!example]
Although the program is the same, the outputs are different, because different input data is processed.
<img src="./資訊工程/計算機概論/img/1-1_3.png" style="max-width: 80%;">

#### Same Input Data, Different Programs

> [!example]
Each program makes the
computer perform different operations on the input data.
<img src="./資訊工程/計算機概論/img/1-1_4.png" style="max-width: 80%;">

#### Same Input Data, Same Program

We expect the same result each time if both input data and the program are the same, of course.<br />
In other words, when the same program is run with the same input data, we
expect the same output.

### The Universal Turing Machine

A ==universal Turing machine==, a machine that ==can do any computation if the appropriate program is provided==, was the first description of a modern computer.

It can be proved that a very powerful computer and a universal Turing machine can compute the same thing.<br />
We need only provide the data and the program—the description of how to do the computation—to either machine.<br />
In fact, a universal Turing machine is capable of computing anything that is computable.
