// sliding banner
let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
  showBanner((indexSlide += n));
}

function showBanner(indexBanner) {
  let listImage = document.getElementsByClassName("banner-img");
  if (indexBanner > listImage.length) indexSlide = 1;

  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }

  listImage[indexSlide - 1].style.display = "block";
  console.log(listImage);
}

