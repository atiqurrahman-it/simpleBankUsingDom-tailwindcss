

const userEmailFiled=document.getElementById("user-email")
const Email=userEmailFiled.value;
const userPasswordFiled=document.getElementById("user-password")
const Password=userPasswordFiled.value
const errorMsg=document.getElementById("errorMsg")



document.getElementById('form').addEventListener('submit',function(event){
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

    // if(userEmailFiled.value==="atiqur@gmail.com" && userPasswordFiled.value==="atik"){
    //     console.log('userValid')
    // }else{
    //     alert("sdf")
    //     console.log('Not Valid')
    // }

    loginUserData=[
        {email:'atiqur@gmail.com',password:'atiqur01'},
        {email:'atik@gmail.com',password:'atik25'},
        {email:'admin@gmail.com',password:'admin'},
    ]
    // userValid true hole login korte parbe
    let userValid=false
    for(let data of loginUserData ){
        if(userEmailFiled.value===data.email && userPasswordFiled.value===data.password){
            userValid=true
        }
    }
    // valid user 
    if(userValid){
        // valid user hole bank.html page(file) jabe 

        // window.location.href=''
        location.href='bank.html'
        console.log("valid")
    // not valid user 
    }else{
        console.log("not valid")
        alert("Please provide your valid email&pass")
    }

  
}
