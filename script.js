function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }


 // Final Full Script
const questions = {
  Algebra: {
    easy: [
      { question: "Solve for x: 2x + 5 = 13", choices: ["3", "4", "5", "6"], answer: "4" },
      { question: "What is the value of x^2 - 4x + 4 when x = 3?", choices: ["1", "4", "5", "9"], answer: "4" },
      { question: "Factor: x^2 + 5x + 6", choices: ["(x+3)(x+2)", "(x-3)(x-2)", "(x+1)(x+6)", "(x+2)^2"], answer: "(x+3)(x+2)" },
      { question: "Simplify: (2x^2)(3x^3)", choices: ["5x^5", "6x^5", "6x^6", "x^6"], answer: "6x^5" },
      { question: "Which is the solution to x^2 = 49?", choices: ["7", "-7", "±7", "0"], answer: "±7" },
      { question: "What is the domain of f(x) = 1 / (x - 2)?", choices: ["All real numbers", "All real numbers except 2", "All real numbers except 0", "All real numbers except ±2"], answer: "All real numbers except 2" },
      { question: "Expand: (x + 1)^2", choices: ["x^2 + 1", "x^2 + 2x + 1", "x^2 + 2", "x^2 + x + 1"], answer: "x^2 + 2x + 1" },
      { question: "If f(x) = 3x - 4, find f(2)", choices: ["2", "-2", "6", "8"], answer: "2" },
      { question: "Solve for x: x/2 = 5", choices: ["2.5", "10", "0.4", "5"], answer: "10" },
      { question: "Which of the following is a solution to (x - 1)(x + 4) = 0?", choices: ["-1", "1", "-4", "0"], answer: "-4" }
    ],
    average: [
      { question: "Solve for x: 3x^2 - 12 = 0", choices: ["2", "-2", "±2", "±4", "±3"], answer: "±2" },
      { question: "Simplify: (x^2 - 9)/(x - 3)", choices: ["x + 3", "x - 3", "x^2 - 3", "x^2 + 3", "Cannot be simplified"], answer: "x + 3" },
      { question: "Solve: (x - 2)^2 = 25", choices: ["-5", "5", "±5", "-3, 7", "-5, 7"], answer: "±5" },
      { question: "If f(x) = x^2 - 2x, find f(a + 1)", choices: ["a^2 - 1", "a^2 + 1", "a^2 + 1 - 2a", "a^2 + 2a - 1", "a^2 + 1 - 2a + 1"], answer: "a^2 + 2a - 1" },
      { question: "Find the roots of: x^2 - x - 6 = 0", choices: ["-3 and 2", "-2 and 3", "3 and 2", "-1 and -6", "1 and 6"], answer: "-3 and 2" },
      { question: "The expression (x^2 + x - 2)/(x - 1) simplifies to:", choices: ["x + 2", "x - 2", "x + 1", "x^2 + 1", "Cannot be simplified"], answer: "x + 2" },
      { question: "Solve: x^3 - 4x = 0", choices: ["0, 2, -2", "0, 4, -4", "0, 1, -4", "0, -2, 2", "0, 1, -1"], answer: "0, 2, -2" }
    ],
    difficult: [
      { question: "Solve for x in the equation: x^4 - 10x^2 + 9 = 0", answer: "x = 3, -3, 1, -1" },
      { question: "If f(x) = (x^3 - 6x^2 + 11x - 6), find all real values of x such that f(x) = 0", answer: "x = 1, 2, 3" },
      { question: "Find the sum of all real solutions to the equation: (x^2 - 4)^2 = 16", answer: "0" }
    ]
  },
  NumberTheory:{
    easy: [
      { question: "What is the GCF of 24 and 36?", choices: ["6", "8", "12", "18"], answer: "12" },
      { question: "What is the LCM of 5 and 6?", choices: ["15", "20", "30", "60"], answer: "30" },
      { question: "Which number is prime?", choices: ["21", "49", "37", "51"], answer: "37" },
      { question: "What is 7 mod 3?", choices: ["0", "1", "2", "3"], answer: "1" },
      { question: "Which of the following is divisible by 11?", choices: ["121", "123", "131", "143"], answer: "143" },
      { question: "What is the units digit of 7^3?", choices: ["1", "3", "7", "9"], answer: "7" },
      { question: "Find the sum of the first 5 positive even integers.", choices: ["20", "30", "40", "50"], answer: "30" },
      { question: "What is the 10th prime number?", choices: ["23", "27", "29", "31"], answer: "29" },
      { question: "What is 2^4 * 2^3?", choices: ["2^7", "2^12", "2^1", "2^6"], answer: "2^7" },
      { question: "Which is NOT a factor of 60?", choices: ["10", "15", "25", "30"], answer: "25" }
    ],
    average: [
      { question: "Find the remainder when 345 is divided by 9.", choices: ["1", "3", "6", "0", "9"], answer: "6" },
      { question: "What is Euler’s totient function value for 10?", choices: ["4", "5", "6", "7", "8"], answer: "4" },
      { question: "Which number is a perfect cube?", choices: ["18", "27", "36", "49", "64"], answer: "27" },
      { question: "How many divisors does 60 have?", choices: ["6", "8", "10", "12", "14"], answer: "12" },
      { question: "If p and q are primes such that p + q = 20, which pair is possible?", choices: ["7, 13", "11, 11", "3, 17", "All of these", "None of these"], answer: "All of these" },
      { question: "What is the smallest number divisible by 3, 4, 5, and 6?", choices: ["30", "60", "90", "120", "240"], answer: "60" },
      { question: "What is the last digit of 3^15?", choices: ["1", "2", "3", "4", "5"], answer: "3" }
    ],
    difficult: [
      { question: "Find the number of divisors of 10080.", answer: "48" },
      { question: "How many perfect squares are there between 1 and 100?", answer: "10" },
      { question: "What is the sum of the first 10 primes?", answer: "129" }
    ]
  },
  StatisticsAndProbability: {
    easy: [
      { question: "What is the mean of 4, 8, 6, 2, 10?", choices: ["5", "6", "7", "8"], answer: "6" },
      { question: "What is the median of 3, 7, 9, 2, 5?", choices: ["3", "5", "7", "9"], answer: "5" },
      { question: "Which of the following is a mode?", choices: ["Number that occurs once", "Number that occurs most often", "Smallest number", "Largest number"], answer: "Number that occurs most often" },
      { question: "If a die is rolled once, what is the probability of getting an even number?", choices: ["1/2", "1/3", "1/6", "2/3"], answer: "1/2" },
      { question: "How many outcomes are possible when flipping 3 coins?", choices: ["4", "6", "8", "12"], answer: "8" },
      { question: "In a set of 10 values, what is the maximum number of modes possible?", choices: ["0", "1", "2", "More than 2"], answer: "More than 2" },
      { question: "What is the variance of 2, 2, 2, 2, 2?", choices: ["0", "1", "2", "3"], answer: "0" },
      { question: "What is the probability of drawing a red card from a standard deck?", choices: ["1/2", "1/4", "1/3", "1/52"], answer: "1/2" },
      { question: "If P(A) = 0.6, P(B) = 0.3, and A and B are mutually exclusive, P(A ∪ B) = ?", choices: ["0.3", "0.6", "0.9", "1.0"], answer: "0.9" },
      { question: "Which measure of central tendency is most affected by outliers?", choices: ["Mean", "Median", "Mode", "Range"], answer: "Mean" }
    ],
    average: [
      { question: "If the probability of event A occurring is 0.5, what is the probability of event A not occurring?", choices: ["0", "0.5", "0.4", "0.7", "1"], answer: "0.5" },
      { question: "What is the z-score of a value 4 if the mean is 6 and the standard deviation is 2?", choices: ["-2", "-1", "0", "1", "2"], answer: "-1" },
      { question: "A coin is flipped 3 times. What is the probability of getting exactly 2 heads?", choices: ["1/8", "2/8", "3/8", "4/8", "5/8"], answer: "3/8" },
      { question: "A box contains 5 red, 6 blue, and 9 green marbles. What is the probability of selecting a blue marble?", choices: ["5/20", "6/20", "9/20", "15/20", "1/3"], answer: "6/20" },
      { question: "The mean of 10 values is 8. If one of the values is increased by 2, what is the new mean?", choices: ["7.9", "8", "8.1", "8.5", "9"], answer: "8.1" },
      { question: "A box contains 12 cards numbered 1 through 12. What is the probability of drawing a card numbered less than 5?", choices: ["1/12", "4/12", "2/12", "5/12", "1/2"], answer: "4/12" },
      { question: "What is the standard deviation of the data set: 2, 4, 4, 4, 5, 5, 7, 8, 9?", choices: ["1", "1.5", "2.5", "2", "3"], answer: "2" }
    ],
    difficult: [
      { question: "A deck contains 52 cards. Two cards are drawn without replacement. What is the probability that both are red cards?", answer: "1/17" },
      { question: "If 5% of a population has a certain disease, what is the probability that in a sample of 5 people, at least one person has the disease?", answer: "0.226" },
      { question: "In a standard deck of 52 cards, what is the probability that a card drawn at random is either a King or a Heart?", answer: "4/13" }
    ]
  },

  Geometry: {
    easy: [
      { question: "The area of a rectangle with length 6 cm and width 3 cm is:", choices: ["15 cm²", "18 cm²", "12 cm²", "9 cm²"], answer: "18 cm²" },
      { question: "What is the perimeter of a square with side length 5 cm?", choices: ["15 cm", "10 cm", "20 cm", "25 cm"], answer: "20 cm" },
      { question: "What is the area of a triangle with a base of 4 cm and a height of 6 cm?", choices: ["10 cm²", "20 cm²", "12 cm²", "24 cm²"], answer: "12 cm²" },
      { question: "What is the volume of a cube with a side length of 2 cm?", choices: ["4 cm³", "8 cm³", "6 cm³", "10 cm³"], answer: "8 cm³" },
      { question: "What is the measure of the interior angles of a regular hexagon?", choices: ["90°", "120°", "150°", "180°"], answer: "120°" },
      { question: "What is the area of a circle with radius 3 cm?", choices: ["9.42 cm²", "24.56 cm²", "28.27 cm²", "32.01 cm²"], answer: "28.27 cm²" },
      { question: "How many sides does a decagon have?", choices: ["8", "6", "12", "10"], answer: "10" },
      { question: "A triangle has angles measuring 35°, 65°, and 80°. Is this a valid triangle?", choices: ["Yes", "No"], answer: "Yes" },
      { question: "What is the circumference of a circle with radius 7 cm?", choices: ["25 cm", "40 cm", "35 cm", "43.96 cm"], answer: "43.96 cm" },
      { question: "A right triangle has legs of length 6 cm and 8 cm. What is the length of the hypotenuse?", choices: ["12 cm", "10 cm", "8 cm", "6 cm"], answer: "10 cm" }
    ],
    average: [
      { question: "What is the area of a sector of a circle with radius 4 cm and a central angle of 60°?", choices: ["4.18 cm²", "6.28 cm²", "8.38 cm²", "10.28 cm²", "12.38 cm²"], answer: "8.38 cm²" },
      { question: "What is the sum of the interior angles of an octagon?", choices: ["720°", "800°", "1000°", "1080°", "1200°"], answer: "1080°" },
      { question: "What is the volume of a cylinder with radius 3 cm and height 10 cm?", choices: ["78.54 cm³", "282.74 cm³", "75.36 cm³", "96.30 cm³", "100.53 cm³"], answer: "282.74 cm³" },
      { question: "What is the length of the diagonal of a rectangle with sides 6 cm and 8 cm?", choices: ["12 cm", "14 cm", "10 cm", "8 cm", "6 cm"], answer: "10 cm" },
      { question: "The radius of a circle is increased by 50%. How does the area change?", choices: ["It decreases by half", "It increases by 1.5 times", "It decreases by 2 times", "It increases by 2.25 times", "It stays the same"], answer: "It increases by 2.25 times" },
      { question: "In a right triangle, the length of one leg is 6 cm, and the hypotenuse is 10 cm. What is the length of the other leg?", choices: ["12 cm", "8 cm", "7 cm", "5 cm", "9 cm"], answer: "8 cm" },
      { question: "A trapezoid has bases of length 8 cm and 12 cm, and a height of 6 cm. What is the area?", choices: ["48 cm²", "54 cm²", "60 cm²", "72 cm²", "66 cm²"], answer: "60 cm²" }
    ],
    difficult: [
      { question: "Calculate the surface area of a sphere with a radius of 5 cm.", answer: "314.16 cm²" },
      { question: "The diagonals of a rhombus measure 8 cm and 10 cm. Find its area.", answer: "40 cm²" },
      { question: "Find the length of the side of a square inscribed in a circle with radius 5 cm.", answer: "7.07 cm" }
    ]
  },
  Trigonometry: {
    easy: [
      { question: "What is sin(30°)?", choices: ["1", "1/2", "√3/2", "0"], answer: "1/2" },
      { question: "What is cos(90°)?", choices: ["1", "√2/2", "1/2", "0"], answer: "0" },
      { question: "What is tan(45°)?", choices: ["0", "1", "√3", "2"], answer: "1" },
      { question: "What is the value of sin(90°)?", choices: ["1", "0", "√2/2", "1/2"], answer: "1" },
      { question: "What is cos(60°)?", choices: ["0", "1", "1/2", "√3/2"], answer: "1/2" },
      { question: "What is tan(30°)?", choices: ["1/√3", "√3", "1", "0"], answer: "1/√3" },
      { question: "What is the value of sin(180°)?", choices: ["1", "0", "√2/2", "1/2"], answer: "0" },
      { question: "Which of the following is the correct identity for cos²(x) + sin²(x)?", choices: ["1", "0", "sin(x)", "cos(x)"], answer: "1" },
      { question: "What is tan(60°)?", choices: ["1", "1/√3", "√3", "0"], answer: "√3" },
      { question: "What is sin(0°)?", choices: ["1", "0", "√2/2", "1/2"], answer: "0" }
    ],
    average: [
      { question: "Find the value of sin(θ) if cos(θ) = 3/5 and θ is in the first quadrant.", choices: ["3/5", "5/3", "1/5", "4/5", "2/5"], answer: "4/5" },
      { question: "If sin(θ) = 3/5, find cos(θ) assuming θ is in the first quadrant.", choices: ["3/5", "4/5", "5/3", "1/5", "2/5"], answer: "4/5" },
      { question: "What is the exact value of sin(π/4)?", choices: ["1/2", "√2/2", "√3/2", "1/2√3", "1"], answer: "√2/2" },
      { question: "What is tan(45°) * tan(45°)?", choices: ["0", "√2", "1", "2", "√3"], answer: "1" },
      { question: "If sin(θ) = 1/2, what is the possible value of θ in the range [0°, 360°]?", choices: ["30°", "150°", "90°", "30° or 150°", "0° or 180°"], answer: "30° or 150°" },
      { question: "Which identity is correct?", choices: ["tan(θ) = sin(θ)/cos(θ)", "cos(θ) = 1/tan(θ)", "sin(θ) = cos(θ)/tan(θ)", "sin(θ) = cos(θ)/tan(θ)", "tan(θ) = cos(θ)/sin(θ)"], answer: "tan(θ) = sin(θ)/cos(θ)" },
      { question: "Find the value of sec(30°).", choices: ["1/√3", "√3", "2/√3", "1/2", "√2"], answer: "2/√3" }
    ],
    difficult: [
      { question: "Prove the identity: cos²(x) - sin²(x) = cos(2x)", answer: "cos²(x) - sin²(x) = cos(2x)" },
      { question: "Solve for θ if sin(θ) = √3/2 and θ is in the second quadrant.", answer: "θ = 120°" },
      { question: "Given that tan(θ) = 4/3, find sin(θ) and cos(θ).", answer: "sin(θ) = 4/5, cos(θ) = 3/5" }
    ]
  }
};

 // -------------------- Game State Variables --------------------
 let randomizedStatements = [];
 let currentStatementIndex = 0;
 let score = 0;
 let timeLeft = 120; // Default to 2:30 mins (150 seconds)
 let timer;
 let selectedSchoolLevel = '';
 let selectedMode = '';
 let selectedTime = 150;
 let isGameActive = false;

 // Constants for guesses and skips
 const MAX_SKIPS = 2;
 const MAX_GUESSES = 5;
 let remainingSkips = MAX_SKIPS;
 let remainingGuesses = MAX_GUESSES;

 // -------------------- DOM Elements --------------------
 const introPage = document.getElementById('intro-page');
 const startGameButton = document.getElementById('start-game');
 const schoolLevelButtons = document.querySelectorAll('.level-button');
 const modeButtons = document.querySelectorAll('.mode-button');
 const timeButtons = document.querySelectorAll('.time-button');
 const instructionsContainer = document.getElementById('instructions-container');
 const readyButton = document.getElementById('ready-button');
 const gameContainer = document.getElementById('game-container');
 const statementElement = document.getElementById('statement');
 const wordBoxesElement = document.getElementById('word-boxes');
 const keyboardElement = document.getElementById('keyboard');
 const timerElement = document.getElementById('timer');
 const scoreboardElement = document.getElementById('scoreboard');
 const skipButton = document.getElementById('skip-button');
 const messageContainer = document.getElementById('message-container');
 const messageElement = document.getElementById('message');
 const playAgainButton = document.getElementById('play-again');
 const exitButton = document.getElementById('exit');
 const guessesElement = document.getElementById('guesses');
 const skipsElement = document.getElementById('skips');

 // -------------------- Audio Elements --------------------
 const backgroundSound = new Audio('spotifydown.com - boba date.mp3');
 const correctSound = new Audio('Correct Answer sound effect.mp3'); 
 const incorrectSound = new Audio('https://incorrect-sound.mp3'); 
 const gameOverSound = new Audio('Game Over Sound Effect.mp3'); 
 backgroundSound.loop = true; 
 incorrect-sound.mp3

 // -------------------- Event Listeners --------------------
 // School Level selection
 schoolLevelButtons.forEach(button => {
     button.addEventListener('click', () => selectSchoolLevel(button));
 });

 // Mode selection
 modeButtons.forEach(button => {
     button.addEventListener('click', () => selectMode(button));
 });

 // Time selection
 timeButtons.forEach(button => {
     button.addEventListener('click', () => selectTime(button));
 });

 // Start game button
 startGameButton.addEventListener('click', showInstructions);

 // Ready button to start the game
 readyButton.addEventListener('click', startGame);

 // Play again and exit buttons in the message container
 playAgainButton.addEventListener('click', () => {
     messageContainer.style.display = 'none';
     startGame();
 });

 exitButton.addEventListener('click', () => {
     messageContainer.style.display = 'none';
     gameContainer.style.display = 'none';
     introPage.style.display = 'block';
 });

 // Skip button
 skipButton.addEventListener('click', handleSkip);

 // Remove the undefined handleKeyClick listener
 // keyboardElement.addEventListener('click', handleKeyClick); // Removed to fix the issue

 // Keyboard input
 document.addEventListener('keydown', handleKeyPress);
 // -------------------- Function Definitions --------------------

    // Select School Level
    function selectSchoolLevel(button) {
      schoolLevelButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedSchoolLevel = button.id.replace('level-', '');
      checkStartButton();
  }

  // Select game mode
  function selectMode(button) {
      modeButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedMode = button.id.replace('mode-', '');
      checkStartButton();
  }

  // Select time limit
  function selectTime(button) {
      timeButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      const timeParts = button.id.split('-')[1].split('_');
      selectedTime = parseInt(timeParts[0]) * 60 + (timeParts[1] ? parseInt(timeParts[1]) : 0);
      checkStartButton();
  }

  // Enable the start button if school level, mode, and time are selected
  function checkStartButton() {
      if (selectedSchoolLevel && selectedMode && selectedTime) {
          startGameButton.disabled = false;
      }
  }

  // Show instructions screen
  function showInstructions() {
      introPage.style.display = 'none';
      instructionsContainer.style.display = 'block';
  }

  // Start the game
  function startGame() {
      isGameActive = true;
      instructionsContainer.style.display = 'none';
      gameContainer.style.display = 'block';
      resetGameState();
      randomizedStatements = shuffleArray(getSelectedStatements());
      displayStatement();
      createKeyboard();
      startTimer();
      updateGuesses();
      updateSkips();
      backgroundSound.play();
  }

  // Reset game state variables
  function resetGameState() {
      currentStatementIndex = 0;
      score = 0;
      timeLeft = selectedTime;
      remainingGuesses = MAX_GUESSES;
      remainingSkips = MAX_SKIPS;
      updateScore();
      updateGuesses();
      updateSkips();
      skipButton.disabled = false;
  }

  // Get statements based on selected school level and mode
  function getSelectedStatements() {
      if (selectedMode === 'all') {
          // Combine all modes within the selected school level
          return [
              ...statements[selectedSchoolLevel].bio,
              ...statements[selectedSchoolLevel].chem,
              ...statements[selectedSchoolLevel].physics
          ];
      } else {
          // Return statements for the selected mode within the selected school level
          return statements[selectedSchoolLevel][selectedMode];
      }
  }

  // Display the current statement and related image
  function displayStatement() {
      if (currentStatementIndex >= randomizedStatements.length) {
          endGame("You've completed all statements! Play Again?");
          return;
      }

      const currentStatement = randomizedStatements[currentStatementIndex];
      statementElement.textContent = currentStatement.statement;

      // Handle image display if image property exists
      const imageElement = document.getElementById('statement-image');
  if (currentStatement.image) {
    imageElement.src = currentStatement.image;
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }

      // Create word boxes based on the term length
      wordBoxesElement.innerHTML = '';
      for (let i = 0; i < currentStatement.term.length; i++) {
          const box = document.createElement('div');
          box.className = 'word-box';
          box.setAttribute('data-index', i);
          box.textContent = '\u00A0'; // Non-breaking space to occupy space
          wordBoxesElement.appendChild(box);
      }

      resetKeyboard();
  }

  // Create the on-screen keyboard
  function createKeyboard() {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      keyboardElement.innerHTML = '';
      for (let letter of alphabet) {
          const key = document.createElement('div');
          key.className = 'key';
          key.textContent = letter;
          key.addEventListener('click', () => handleLetterClick(letter));
          keyboardElement.appendChild(key);
      }
  }

  // Reset the keyboard to initial state
  function resetKeyboard() {
      const keys = document.querySelectorAll('.key');
      keys.forEach(key => {
          key.classList.remove('used');
          key.disabled = false;
          key.addEventListener('click', () => handleLetterClick(key.textContent));
      });
  }

  // Handle letter clicks from on-screen keyboard
  function handleLetterClick(letter) {
      processGuess(letter);
  }

  // Handle physical keyboard input
  function handleKeyPress(event) {
      if (!isGameActive) return;
      const letter = event.key.toLowerCase();
      const validKeys = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      if (validKeys.includes(letter)) {
          processGuess(letter);
      }
  }

  // Process a guessed letter
  function processGuess(letter) {
      const currentStatement = randomizedStatements[currentStatementIndex];
      const term = currentStatement.term.toLowerCase();
      const letterBoxes = document.querySelectorAll('.word-box');

      let correctGuess = false;
      for (let i = 0; i < term.length; i++) {
          if (term[i] === letter) {
              if (letterBoxes[i].textContent === '\u00A0') { // Only update if not already guessed
                  letterBoxes[i].textContent = letter;
                  correctGuess = true;
                  score += 10;
              }
          }
      }

      if (correctGuess) {
          correctSound.play();
      } else {
          incorrectSound.play();
          score -= 5;
          remainingGuesses--;
          updateGuesses();
          if (remainingGuesses <= 0) {
              endGame("No more guesses left! Play Again?");
              return;
          }
      }

      // Disable the guessed key on the keyboard
      const key = Array.from(keyboardElement.children).find(k => k.textContent === letter);
      if (key) {
          key.classList.add('used');
          key.disabled = true;
      }

      updateScore();
      checkCompletion();
  }

//   // Update the score display
//   function updateScore() {
//       scoreboardElement.textContent = Score: ${score};
//   }

//   // Update the guesses left display
//   function updateGuesses() {
//       guessesElement.textContent = Guesses left: ${remainingGuesses};
//   }

//   // Update the skips left display
//   function updateSkips() {
//       skipsElement.textContent = Skips left: ${remainingSkips};
//   }

//   // Start the game timer
//   function startTimer() {
//       timerElement.textContent = Time: ${formatTime(timeLeft)};
//       timer = setInterval(() => {
//           timeLeft--;
//           timerElement.textContent = Time: ${formatTime(timeLeft)};
//           if (timeLeft <= 0) {
//               clearInterval(timer);
//               endGame("Time's up! Play Again?");
//           }
//       }, 1000);
//   }

//   // Format time in MM:SS
//   function formatTime(seconds) {
//       const minutes = Math.floor(seconds / 60);
//       const secs = seconds % 60;
//       return ${minutes}:${secs < 10 ? '0' : ''}${secs};
//   }

  // Check if the current term is fully guessed
  function checkCompletion() {
      const letterBoxes = document.querySelectorAll('.word-box');
      let completed = true;
      letterBoxes.forEach(box => {
          if (box.textContent === '\u00A0') {
              completed = false;
          }
      });

      if (completed) {
          score += 150;
          updateScore();
          showMessage('Congratulations! You found the term!', false);
          advanceToNextStatement();
      }
  }

  // Show a message to the player
  function showMessage(msg, showButtons) {
      messageElement.textContent = msg;
      messageContainer.style.display = 'flex';
      document.querySelector('.message-buttons').style.display = showButtons ? 'block' : 'none';

      // Automatically hide the message after 2 seconds if buttons are not to be shown
      if (!showButtons) {
          setTimeout(() => {
              messageContainer.style.display = 'none';
              advanceToNextStatement();
          }, 2000);
      }
  }

  // Advance to the next statement
  function advanceToNextStatement() {
      currentStatementIndex++;
      if (currentStatementIndex < randomizedStatements.length) {
          displayStatement();
      } else {
          endGame("You've completed all statements! Play Again?");
      }
  }

  // Handle skipping the current statement
  function handleSkip() {
      if (remainingSkips > 0) {
          score -= 10; // Penalty for skipping
          remainingSkips--;
          updateScore();
          updateSkips();
          currentStatementIndex++;
          displayStatement();

          if (remainingSkips === 0) {
              skipButton.disabled = true;
          }
      }
  }

  // End the game with a message
  function endGame(msg) {
      isGameActive = false;
      clearInterval(timer);
      backgroundSound.pause();
      gameOverSound.play();
      messageElement.textContent = msg;
      messageContainer.style.display = 'flex';
      document.querySelector('.message-buttons').style.display = 'block';
      skipButton.disabled = true;
  }

  // Shuffle an array (Fisher-Yates algorithm)
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
