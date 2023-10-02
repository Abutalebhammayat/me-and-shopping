function getSetphone(Isincrease){
    const phoneNumberBtn =document.getElementById('phone-number-btn');
    const phoneNumberBtnString =phoneNumberBtn.value ;
    const priviusphoneNumberBtn =parseInt(phoneNumberBtnString);

    let newphoneNumberBtn;
    
    if (Isincrease === true) {
        newphoneNumberBtn = priviusphoneNumberBtn + 1 ;   
    }
    else{
        newphoneNumberBtn = priviusphoneNumberBtn - 1 ;  
    }
    
    
    phoneNumberBtn.value = newphoneNumberBtn
    return newphoneNumberBtn ;
}

function phoneTotalPriceName(newPhoneBttone) {
    const phoneTotalPrice = newPhoneBttone * 1219 ;
    const phoneTotalPriceElement = document.getElementById('phone-total-price')
    phoneTotalPriceElement.innerText = phoneTotalPrice ;
}
document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const newPhoneBttone =  getSetphone(true);

    phoneTotalPriceName(newPhoneBttone) ;
    getsubnumber();
    
})


document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const newPhoneBttone =  getSetphone(false);

    phoneTotalPriceName(newPhoneBttone) ;
    getsubnumber();

})