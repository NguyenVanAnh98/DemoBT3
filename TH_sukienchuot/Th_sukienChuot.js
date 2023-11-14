let imgObj=null;
imgObj=document.getElementById("myImage");
function init() {
    imgObj = document.getElementById("myImage");
    imgObj.style.position = "relative";
    imgObj.style.left="0px";
}
function moveRight(){
   // parseInt(imgObj.style.left) || 0;???
    imgObj.style.left=parseInt(imgObj.style.left)+10+"px";
}
window.onload=init;

//window.onload=function () {???
    //init();???
   // setInterval(moveRight, 1000);???