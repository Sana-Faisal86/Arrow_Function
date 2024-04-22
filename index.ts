let myCal = (n1: number, n2: number, sign: string) => {
  if (sign == "+") {
    console.log(`\n" Addition Result " : '${n1 + n2}'`);
  } else if (sign == "-") {
    console.log(`\n" Subtraction Result " :'${n1 - n2}'`);
  } else if (sign == "*") {
    console.log(`\n" Multiplication Result " :'${n1 * n2}'`);
  } else if (sign == "/") {
    console.log(`\n" Division Result " : '${n1 / n2}'`);
  } else if (sign == "%") {
    console.log(`\n" Modulus Result ": '${n1 % n2}'`);
  } else if (sign == "**") {
    console.log(`\n" Square Result " : '${n1 ** n2}'`);
  } else {
    console.log(`\n" Invalid sign "`);
  }
};
myCal(5, 4, "+");
myCal(10, 6, "-");
myCal(24, 3, "*");
myCal(46, 2, "/");
myCal(98, 6, "%");
myCal(8, 5, "**");
myCal(45, 6, "#");
