const diceBtn = document.querySelector(".dice")
const adviceNumber = document.querySelector(".advice_number")
const adviceDiv = document.querySelector(".advice")
diceBtn.addEventListener("click", () => getAdvice())

getAdvice()

function getAdvice(){
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache", }).then(response => {
        return response.json()
    }).then(adviceData => {
        const AdviceObject = adviceData.slip
        adviceDiv.innerText = AdviceObject.advice
        adviceNumber.innerText = `Advice # ${Math.floor(Math.random() * 200)}`
    }).catch(error => {
        console.log(error)
    })
}