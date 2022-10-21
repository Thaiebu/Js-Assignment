// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.

marks = 50

if (marks >= 90){
    if (marks <= 100) expression = 'S'
    
}
else if (marks >= 80 ){
    if (marks < 90) expression = 'A'
    
}
else if (marks >= 70){
    if (marks < 80) expression = 'B'
    

}
else if (marks >= 60 ){
    if (marks < 70) expression = 'C'
    
}
else if (marks >= 50){
    if (marks < 60) expression = 'D'
    
}
else if (marks >= 40){
    if (marks < 50) expression = 'E'
    
}

else {
    expression='O'
}



switch(expression) {
    case 'S':
      console.log("S grade")
      break;
    case 'A':
        console.log("A grade")
    break;
    case 'B':
        console.log("B grade")
    break;
    case 'C':
        console.log("C grade")
    break;
    case 'D':
        console.log("D grade")
    break;
    case 'E':
        console.log("E grade")
    break;
    case 'O':
        console.log("No grade")
    break;


    default:
        console.log("invalid mark")


   
  }