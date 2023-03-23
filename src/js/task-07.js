const fontRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");
 textRef.style.fontSize = fontRef.value + "px";

 function changeFont(event){
    textRef.style.fontSize = event.currentTarget.value + "px";
 }
 fontRef.addEventListener("input", changeFont);