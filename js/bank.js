
let balanceElement=document.getElementById('balance')

// console.log(withdraw)
// console.log(balance)

document.getElementById('btn-deposit').addEventListener('click',function(){
    // input deposit amount
    const depositFiled=document.getElementById('depositFiled')
    const newDepositAmount=parseInt(depositFiled.value)
    
    // current deposit amount
    const DepositElement=document.getElementById('total-deposit')
    const currentDepositAmount=parseInt(DepositElement.innerText)

    // calculation total deposit amount 
    const TotalDepositAmount=currentDepositAmount + newDepositAmount
    DepositElement.innerText=TotalDepositAmount

    // calculation after deposit  totalBalance
    // let balanceElement=document.getElementById('balance')
    const currentTotalBalance=parseInt(balanceElement.innerText)
    const totalBalance=currentTotalBalance+ newDepositAmount
    balanceElement.innerText=totalBalance

    // clear the deposit filed
    depositFiled.value=''

})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // input withdraw amount 
    const withdrawFiled=document.getElementById('withdrawFiled')
    const newWithdrawAmount=parseInt(withdrawFiled.value)

    // current withdraw total amount 
    let withdrawElement=document.getElementById('withdraw')
    const currentTotalWithdraw=parseInt(withdrawElement.innerText)


  


    // calculation after withdraw  totalBalance
    // let balanceElement=document.getElementById('balance')
    const currentTotalBalance=parseInt(balanceElement.innerText)
  
    // clear the withdraw filed
    withdrawFiled.value=''

    if(newWithdrawAmount>currentTotalBalance ){
        alert("tor bager ato taka    nai ")
        return;
    }
    const totalBalance=currentTotalBalance- newWithdrawAmount
    //set total withdraw balance
    balanceElement.innerText=totalBalance

    
  // // calculation total withdraw amount 
  const totalWithdraw=currentTotalWithdraw+ newWithdrawAmount
  withdrawElement.innerText=totalWithdraw


}) 
