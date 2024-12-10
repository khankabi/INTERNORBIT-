const form = document.getElementById("form-data")
const countDownForm = document.getElementById("countDownForm")
const countDownTimer = document.getElementById("countDownTimer")
const countdownTitle = document.getElementById("countdownTitle")
const countDownFinish = document.getElementById("countDownFinish")
const completeTitle = document.getElementById("completeTitle")


const resultDays = document.getElementById("days")
const resultHours = document.getElementById("hours")
const resultMinutes = document.getElementById("minutes")
const resultSeconds = document.getElementById("seconds")
const datapicker = document.getElementById("countDownDate")

let waitCount;
let today = new Date().toISOString().split("T")[0]
console.log(today);

datapicker.setAttribute("min", today)

let userTitle = ""
let userDate = ""
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let userDateValue = Date;
let countDownActive;

function updateDom() {

    if (userDate <= 0) {
        return;
    }
    else {
        countDownActive = setInterval(() => {
            let nowDate = new Date().getTime();
            let distace = userDateValue - nowDate;
            const days = Math.floor(distace / day);
            const hours = Math.floor(distace % day / hour);
            const minutes = Math.floor(distace % hour / minute);
            const seconds = Math.floor(distace % minute / second);
            resultDays.textContent = days
            resultHours.textContent = hours
            resultMinutes.textContent = minutes
            resultSeconds.textContent = seconds

            if (distace <= 0) {
                countDownTimer.hidden = true
                countDownFinish.hidden = false
                countDownForm.hidden = true

                clearInterval(countDownActive)
                if (userTitle === "") {
                    completeTitleText.textContent = `task is Finished on ${userDate}`
                }
                else {
                    completeTitleText.textContent = `"${userTitle}" is Finished on ${userDate}`
                }

            }

        }, 1000)

        countDownForm.hidden = true
        countDownTimer.hidden = false
        countdownTitle.textContent = userTitle
    }

}

function update(event) {
    event.preventDefault();

    userTitle = event.srcElement[0].value
    userDate = event.srcElement[1].value
    const savedCountdown = {
        userDate: userDate,
        userTitle: userTitle
    }

    localStorage.setItem("countdown", JSON.stringify(savedCountdown))

    if (!userDate) {
        alert("Please enter a date");
    }
    else {
        userDateValue = new Date(userDate).getTime();
        updateDom();
    }
}
form.addEventListener("submit", update)

function reset() {
    localStorage.removeItem("countdown");
    countDownForm.hidden = false
    countDownTimer.hidden = true
    countDownFinish.hidden = true
    userTitle = ""
    userDate = ""
    clearInterval(countDownActive)
}
function restoreCountDown() {
    if (localStorage.getItem("countdown")) {
        countDownForm.hidden = false
        countdownTitle.textContent = userTitle
        let savedCountdown = JSON.parse(localStorage.getItem("countdown"))
        userDate = savedCountdown.userDate
        userTitle = savedCountdown.userTitle
        userDateValue = new Date(userDate).getTime();
        updateDom();

    }
}
restoreCountDown();