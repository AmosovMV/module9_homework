const btn = document.getElementById("btn");
const numPage = document.getElementById("num_page");
const numLimit = document.getElementById("limit");
let numPageValue = localStorage.getItem('numberPage', numPage.value);
let numLimitValue = localStorage.getItem('numberLimit', numLimit.valuelet);
let localData = localStorage.getItem('info');

btn.onclick = function () {
  document.querySelector(".output").innerHTML = '<div></div>'
  let numP = +numPage.value;
  let numL = +numLimit.value;
  if (isNaN(numP) || isNaN(numL)) {
    document.querySelector(".output").innerHTML = '<div>Введено не число</div>';
  } else {
    if (numP < 1 || numP > 10 || numL < 1 || numL > 10) {
      document.querySelector(".output").innerHTML = '<div>Неверный диапазон</div>';
    } else {
      fetch(`https://picsum.photos/v2/list?page=${numP}&limit=${numL}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          localStorage.setItem('info', JSON.stringify(data));
          localStorage.setItem('numberPage', numP);
          localStorage.setItem('numberLimit', numL);
          getImages(data);
        })
    }
  }
}

function getImages(data) {
  let fotoBlock = "";
  if (data) {
    data.forEach((item, index) => {
      const foto = `<div class="foto" style=background-image:url(${data[index].download_url})></div> <p>${data[index].author}</p>`;
      fotoBlock += foto;
    });
    document.getElementById("result").innerHTML = fotoBlock;
  }
}

getImages(JSON.parse(localData));
