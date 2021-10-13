let names=document.getElementById("names");

const printing=document.getElementById("printbtn");

const change=document.getElementById("changebtn");
const hcontent=document.getElementById("hcontent");

printing.addEventListener("click",function(e){
hcontent.innerHTML="D.srinivasan";

})

change.addEventListener("click",function(e){
    hcontent.innerHTML="Gopinath";

})