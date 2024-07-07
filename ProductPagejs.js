let minusButton=document.getElementById("minusBut");
let plusButton=document.getElementById("plusBut");
let number=document.getElementById("number");

minusButton.onclick=function() {
    let numberValue=number.textContent;
    if(numberValue>1) {
        decrementValue();
    }
}
function decrementValue() {
    let numberValue=number.textContent;
    number.textContent=Number(numberValue)-1;
}
    

plusButton.onclick=function() {
    let numberValue=number.textContent;
    number.textContent=Number(numberValue)+1;
}


let img=documnet.getElementById("img");
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");
let img4=document.getElementById("img4");
let img5=document.getElementById("img5");
let img6=document.getElementById("img6");
let img7=document.getElementById("img7");
let img8=document.getElementById("img8");
let img9=document.getElementById("img9");
let img10=document.getElementById("img10");
function onImageClick1() {
img.src="https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/j/4/w/-original-imagxp8uh5nggzsp.jpeg?q=70&crop=false";

}
function onImageClick2() {
]img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/p/3/d/-original-imagqpckyxfxftba.jpeg?q=70&crop=false";
}
function onImageClick3() {
img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/3/5/y/-original-imagqpckfspehxv7.jpeg?q=70&crop=false";
 }
function onImageClick4() {
img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/j/f/6/-original-imagqpckjzs9jveg.jpeg?q=70&crop=false";
}
function onImageClick5() {
img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/d/e/e/-original-imagqpck64kumktj.jpeg?q=70&crop=false";
}
function onImageClick6() {
img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/y/r/4/-original-imagqpckfch5yfzx.jpeg?q=70&crop=false";
}
function onImageClick7() {
img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/i/u/n/-original-imagqpckgkbjyvdy.jpeg?q=70&crop=false";
}
function onImageClick8() {
img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/3/l/y/-original-imagqpck6vtdhnxg.jpeg?q=70&crop=false";
 }
function onImageClick9() {
img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/7/w/i/-original-imagqpckuhybw2by.jpeg?q=70&crop=false";
}
function onImageClick10() {
img.src="https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/o/f/l/-original-imagqpckqh5qfk2a.jpeg?q=70&crop=false";
}