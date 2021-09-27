const btn = document.querySelector('.btn');

const xhtRequest = function showInput() {
  const value = document.getElementById('inpt').value;
  let xhr = new XMLHttpRequest();
  const url = 'https://picsum.photos/v2/list/?limit=' + `${value}`;
  if (value < 1 || value > 10) {
    let result = document.getElementById('result').innerHTML = `<div class="outofrange">Число вне диапазона от 1 до 10</div>`;
  } else {
    xhr.open('GET', url);
    xhr.onload = function () {
      const resultParse = JSON.parse(xhr.response);
      //console.log(resultParse);
      let foto = "";
      resultParse.forEach(function (item,index) {
        const fotoBlock = `<div class="foto" style=background-image:url(${resultParse[index].download_url})>
        </div> <p>${resultParse[index].author}</p>`;
        foto += fotoBlock;
      });
      result.innerHTML = foto;
    };
    xhr.send();
  }
}

btn.addEventListener("click", xhtRequest);