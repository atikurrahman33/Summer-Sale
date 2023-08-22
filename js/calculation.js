function handleCard(target){
    const selectedItemContainer=document.getElementById('selectedItem')
    
   const itemName= target.parentNode.childNodes[1].childNodes[5].innerText;
   const li=document.createElement("li");
   li.innerText=itemName;
   selectedItemContainer.appendChild(li);


    const value=target.parentNode.childNodes[1].childNodes[7].childNodes[1].innerText;
    const balanceElement=parseFloat(value) ;
   const totalBalance=document.getElementById('totalValue');
   const balanceString=totalBalance.innerText;
   const balanceInt=parseFloat(balanceString);
   const total=balanceElement+balanceInt;
   totalBalance.innerText=total;  

   const activeBtn=document.getElementById('make');
   if(total>0){
    activeBtn.removeAttribute('disabled')
   }
   else{
    activeBtn.setAttribute('disabled',true)
   }


   const activeBtnApply=document.getElementById('apply');
   if(total>200){
    activeBtnApply.removeAttribute('disabled')
   }
   else{
    activeBtnApply.setAttribute('disabled',true)
   }
   const input = document.getElementById('Input');
        const applyButton = document.getElementById('apply');

        applyButton.addEventListener('click', function () {
            const text = input.value; // Use input.value to get the entered value

            if (text === 'SELL200') {
                const discount=document.getElementById('Discount20');
                const discountString=totalBalance.innerText;
                const discountInt=parseFloat(balanceString);
                dis=total*(20/100);

                discount.innerText=dis.toFixed(2);
                updateTotal=total - dis;

                const TOTAL=document.getElementById('didUpdate');
                const disUpdateString=totalBalance.innerText;
                const disUpdatetInt=parseFloat(balanceString);
                
                TOTAL.innerText=updateTotal;
            }
        });

        
  }



