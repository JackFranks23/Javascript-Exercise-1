function calculator() {
let input1, input2, result, sign;
input1 = Number(prompt("Type The First Number"))
input2 = Number(prompt("Type The Second Number"))
sign = prompt(" Addition, Subtraction, Multiplication, or Division?")
result = ""

if (sign === "+") {
    result="input1"+"input2";
}
else if (sign === "x" || "*") {
    result="input1"*"input2";
}
else if (sign === "/") {
    result="input1"/"input2";
}
else if (sign === "-") {
    result=Number(input1)-Number(input2);
}
else {
    result="How did we get here?"
}
document.open()
document.write( 
    `<button onclick="calculator()">Click for Magic</button>
    <h1>` + result  + `</h1>`
)
document.close()
}