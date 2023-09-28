# 【1-2】Von Neumann Model

Computers built on the Turing universal machine store data in their memory.

Around 1944–1945, John von Neumann proposed that, ==since program and data are logically the same, programs should also be stored in the memory of a computer.==

## Four Subsystems

Von Neumann model divide the computer hardware into four subsystems:

- memory
- arithmetic logic unit
- control unit
- input / output

?> The Von Neumann model
<img src="./資訊工程/計算機概論/img/1-2_1.png" style="max-width: 80%;">

### Memory

Memory is the storage area. This is where programs and data are stored during processing.

### Arithmetic Logic Unit

The arithmetic logic unit (ALU) is where ==calculation== and ==logical operations== take place.

See Chapter【4】

### Control Unit

The control unit controls the operations of the memory, ALU, and the input/output subsystem.

### Input / Output

The input subsystem accepts input data and the program from outside the computer, while the output subsystem sends the result of processing to the outside world.

## The Stored Program Concept

The architecture of early computers in which only the data was stored in memory:<br />
the programs for their task were implemented by manipulating a set of switches or by changing the wiring system.

The memory of modern computers hosts both a program and its corresponding data.<br />
This implies that both the data and programs should have the same format, because they are stored in memory.<br />
In fact, they are stored as ==binary== patterns in memory—a sequence of 0s and 1s.

## Sequential Execution of Instructions

A program in the von Neumann model is made of a finite number of ==instructions==.

In this model, the control unit fetches one instruction from memory, decodes it, then executes it.<br />
In other words, the instructions are executed one after another.

Of course, one instruction may request the control unit to jump to some previous or following instruction, but this does not mean that the instructions are not executed sequentially.
