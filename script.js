document.getElementById('flowers').addEventListener('click', function() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('puzzlePage').style.display = 'block';
});

let letters = document.querySelectorAll('.letter');
let result = document.getElementById('result');
let correctAnswer = 'MAHATHI';
let currentAnswer = '';

letters.forEach(letter => {
    letter.addEventListener('click', function() {
        currentAnswer += this.textContent;
        this.style.color = 'red'; // Highlight selected letters
        
        if (correctAnswer.startsWith(currentAnswer)) {
            // If the current sequence is correct so far
            if (currentAnswer === correctAnswer) {
                showPoem();
            }
        } else {
            // If the sequence is incorrect, reset the puzzle
            result.textContent = 'Wrong sequence! Try again.';
            resetPuzzle();
        }
    });
});

function resetPuzzle() {
    currentAnswer = '';
    letters.forEach(letter => {
        letter.style.color = 'black'; // Reset letter colors
    });
}

function showPoem() {
    // Clear the current screen
    document.getElementById('puzzlePage').innerHTML = '';
    // Add the poem content
    const poemDiv = document.createElement('div');
    poemDiv.classList.add('poem');
    poemDiv.innerHTML = `
        <h1>Mahi</h1>
        <p>It started with a laugh, so pure and true,<br>
        When I said "Google," your joy just grew.<br>
        That moment, I knew my heart was lost,<br>
        In the melody of your voice, at any cost.<br><br>
        We drove through the night, stars above,<br>
        To get you Taco Bell, a gesture of love.<br>
        Every smile, every bite, every word you said,<br>
        Made me fall deeper, in love so widespread.<br><br>
        Your laughter is my favorite song,<br>
        In your presence, I feel I belong.<br>
        Mahathi, with you, life's a beautiful tale,<br>
        Together forever, our love will prevail.</p>
    `;
    document.getElementById('puzzlePage').appendChild(poemDiv);
}

