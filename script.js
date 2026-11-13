let player = document.querySelector("#player")
let roundBody = document.querySelector("#forChoosen")
let playerTake = document.querySelector(".you")
let computer = document.querySelector(".computer")
let player_wins_summ = document.querySelector(".player_wins_counnt")
let computer_wins_summ = document.querySelector(".computer_wins_counnt")
let player_wins_count = 0
let computer_wins_count = 0
// console.log(player)

let chooseArr = ["✊","✌️","✋"]
let randNum = 0
let computerChoose = function(){
    randNum = Math.floor(Math.random() * 3)
    return chooseArr[randNum]
}
// console.log(computerChoose())

player.addEventListener("click", (event)=>{
    // if (!event.target.closest(".choose")) return;
    let choosen = event.target.textContent
    // console.log(event.target)
    playerTake.textContent = choosen
    computer.textContent = computerChoose()
    if(playerTake.textContent == "✊" && computer.textContent == "✌️"
        || playerTake.textContent == "✌️" && computer.textContent == "✋"
        || playerTake.textContent == "✋" && computer.textContent == "✊"
    ){
        // alert("player wins")
        player_wins_count++
        player_wins_summ.textContent = player_wins_count
        if(player_wins_count == 10){
            alert("player wins!")
            computer_wins_summ.textContent = 0
            player_wins_summ.textContent = 0
            player_wins_count = 0
            computer_wins_count = 0
        }
    }else if(playerTake.textContent == "✊" && computer.textContent == "✋"
        || playerTake.textContent == "✌️" && computer.textContent == "✊"
        || playerTake.textContent == "✋" && computer.textContent == "✌️"
    ){
        // alert("computer wins")
        computer_wins_count++
        computer_wins_summ.textContent = computer_wins_count
        if(computer_wins_count == 10){
            alert("computer wins!")
            player_wins_summ.textContent = 0
            computer_wins_summ.textContent = 0
            computer_wins_count = 0
            player_wins_count = 0
        }
    }else{
        // alert("nichya")
    }
})
