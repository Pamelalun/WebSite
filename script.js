var story, pic;

story = [
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-dinners-weight-loss-2020-1589388248.png",
  "https://cdn.eatmightymeals.com/wp-content/uploads/2021/05/31190014/salmon-nicoise-salad.png",
  "https://www.freshnlean.com/wp-content/uploads/2021/08/Whole30-plated-meal.png",
  "https://thedailyscan.providencehealthcare.org/wp-content/uploads/2019/01/cda-food-guide-photo-plate.jpg",
  "https://www.pngall.com/wp-content/uploads/8/Recipe-PNG-Picture.png",
  "https://freepngimg.com/save/139178-food-plate-diet-free-transparent-image-hd/578x580",
  "https://www.pngmart.com/files/15/Food-Plate-Top-View-Snack-PNG.png"
];
let element_pic = document.getElementById("pic");
element_pic.setAttribute("src", story[0]);

document.getElementById("next").addEventListener("click", (event) => {
  let element_pic2 = document.getElementById("pic");
  if (pic != 0) {
    element_pic2.innerText = story;
    story.push(story.shift());
    element_pic2.setAttribute("src", story[0]);
  }
});

document.getElementById("back").addEventListener("click", (event) => {
  let element_pic3 = document.getElementById("pic");
  if (pic != 0) {
    element_pic3.setAttribute("src", story.slice(-1)[0]);
    story.unshift(story.pop());
  }
});