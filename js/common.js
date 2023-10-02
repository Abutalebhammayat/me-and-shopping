function parahfg(dfghjk){
    const phoneTotalPricecopy = document.getElementById(dfghjk);
    const phoneTotalPricecopystring = phoneTotalPricecopy.innerText;
    const priviusphoneTotalPricecopystring = parseInt(phoneTotalPricecopystring)
    return priviusphoneTotalPricecopystring
}
function parahfg2(dfghjk2, dshfgklahtla){
    const sub = document.getElementById(dfghjk2);
    sub.innerText = dshfgklahtla ;
}
function getsubnumber(){
    const totalamountphone = parahfg('phone-total-price');
    const totalamountcase = parahfg('case-total-price');
    const subTotal = totalamountphone + totalamountcase ;
    parahfg2('sub-total', subTotal);

    const taxholoString = (subTotal * 0.1).toFixed(2) ;
    const taxholo = parseFloat(taxholoString);
    parahfg2('tax',taxholo );

    const finalprice =subTotal + taxholo;
    parahfg2('main-total', finalprice);


}