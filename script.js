let gold = localStorage.getItem('gold') ? parseInt(localStorage.getItem('gold')) : 0;
let goldValue = document.getElementById('viewCoin');

function ViewCoin(){
    goldValue.innerText = "Gold: " + gold;
    console.log(gold);
}

ViewCoin();


let goldButton = document.getElementById('Coin');



goldButton.addEventListener('click', function() {
    gold += 1;
    //goldButton.textContent = "Приветик";
    localStorage.setItem('gold', gold.toString());
    ViewCoin();
});

