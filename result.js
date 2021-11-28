const testDB = [ 
    {
    question: "Q1. Which type of JavaScript language is ___",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    ans: "ans2"
    },
    {
    question: "Q2. Which of the following is the correct output for the following JavaScript code: \nvarx=5,y=1  \nvar obj ={ x:10}  \nwith(obj)  \n{  \n          alert(y)  \n }  ",
    a: "1",
    b: "Error",
    c: "10",
    d: "5",
    ans: "ans1"
   },
   {
    question: "Q3. Which one of the following also known as Conditional Expression",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    ans: "ans4"
   },
   {
    question: "Q4. In JavaScript, what is a block of statement? ",
    a: "Conditional block",
    b: "block that combines a number of statements into a single compound statement",
    c: "both conditional block and a single statement",
    d: "block that contains a single statement",
    ans: "ans2"
   },
   {
    question: "Q5. When interpreter encounters an empty statements, what it will do",
    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    ans: "ans4"
   },
   {
    question: "Q6. The \"function\" and \" var\" are known as",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes",
    ans: "ans3"
   },
   {
    question: "Q7.  In the following given syntax of the switch statement, the Expression is compared with the labels using which one of the following operators? <br>switch(expression)<br>{<br> statements <br>}",  
    a: "====",
    b: "equals",
    c: "==",
    d: "equal",
    ans: "ans1"
   },
   {
    question: "Q8. What will happen, if the following JavaScript code is executed? <br>var count =0;  <br>while (count <10)  <br>{  <br> console.log(count);  <br> count++;  <br>}  ",
    a: "An error is displayed",
    b: "An exception is thrown",
    c: "The values of count variable are logged or stored in a particular location or storage",
    d: "The value of count from 0 to 9 is displayed in the console",
    ans: "ans3"
   },
   {
    question: "Q9. Which one of the following is the correct way for calling the JavaScript code?",
    a: "Preprocessor",
    b: "Triggering Event",
    c: "RMI",
    d: "Function/Method",
    ans: "ans4"
   },
   {
    question: "Q10. Which of the following type of a variable is volatile?",
    a: "Mutable variable",
    b: "Dynamic variable",
    c: "Volatile variable",
    d: "Immutable variable5",
    ans: "ans1"
   },
   {
    question: "Q11. Which of the following option is used as hexadecimal literal beginning?",
    a: "00",
    b: "0x",
    c: "0X",
    d: "Both 0x and 0X",
    ans: "ans4"
   },
   {
    question: "Q12. When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
    a: "Prints an exception error",
    b: "Prints an overflow error",
    c: "Displays \"Infinity\"",
    d: "Prints the value as such",
    ans: "ans3"
   },
   {
    question: "Q13. In the JavaScript, which one of the following is not considered as an error",
    a: "Syntax error",
    b: "Missing of semicolons",
    c: "Division by zero",
    d: "Missing of Bracket",
    ans: "ans3"
   },
   {
    question: "Q14. Which of the following number object function returns the value of the number?",
    a: "toString()",
    b: "valueOf()",
    c: "toLocaleString()",
    d: "toPrecision()",
    ans: "ans2"
   },
   {
    question: "Q15. In JavaScript the x===y statement implies that",
    a: "Both x and y are equal in value, type and reference address as well.",
    b: "Both are x and y are equal in value only.",
    c: "Both are equal in the value and data type.",
    d: "Both are not same at all.",
    ans: "ans3"
   },
   {
    question: "Q16. Which of the following is correct about features of JavaScript?",
    a: "JavaScript is is complementary to and integrated with HTML",
    b: "JavaScript is open and cross-platform",
    c: "Both of the above",
    d: "All of the above",
    ans: "ans3"
   },
   {
    question: "Q17. Which built-in method calls a function for each element in the array?",
    a: " while()",
    b: " loop()",
    c: "forEach()",
    d: "None of the above",
    ans: "ans3"
   },
   {
    question: "Q18. Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
    a: " toSource()",
    b: "valueOf()",
    c: " toString()",
    d: "None of the above",
    ans: "ans1"
   },
   {
    question: "Q19.  Which of the following statements defines JavaScript correctly?",
    a: "It’s a scripting language used to make the website interactive",
    b: "It’s an assembly language used to make the website interactive",
    c: "It’s compiled language used to make the website interactive",
    d: "None of the above",
    ans: "ans1"
   },
   {
    question: "Q20. JavaScript is a ____________ language",
    a: "Object-Based",
    b: "Assembly-language",
    c: "Object-Oriented",
    d: "High-level",
    ans: "ans1"
   },
   {
    question: "Q21. Among the given statements, which statement defines closures in JavaScript?",
    a: "It’s a function that is enclosed with references to its inner function scope",
    b: "It’s a function that is enclosed with references to its lexical environment",
    c: "It’s a function that is enclosed with the object to its inner function scope",
    d: "None of the above",
    ans: "ans2"
   },
   {
    question: "Q22. Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: "It is an ordered list of string",
    d: "It is an ordered list of functions",
    ans: "ans1"
   },
   {
    question: "Q23. Which of the following is not javascript data types?",
    a: "Null type",
    b: "Undefined type",
    c: "Number type",
    d: " All of the mentioned",
    ans: "ans4"
   },
   {
    question: "Q24. Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<head>",
    c: "<meta>",
    d: "<style>",
    ans: "ans1"
   },
   {
    question: "Q25. Which of the following is correct about features of JavaScript?",
    a: "It can not Handling dates and time.",
    b: "JavaScript is a object-based scripting language.",
    c: "JavaScript is not interpreter based scripting language.",
    d: "All of the above",
    ans: "ans2"
   },
   {
    question: "Q26. which of the following are advantages of JavaScript?",
    a: "Less server interaction",
    b: "Increased interactivity",
    c: "Richer interfaces",
    d: "All of the above",
    ans: "ans4"
   },
   {
    question: "Q27. Which of the following true about Javascript?",
    a: "Client-side JavaScript does not allow the reading or writing of files",
    b: "JavaScript cannot be used for networking applications",
    c: "JavaScript doesn't have any multi-threading or multiprocessor capabilities",
    d: "All of the above",
    ans: "ans4"
   },
   {
    question: "Q28. JavaScript ignores?",
    a: "spaces",
    b: "tabs",
    c: "newlines",
    d: "All of the above",
    ans: "ans4"
   },
   {
    question: "Q29. JavaScript is designed for following purpose -",
    a: "to style HTML pages",
    b: "to execute Queries related to databases on a server",
    c: "to add interactivity to html pages",
    d: "All of the above",
    ans: "ans4"
   },
   {
    question: "Q30. What will be the output of the following Javascript code? <br>  var string1 = \"Letsfindcourse\"; <br>var intvalue = 30; <br>  alert( string1 + intvalue );",
    a: "Letsfindcourse 30",
    b: "30",
    c: "Letsfindcourse30",
    d: "Exception",
    ans: "ans3"
   },
   {
    question: "Q31. Among the following, which one is a ternary operator in JavaScript?",
    a: "#",
    b: "::",
    c: "&:",
    d: "?:",
    ans: "ans4"
   },
   {
    question: "Q32. Among the keywords below, which one is not a statement?",
    a: "if",
    b: "with",
    c: "debugger",
    d: "use strict",
    ans: "ans4"
   },
   {
    question: "Q33. Which symbol is used for comments in Javascript?",
    a: "//",
    b: "\\\\",
    c: "/**/",
    d: "/**\\",
    ans: "ans3"
   },
   {
    question: "Q34. Which of them is not the looping structures in JavaScript?",
    a: "for",
    b: "while",
    c: "forwhich",
    d: "dowhile",
    ans: "ans2"
   },
   {
    question: "Q35. What is defination of an undefined value in JavaScript?",
    a: "Variable used in the code doesn't exist",
    b: "Variable is not assigned to any value",
    c: "Property doesn't exist",
    d: "All of the above",
    ans: "ans4"
   },
   {
    question: "Q36. What are the types of Pop up boxes available in JavaScript?",
    a: "Alert",
    b: "Prompt",
    c: "Confirm",
    d: "All of the above",
    ans: "ans4"
   },
   {
    question: "Q37. What are the basic groups of dataypes in JavaScript?",
    a: "Primitive",
    b: "Reference types",
    c: "All of the above",
    d: "None of the above",
    ans: "ans3"
   },
   {
    question: "Q38. Which of the following are the errors in JavaScript?",
    a: "Load time errors",
    b: "Run time errors",
    c: "Logical Errors",
    d: "All of the above",
    ans: "ans2"
   },
   {
    question: "Q39. Which one of the following operator is used to check weather a specific property exists or not",
    a: "Exists",
    b: "exist",
    c: "within",
    d: "in",
    ans: "ans4"
   },
   {
    question: "Q40. The execution of a function stops when the program control encounters the _________ statement in the body of the function.",
    a: "return statement",
    b: "continue statement",
    c: "break statement",
    d: "goto statement",
    ans: "ans1"
   }


] 
var correctanscount = 0;
function showResult()
{
    var ansstr = localStorage.getItem("answers");
    var ansarr = ansstr.split(",");
    for(i = 0;i<testDB.length;i++)
    {   var actans = "NA";
        
            if(ansarr[i] == "ans1")
            {
                actans = testDB[i].a;
            }
            else if(ansarr[i] == "ans2")
            {
                actans = testDB[i].b;
            }
            else if(ansarr[i] == "ans3")
            {
                actans = testDB[i].c;
            }
            else if(ansarr[i] == "ans4")
            {
                actans = testDB[i].d;
            }
        
        if(ansarr[i] == testDB[i].ans)
        {
            document.getElementById("result-par").innerHTML += "<b>" + testDB[i].question + "</b>" + "<br><b> Ans: </b>" + actans + "<br><b>Correct? <b>" + " <b style='color:#59981A'>Yes<i class='fa fa-check'></i></b>"  +"<br>";
            correctanscount++;
        }
        else
        {
            document.getElementById("result-par").innerHTML += "<b>" + testDB[i].question + "</b>" + "<br><b> Ans: </b>" + actans + "<br><b>Correct?</b> " + " <b style='color:#D10000'>No <i class='fa fa-times'></i> </b>"  +"<br>";

        }
    }
    var outof = testDB.length;
    document.getElementById("result-figure").innerHTML += " "+correctanscount + "/" + testDB.length;
    var percentage = correctanscount/outof*100;
    document.getElementById("percentage-figure").innerHTML += " "+percentage+"%";

}
function openNav()
{
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() 
{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
function printResult()
{   
    document.getElementById("printres").style.display = "none";
    var divContents = document.getElementById("res-id").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > <h1><br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
    document.getElementById("printres").style.display = "block";

}