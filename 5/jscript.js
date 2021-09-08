btn.onclick = function () {
  document.querySelector(".output").innerHTML = '<div></div>'
  const btn = document.getElementById("btn");
  const numPage = +document.getElementById("num_page").value;
  const numLimit = +document.getElementById("limit").value;
  //console.log(numPage);
  if (isNaN(numPage) || isNaN(numLimit)) {
    document.querySelector(".output").innerHTML = '<div>Введено не число</div>';
  } else {
    if (numPage < 1 || numPage > 10 || numLimit < 1 || numLimit > 10) {
      document.querySelector(".output").innerHTML = '<div>Неверный диапазон</div>';
    } else {
      async function getImages() {
        let response = await fetch(`https://picsum.photos/v2/list?page=${numPage}&limit=${numLimit}`);
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          let fotoBlock = "";
          data.forEach((item, index) => {
            const foto = `<div style=background-image:url(${data[index].download_url})></div>`;
            fotoBlock += foto;
            return fotoBlock;
          });
          document.querySelector(".output").innerHTML = fotoBlock;
        }
      }
      getImages();
    }
  }
}
