### 1
The bug is that the variables `num1`, `num2`, and therefore also `result` are not integers (but instead are 2 objects and an undefined variable), while we intend for the reuslt to be the result of summing `num1` and `num2` as integers. 
### 2
I fixed the bug by changing the line `let result = num1 + parseIntnum2` to `let result = parseInt(num1) + parseInt(num2);`.
I included a screenshot called fix.jpg in the part3 folder.
### 3
citylots.json
### 4
part2.js
### 5
citylots.json: 11.1 MB
part2.js: 53 bytes
### 6
92.43 ms
### 7
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
### 8
Apache
### 9
Tue, 26 Jan 2021 22:14:13 GMT
### 10
application/json
### 11
fetchData()