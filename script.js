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
