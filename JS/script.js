function formValidation() {
  let name = document.getElementById("name").value;
  if (name == "") {
    alert("Mohon isi form terlebih dahulu");
    document.getElementById("result").innerHTML = "-";
  } else {
    document.getElementById("result").innerHTML = name;
  }
  console.log(name);
}

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
