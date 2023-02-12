const form=document.getElementById('form')

const userEmailFiled=document.getElementById("user-email")
const Email=userEmailFiled.value;
const userPasswordFiled=document.getElementById("user-password")
const Password=userPasswordFiled.value
const errorMsg=document.getElementById("errorMsg")



form.addEventListener('submit',function(event){
    event.preventDefault();

    formValidation();

})


function formValidation(){
    // empty value
    if(userEmailFiled.value==='' && userPasswordFiled.value===''){
        errorMsg.innerText='Please provide Email & password !'
        errorMsg.style.color='red'
    // data
    }else{
        errorMsg.innerText=''
        // do not verify  email  password  on the clint site 
        // database nai tai ei vabe kortechi 
    
        verifyEmailPassword()
    
    }
}

function verifyEmailPassword(){
    if(userEmailFiled.value==="atiqur@gmail.com" && userPasswordFiled.value==="atik"){
        console.log('userValid')
    }else{
        alert("sdf")
        console.log('Not Valid')
    }
}