//--------------------------------------------------------//
//Click dog picture to navigate to their corresponding article
console.log('12');

const btnClick = document.querySelector('.btn-click');
const dogIcons = document.querySelectorAll('.gallery .dog-container .dog-icon');

for (let i = 0; i < dogIcons.length; i++) {
  dogIcons[i].addEventListener('click', function(){
    const clickedDogId = this.id;
    switch (clickedDogId) {
      case "rius":
        window.location.href="#blog-section";
        break;
      case "klay":
        window.location.href="#blog-section2";
        break;
      case "antman":
        window.location.href="#blog-section3";
        break;
      case "shawn":
        window.location.href="#blog-section4";
        break;
      default:
        break;
    }
  });
}
//--------------------------------------------------------//



//--------------------------------------------------------//
//gallery image slider

let firstIndex = 0;
//function to change image
function changeImg(){
  setTimeout(changeImg, 2000);
  let pics;
  const img=document.querySelectorAll('.slide-img');
  for(pics=0; pics<img.length; pics++){
    img[pics].style.display='none';
  }
  firstIndex++;
  if(firstIndex > img.length){
    firstIndex = 1;
  }
  img[firstIndex -1].style.display='block';
}

changeImg();
