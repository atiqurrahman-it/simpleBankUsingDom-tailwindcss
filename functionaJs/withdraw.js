document.getElementById('btn-withdraw').addEventListener('click',function(){
  // total withdraw amount set 
  const newWithdrawAmount=getInputFieldValueById('withdrawFiled')
 

   // total Balance set 
   const previousTotalAmount=getTextElementValueById('total-balance')
   const TotalBalance=previousTotalAmount-newWithdrawAmount
   if(newWithdrawAmount>previousTotalAmount){
    alert("you have not sufficient balance to withdraw!!!")
    return 0
   }
   setTextElementValueById('total-balance',TotalBalance)

  // total withdraw amount set 
   const previousWithdrawAmount=getTextElementValueById('total-withdraw')
   const totalWithdrawAmount=previousWithdrawAmount+newWithdrawAmount
   setTextElementValueById('total-withdraw',totalWithdrawAmount)


})