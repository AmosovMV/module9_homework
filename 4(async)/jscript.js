btn.onclick = function () {
  document.querySelector(".output").innerHTML = '<div></div>'
  const btn = document.getElementById("btn");
  const inWidth = document.getElementById("width").value;
  const inHeight = document.getElementById("heigth").value;
  if (inWidth < 100 || inWidth > 300 || inHeight < 100 || inHeight > 300) {
    document.querySelector(".output").innerHTML = '<div>Неверный диапазон</div>';
  } else {
    async function showResizeImage() {
      let response = await fetch(`https://picsum.photos/${inWidth}/${inHeight}`);
      if (response.ok) {
        let result = `<img src='${response.url}'">`;
        document.querySelector(".output").innerHTML = `${result}`;
      } else {
        alert('error', response.status);
      }
    }
    showResizeImage();
  }
}