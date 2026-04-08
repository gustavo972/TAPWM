const OPTIONS = {
    1: { name: 'Pedra', icon: '🌑' },
    2: { name: 'Papel', icon: '📄' },
    3: { name: 'Tesoura', icon: '✂️' }
};

function play(userSelection) {
    const computerSelection = Math.floor(Math.random() * 3) + 1;
    
    const userDisplay = document.getElementById('user-choice');
    const compDisplay = document.getElementById('computer-choice');
    const resultDisplay = document.getElementById('result');
    
    userDisplay.style.animation = 'none';
    compDisplay.style.animation = 'none';
    
    void userDisplay.offsetWidth;
    void compDisplay.offsetWidth;

    userDisplay.textContent = OPTIONS[userSelection].icon;
    compDisplay.textContent = OPTIONS[computerSelection].icon;
    
    userDisplay.style.animation = 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    compDisplay.style.animation = 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    if (userSelection === computerSelection) {
        resultDisplay.textContent = "Empate!";
        resultDisplay.className = 'result-text result-tie';
    } else if (
        (userSelection === 1 && computerSelection === 3) ||
        (userSelection === 3 && computerSelection === 2) ||
        (userSelection === 2 && computerSelection === 1)
    ) {
        resultDisplay.textContent = `Você venceu! ${OPTIONS[userSelection].name} ganha de ${OPTIONS[computerSelection].name}.`;
        resultDisplay.className = 'result-text result-win';
    } else {
        resultDisplay.textContent = `Você perdeu! ${OPTIONS[computerSelection].name} ganha de ${OPTIONS[userSelection].name}.`;
        resultDisplay.className = 'result-text result-lose';
    }
}
