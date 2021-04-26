### Part 1a
###### 1
This is what is printed by line 9: "values added: 20". `result` was declared using var inside the `sumValues` function. Since it's being printed inside the `sumValues` function, it doesn't cause an error.
###### 2
This is what is printed by line 13: "final result: 20". If a variable was declared using var, its scope is its function, even if it was declared inside a conditional statement or a loop, so printing `result` doesn't cause an error.
###### 3
This is what is printed by line 9: "values added: 20". `result` was declared using let inside the if statement between lines 4 and 10. Since line 9 lies in the if statement's block, printing `result` doesn't cause an error. 
###### 4
Attempting to print `result` in line 13 causes an error because `result` lies only inside the scope of the if statement block between line 4 and 10.
###### 5
The code returns an error before printing anything because we attempt to reassign the const variable on line 7 after we have initially intialied it on line 5.
###### 6
In addition, to the code returning an error because of an attempt to reinitalize the const variable, the variable `result` is not accessible by the scope of line 13. 
### Part 1b
###### 1
"3" is printed by line 12. The code doesn't cause an error. That is because we attempt to print the variable. which was declared using var, inside the same function.
###### 2
"150" is printed by line 13. The code doesn't cause an error. That is because we attempt to print the variable. which was declared using var, inside the same function.
###### 3
"150" is printed by line 14. The code doesn't cause an error. That is because we attempt to print the variable. which was declared using var, inside the same function.
###### 4
The function returns {50,100,150}. This value is returned by the function, and the variable is an array, which is a reference type, so the code doesn't cause an error.
###### 5
The code will cause an error because the variable `i` doesn't exist outside the scope of the for loop because it was declared using let, and we're attempting to use it outside of the scope of the for loop it was declared in.
###### 6
The code will cause an error because the variable `discountedPrice` doesn't exist outside the scope of the for loop because it was declared using let, and we're attempting to use it outside of the scope of the for loop it was declared in.
###### 7
The code will print "150" without causing an error since finalPrice was declared inside the scope of the function (not the scope of the loop) and we're using it within the scope of the function it was declared in.
###### 8
{50,100,150} is returned by the function without causing an error. That is because this value is returned by the function, and the variable is an array, which is a reference type.
###### 9
Line 11 causes an error because `i` is declared using let inside a for loop, so its scope lies only inside the for loop, and we're attempting to use it outside of this for loop.
###### 10
"3" is printed. There's no error because (1) we don't attempt to reassign the constant `length` and (2) we don't attempt to use `length` outside of the function it was declared in (and it wasn't declared inside a for loop nor an if statement).
###### 11
The function returns {50,100,150}. This value is returned by the function, and the variable is an array, which is a reference type, so the code doesn't cause an error.
###### 12
###### 12A
student.name
###### 12B
student["Grad Year"]
###### 12C
student.greeting()
###### 12D
student["Favorite Teacher"].name
###### 12E
student.courseLoad[0] -> for index 0
student.courseLoad[1] -> for index 1
###### 13
###### 13A
'32'
###### 13B
1
###### 13C
3
###### 13D
'3null'
###### 13E
4
###### 13F
0
###### 13G
'3undefined'
###### 13H
Nan
###### 14
###### 14A
true
###### 14B
false
###### 14C
true
###### 14D
false
###### 14E
false
###### 14F
true

###### 15
== ignores the variables types of the 2 operands, while === considers the variables types. That is why in 14c, 2 == '2' yields true while 2 === '2' yields false.

###### 17



