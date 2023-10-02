function getSetCase(Isincrease){
    const caseNumberBtn =document.getElementById('case-number-btn');
    const caseNumberBtnString =caseNumberBtn.value ;
    const priviusCaseNumberBtn =parseInt(caseNumberBtnString);

    let newCaseNumberBtn;
    
    if (Isincrease === true) {
        newCaseNumberBtn = priviusCaseNumberBtn + 1 ;   
    }
    else{
        newCaseNumberBtn = priviusCaseNumberBtn - 1 ;  
    }
    
    
    caseNumberBtn.value = newCaseNumberBtn
    return newCaseNumberBtn ;
}

function caseTotalPriceName(newCaseNumberBtn) {
    const caseTotalPrice = newCaseNumberBtn * 59 ;
    const caseTotalPriceElement = document.getElementById('case-total-price')
    caseTotalPriceElement.innerText = caseTotalPrice ;
}

document.getElementById('case-plus-btn').addEventListener('click', function(){
    const newCaseNumberBtn = getSetCase(true);
 
    caseTotalPriceName(newCaseNumberBtn);
    getsubnumber();
})
document.getElementById('case-minus-btn').addEventListener('click', function(){
    const newCaseNumberBtn = getSetCase(false);

    caseTotalPriceName(newCaseNumberBtn);
    getsubnumber();
})






















// document.getElementById('case-plus-btn').addEventListener('click', function(){
    // const caseNumberBtn =document.getElementById('case-number-btn');
    // const caseNumberBtnString =caseNumberBtn.value ;
    // const priviusCaseNumberBtn =parseInt(caseNumberBtnString);
    // const newCaseNumberBtn = priviusCaseNumberBtn + 1 ;
    // caseNumberBtn.value = newCaseNumberBtn
// })
// document.getElementById('case-minus-btn').addEventListener('click', function(){

    // const caseNumberBtn =document.getElementById('case-number-btn');
    // const caseNumberBtnString =caseNumberBtn.value ;
    // const priviusCaseNumberBtn =parseInt(caseNumberBtnString);
    // const newCaseNumberBtn = priviusCaseNumberBtn - 1 ;
    // caseNumberBtn.value = newCaseNumberBtn
// })
