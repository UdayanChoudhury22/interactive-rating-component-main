const mainContainer = document.querySelector('.main_container');

const thankYouContainer = document.querySelector('.thank_you');

const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate_again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll('.btn');


submitButton.addEventListener("click",() =>{
    thankYouContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

rateAgain.addEventListener("click",() =>{
    thankYouContainer.classList.add("hidden");
    mainContainer.style.display = "block";
});

rates.forEach((rate) => {
    rate.addEventListener("click",() =>{
        rating.innerHTML = rate.innerHTML;
    })

});

