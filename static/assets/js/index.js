// {start} contact us 

var InpName = document.getElementById('name');
var Inpphone = document.getElementById('phone');
var btn = document.getElementById('btn');
var bol1 = false;
var bol2 = false;
InpName.oninput = () => {
    if(InpName.value.trim() != ""){
        bol1 = true;
    }else{
        bol1 = false;
    }
    if(bol1 && bol2){
        btn.disabled = false;
        btn.classList.add('enable');
    }else{
        btn.disabled = true;
        btn.classList.remove('enable');
    }
}

Inpphone.oninput = () => {
    if(Inpphone.value.trim() != null && Inpphone.value.trim().length == 11 && Inpphone.value.charAt(0) == 0 && Inpphone.value.charAt(1) == 9){
        bol2 = true;
    }else{
        bol2 = false;
    }
    if(bol1 && bol2){
        btn.disabled = false;
        btn.classList.add('enable');
    }else{
        btn.disabled = true;
        btn.classList.remove('enable');
    }
}

// {end} contact us



