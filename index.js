const counts = document.querySelectorAll(".count");
const facebookEle = document.getElementById("facebook");
const twitterEle = document.getElementById("twitter");
const youtubeEle = document.getElementById("youtube");
let facebookCount = 0;
let facebookTarget = 7500;
let youtubeCount = 0;
let youtubeTarget = 5000;
let twitterCount = 0;
let twitterTarget = 12000;

// counts.forEach(count => {

// });

// setInterval(() => {
//     if (facebookCount < facebookTarget) {
//         facebookCount++;
//         facebookEle.innerText = facebookCount;
//     }

// }, 1);

// setInterval(() => {
//     if (youtubeCount < youtubeTarget) {
//         youtubeCount++;
//         youtubeEle.innerText = youtubeCount;
//     }

// }, 1);

// setInterval(() => {
//     if (twitterCount < twitterTarget) {
//         twitterCount++;
//         twitterEle.innerText = twitterCount;
//     }

// }, 1);


counts.forEach((count) => {
    const target = count.dataset.target;
    const increment = target / 200;
    let value = 0;
    let timer = setInterval(() => {
        if (value < target) {
            value = parseInt(value + increment);
            count.innerHTML = value;
            console.log(count.id, value);
        } else {
            clearInterval(timer);
        }

    }, 1)
})