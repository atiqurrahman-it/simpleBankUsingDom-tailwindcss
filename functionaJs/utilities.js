function getInputFieldValueById(inputFieldId){
    const inputField =document.getElementById(inputFieldId)
    const inputFieldValueString=inputField.value
    // clear data 
    inputField.value=''
    const inputFieldValue=parseFloat(inputFieldValueString)

    // user input(input validation)
    if(inputFieldValueString==''){
        alert("opps your submit empty Amount !!! Please Enter Your  Amount!!")
        return 0;
    }
    else if(isNaN(inputFieldValueString)){
        alert("Please provide  Valid Amount ")
        return 0;
    }
    // else if(typeof inputFieldValue==='number'){
    //     return inputFieldValue
    // }
    return inputFieldValue
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString =element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText=newValue
}
