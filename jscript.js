const btn = document.getElementById("btn");
const inWidth = document.getElementById("width").value;
const inHeight = document.getElementById("heigth").value;

//btn.onclick = function() {
 function res(){ 
  if (inWidth<100 || inWidth>300) {
    document.querySelector(".output").innerHTML='<div>Неверный диапазон</div>'
  }  else {
    console.log('Succses' + " " + inWidth +  " " + inHeight);
  }

}

btn.addEventListener('click', res);