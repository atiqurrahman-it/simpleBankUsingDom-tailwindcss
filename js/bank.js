
let balanceElement=document.getElementById('balance')

// console.log(withdraw)
// console.log(balance)

document.getElementById('btn-deposit').addEventListener('click',function(){
    // input deposit amount
    const depositFiled=document.getElementById('depositFiled')
    const amountDeposit=parseInt(depositFiled.value)
    
    // current deposit amount
    const totalDepositElement=document.getElementById('total-deposit')
    const currentDeposit=parseInt(totalDepositElement.innerText)

    // calculation total deposit amount 
    const TotalDepositAmount=currentDeposit + amountDeposit
    totalDepositElement.innerText=TotalDepositAmount

    // calculation after deposit  totalBalance
    // let balanceElement=document.getElementById('balance')
    const currentTotalBalance=parseInt(balanceElement.innerText)
    const totalBalance=currentTotalBalance+ amountDeposit
    balanceElement.innerText=totalBalance

})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // input withdraw amount 
    const withdrawFiled=document.getElementById('withdrawFiled')
    const amountWithdraw=parseInt(withdrawFiled.value)

    // current withdraw amount 
    let withdrawElement=document.getElementById('withdraw')
    const currentWithdraw=parseInt(withdrawElement.innerText)


    // // calculation total withdraw amount 
    const totalWithdraw=currentWithdraw+ amountWithdraw
    withdrawElement.innerText=totalWithdraw


     // calculation after withdraw  totalBalance
    // let balanceElement=document.getElementById('balance')
    const currentTotalBalance=parseInt(balanceElement.innerText)
    const totalBalance=currentTotalBalance- amountWithdraw
    balanceElement.innerText=totalBalance

    console.log("click withdraw")

})