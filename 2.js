let info = function(elem){
    //alert("he");
    let uname = elem.parentElement.parentElement.children[1].children[0];
   // alert(elem.parentElement.parentElement.children[1].children[0].value);
    let umail = elem.parentElement.parentElement.children[2].children[0];
    let upass = elem.parentElement.parentElement.children[3].children[0];

    elem.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].innerHTML = uname.value;
    elem.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[1].innerHTML = umail.value;
    elem.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[2].innerHTML = upass.value;
}

function valid(){
    alert("huhjxnb");
}