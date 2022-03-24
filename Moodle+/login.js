console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector('#login') // Fill the selector for the login element in ""
let login_text = login_element.innerText;
list1=login_text.split("\n")
let question = list1[3]; // Use split and array operations on the login_text string to extract the question
console.log(question) //test code
console.log(question[7]) //test code
if (question[7]=="a") {
    firstnumber=question.substring(11,14)
    console.log(firstnumber) //test code
    secondnumber=question.substring(16,19)
    console.log(secondnumber) //test code
    firstnumber=Number(firstnumber)
    secondnumber=Number(secondnumber)
    answer=firstnumber+secondnumber
    console.log(answer)
} // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
if (question[7]=="e"){
    if (question[27]==" "){
        console.log("space loop executed")
        if(question[13]=="s"){
            secondnumber=question.substring(30,32)
            console.log(secondnumber) //test code
            answer=Number(secondnumber)
        }
        else {
            firstnumber=question.substring(25,27)
            console.log(firstnumber) //test code
            answer=Number(firstnumber)
        }
    }
    else{
        console.log("else loop executed") //test code
        if(question[13]=="s"){
            secondnumber=question.substring(31,33)
            console.log(secondnumber) //test code
            answer=Number(secondnumber)
        }
        else {
            firstnumber=question.substring(25,27)
            console.log(firstnumber) //test code
            answer=Number(firstnumber)
        }
    }
}
if(question[7]=="s"){    
    firstnumber=question.substring(16,19)
    console.log(firstnumber)
    secondnumber=question.substring(21,23)
    console.log(secondnumber)
    firstnumber=Number(firstnumber)
    secondnumber=Number(secondnumber)
    answer=firstnumber-secondnumber
    console.log(answer)
}
document.querySelector("#valuepkg3").value = answer // Fill the selector for the captcha input element in ""

