


document.getElementById('btn-deposit').addEventListener('click',function(){
    //total deposit amount set 
   const newDepositAmount=getInputFieldValueById('depositFiled')
   const previousDepositAmount=getTextElementValueById('total-deposit')
   const totalDepositAmount=previousDepositAmount+newDepositAmount
   setTextElementValueById('total-deposit',totalDepositAmount)

   
   //total balance set 
   const previousTotalAmount=getTextElementValueById('total-balance')
   const TotalBalance=previousTotalAmount+newDepositAmount
   setTextElementValueById('total-balance',TotalBalance)
})