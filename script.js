const diceBtn = document.querySelector(".dice")
const adviceNumber = document.querySelector(".advice_number")
const advice = document.querySelector(".advice")
const name = document.querySelector(".name")

const advices = ["“A rose by any other name would smell as sweet.”", 
                "“I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.”", 
                "“Education is the most powerful weapon which you can use to change the world.”",
                "“Life is like riding a bicycle. To keep your balance, you must keep moving.”"]

const names = ["William Shakespeare", "Martin Luther King", "Nelson Mandela", "Albert Einstein"]

diceBtn.addEventListener("click", () => addAdvice())
function addAdvice(){
    const randomNumber = Math.floor(Math.random() * advices.length)
    advice.innerText = advices[randomNumber]
    name.innerText = names[randomNumber]
    adviceNumber.innerText = `Advice # ${100 + randomNumber}`
}

addAdvice()