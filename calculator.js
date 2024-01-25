function calculator() {
let input1, input2, result, sign, final, equals;
input1 = Number(prompt("Type The First Number"))
sign = prompt(" +, -, *,  or /")
input2 = Number(prompt("Type The Second Number"))
result = ""
final = ""
equals = "="
if (sign === "+") {
    result=input1+input2;
}
else if (sign === "*") {
    result=input1*input2;
}
else if (sign === "/") {
    result=input1/input2;
}
else if (sign === "-") {
    result=input1-input2;
}
else {
    result="one of the four signs wasn't provided"
    input1=""
    input2=""
    sign=""
    equals=""
}
if (isNaN(result)) {
    final = "The result is not a number"
}
else (
    final = input1 + sign + input2 + equals + result
)
document.open()
document.write( `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magic Calculator</title>
    <script src="calculator.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section>
        <button onclick="calculator()">Click for Magic</button>
        <h1>${final}</h1>
    </section>

</body>

</html>`
)
document.close()
}