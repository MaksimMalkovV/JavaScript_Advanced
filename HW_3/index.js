
const btnSend = document.querySelector(".btn-send-review");
const btnShow = document.querySelector(".btn-show-reviews");
const productValue = document.querySelector("#product");
const reviewValue = document.querySelector("#review");
btnSend.addEventListener("click", addedLocalStoregReviews)

btnShow.addEventListener("click", function () {
    window.location.href = "reviews.html"
})

function addedLocalStoregReviews() {
    if (localStorage.getItem("allView") === null) {
        localStorage.setItem("allView", "{}");
    }
    const allView = JSON.parse(localStorage.getItem("allView"));
    allView[productValue.value] =
        allView[productValue.value] ? [...allView[productValue.value], reviewValue.value] : [reviewValue.value];
    localStorage.setItem("allView", JSON.stringify(allView));
}