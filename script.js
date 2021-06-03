let image = document.querySelectorAll(".img-gallery");
for(let i=0; i<image.length; i++){
    image[i].src = "https://source.unsplash.com/random/20"+ i + "x20" +i;
}