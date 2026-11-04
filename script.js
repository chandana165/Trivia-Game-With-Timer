// Array of questions grouped by category (25 questions each)

const questions = [
    {
      category: "programming",
      questions: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following is a correct way to declare a variable in JavaScript?",
          options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
          correctAnswer: 0,
        },
        {
          question: "How do you write comment in Python?",
          options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
          correctAnswer: 1,
        },
        {
          question: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
          correctAnswer: 0,
        },
        {
          question: "In JavaScript, how do you create a function?",
          options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'typeof' operator do in JavaScript?",
          options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
          correctAnswer: 0,
        },
        {
          question: "In C, how do you define a function?",
          options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
          correctAnswer: 2,
        },
        {
          question: "Which of the following is a characteristic of Python?",
          options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
          correctAnswer: 1,
        },
        {
          question: "Which language is used for Android development?",
          options: ["Python", "Java", "JavaScript", "C++"],
          correctAnswer: 1,
        },
        {
          question: "What is the purpose of the 'forEach()' method in JavaScript?",
          options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
          correctAnswer: 3,
        },
        {
          question: "What does the 'return' keyword do in a function?",
          options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is NOT a semantic HTML element?",
          options: ["<header>", "<footer>", "<div>", "<article>"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary purpose of a 'for' loop in programming?",
          options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
          correctAnswer: 0,
        },
        {
          question: "Which data structure is ideal for LIFO (Last In First Out)?",
          options: ["Queue", "Stack", "Linked list", "Array"],
          correctAnswer: 1,
        },
        {
          question: "Which command is used in Git to store changes in the repository?",
          options: ["git commit", "git push", "git pull", "git add"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'map()' function do in JavaScript?",
          options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
          correctAnswer: 2,
        },
        {
          question: "What is an IDE?",
          options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is a feature of object-oriented programming?",
          options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
          correctAnswer: 0,
        },
        {
          question: "What does SQL stand for?",
          options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
          correctAnswer: 3,
        },
        {
          question: "Which of these is an example of a non-relational database?",
          options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
          correctAnswer: 0,
        },
        {
          question: "How do you write comment in CSS?",
          options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following algorithms is used to sort an array by comparing elements?",
          options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'finally' block in Java do?",
          options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
          correctAnswer: 2,
        },
        {
          question: "Which data structure is best for searching elements quickly?",
          options: ["Binary search tree", "Array", "Linked list", "Queue"],
          correctAnswer: 0,
        },
        {
          question: "What is the correct syntax for a JavaScript if statement?",
          options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
          correctAnswer: 0,
        },
      ],
    },
  
    {
      category: "geography",
      questions: [
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "South Korea", "Japan", "Thailand"],
          correctAnswer: 2,
        },
        {
          question: "What is the largest ocean in the world?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which country has the largest population in the world?",
          options: ["India", "China", "United States", "Indonesia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Great Barrier Reef?",
          options: ["Australia", "United States", "South Africa", "New Zealand"],
          correctAnswer: 0,
        },
        {
          question: "Which is the smallest country in the world?",
          options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
          correctAnswer: 2,
        },
        {
          question: "Which is the tallest mountain in the world?",
          options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
          correctAnswer: 2,
        },
        {
          question: "What is the capital of Canada?",
          options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
          correctAnswer: 0,
        },
        {
          question: "Which desert is the largest hot desert in the world?",
          options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
          correctAnswer: 2,
        },
        {
          question: "Which country is known as the Land of the Midnight Sun?",
          options: ["Sweden", "Finland", "Norway", "Denmark"],
          correctAnswer: 2,
        },
        {
          question: "What is the longest mountain range in the world?",
          options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
          correctAnswer: 2,
        },
        {
          question: "Which river flows through Egypt?",
          options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
          correctAnswer: 2,
        },
        {
          question: "Which is the largest island in the world?",
          options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
          correctAnswer: 0,
        },
        {
          question: "What is the capital of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most time zones?",
          options: ["United States", "Russia", "Canada", "Australia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Eiffel Tower?",
          options: ["Germany", "Italy", "Spain", "France"],
          correctAnswer: 3,
        },
        {
          question: "Which is the most populous city in the world?",
          options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
          correctAnswer: 0,
        },
        {
          question: "Which mountain range is located in South America?",
          options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
          correctAnswer: 3,
        },
        {
          question: "Which continent is known as the 'Dark Continent'?",
          options: ["Asia", "Africa", "South America", "Europe"],
          correctAnswer: 1,
        },
        {
          question: "What is the capital of Brazil?",
          options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
          correctAnswer: 2,
        },
        {
          question: "What is the official language of Brazil?",
          options: ["Spanish", "English", "Portuguese", "French"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most volcanoes?",
          options: ["Japan", "Indonesia", "United States", "Italy"],
          correctAnswer: 1,
        },
        {
          question: "Which city is known as the Big Apple?",
          options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
          correctAnswer: 1,
        },
        {
          question: "Which ocean is located to the east of Africa?",
          options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which is the second largest continent by area?",
          options: ["Asia", "Africa", "North America", "Europe"],
          correctAnswer: 1,
        },
      ],
    },
  
  
    {
      category: "mathematics",
      questions: [
        {
          question: "What is the square root of 144?",
          options: ["10", "11", "12", "13"],
          correctAnswer: 2,
        },
        {
          question: "What is 15 × 13?",
          options: ["180", "185", "195", "200"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 8³?",
          options: ["512", "216", "256", "128"],
          correctAnswer: 0,
        },
        {
          question: "What is 48 ÷ 6?",
          options: ["7", "8", "9", "10"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 3 + 5 × 4?",
          options: ["20", "22", "24", "23"],
          correctAnswer: 3,
        },
        {
          question: "What is the sum of the angles in a triangle?",
          options: ["180°", "360°", "90°", "270°"],
          correctAnswer: 0,
        },
        {
          question: "What is the perimeter of a square with a side length of 4 cm?",
          options: ["12 cm", "16 cm", "20 cm", "24 cm"],
          correctAnswer: 1,
        },
        {
          question: "What is 11²?",
          options: ["121", "131", "141", "111"],
          correctAnswer: 0,
        },
        {
          question: "What is 9 × 12?",
          options: ["105", "110", "108", "120"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 16 ÷ 4?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
        },
        {
          question: "What is 25% of 200?",
          options: ["30", "40", "50", "60"],
          correctAnswer: 2,
        },
        {
          question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
          options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 ÷ 2 + 3?",
          options: ["8", "7", "9", "6"],
          correctAnswer: 1,
        },
        {
          question: "What is 3 × 7 + 2?",
          options: ["20", "21", "22", "23"],
          correctAnswer: 1,
        },
        {
          question: "What is the greatest common divisor (GCD) of 24 and 36?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 3,
        },
        {
          question: "What is the least common multiple (LCM) of 6 and 8?",
          options: ["24", "32", "48", "56"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 2³ × 3?",
          options: ["12", "15", "18", "24"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 × (5 + 3)?",
          options: ["80", "70", "60", "50"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 14 × 14?",
          options: ["186", "196", "206", "216"],
          correctAnswer: 1,
        },
        {
          question: "What is the sum of the first 10 positive integers?",
          options: ["50", "55", "60", "65"],
          correctAnswer: 1,
        },
        {
          question: "What is 12 × 15?",
          options: ["150", "160", "170", "180"],
          correctAnswer: 3,
        },
        {
          question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
          options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of (8 + 2) × 3?",
          options: ["30", "32", "34", "28"],
          correctAnswer: 3,
        },
        {
          question: "What is the value of 50% of 80?",
          options: ["30", "35", "40", "45"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 25 ÷ 5 × 3?",
          options: ["12", "15", "18", "20"],
          correctAnswer: 1,
        },
      ],
    },
    {
    category: "entertainment",
    questions: [
      {
        question: "Which Tollywood movie features the dialogue 'Idhi chala bagundi ra'?",
        options: ["Pokiri", "Arjun Reddy", "Bommarillu", "Jathi Ratnalu"],
        correctAnswer: 3,
      },
      {
        question: "Who composed the music for Baahubali: The Beginning?",
        options: ["Devi Sri Prasad", "Thaman S", "M.M. Keeravani", "Anirudh Ravichander"],
        correctAnswer: 2,
      },
      {
        question: "Which Telugu web series is famous for the character 'Harsha'?",
        options: ["Muddapappu Avakai", "Geetha Subramanyam", "30 Weds 21", "CommitMental"],
        correctAnswer: 1,
      },
      {
        question: "In Ala Vaikunthapurramuloo, what is the name of the song featuring Allu Arjun’s dance that went viral?",
        options: ["Butta Bomma", "Samajavaragamana", "Ramuloo Ramulaa", "Seeti Maar"],
        correctAnswer: 0,
      },
      {
        question: "Which Tollywood film is known for the iconic dialogue 'Okkokkadiki Okkokkadu'?",
        options: ["Tagore", "Athadu", "Aparichithudu", "Pokiri"],
        correctAnswer: 2,
      },
      {
        question: "Who directed the hit film Eega?",
        options: ["Sukumar", "Rajamouli", "Puri Jagannadh", "Trivikram"],
        correctAnswer: 1,
      },
      {
        question: "Which actor is known as the 'Stylish Star' of Tollywood?",
        options: ["Mahesh Babu", "Jr. NTR", "Allu Arjun", "Ram Charan"],
        correctAnswer: 2,
      },
      {
        question: "What is the name of Vijay Deverakonda’s character in Arjun Reddy?",
        options: ["Vikram", "Arjun", "Surya", "Bobby"],
        correctAnswer: 1,
      },
      {
        question: "Which film features the popular song Vachinde?",
        options: ["Maharshi", "Fidaa", "DJ", "Sarrainodu"],
        correctAnswer: 1,
      },
      {
        question: "Which Telugu movie was the first to cross ₹500 crores at the box office?",
        options: ["Baahubali 2", "RRR", "Pushpa", "Sarileru Neekevvaru"],
        correctAnswer: 0,
      },
      {
        question: "Which Telugu web series revolves around college life and nostalgia?",
        options: ["CommitMental", "30 Weds 21", "Loser", "Pelli Gola"],
        correctAnswer: 1,
      },
      {
        question: "What is the real name of Jr. NTR?",
        options: ["Nandamuri Taraka Rama Rao", "Nandamuri Teja Rao", "Nandamuri Tirupati Rao", "Nandamuri Tharun Rao"],
        correctAnswer: 0,
      },      
      {
        question:"Which Telugu movie is famous for the meme 'Em chestunnav ra'?",
        options: ["Arjun Reddy", "Brochevarevarura", "Jathi Ratnalu", "Ee Nagaraniki Emaindi"],
        correctAnswer: 3,
      },
      {
        question: "Which movie features the hit song Samajavaragamana?",
        options: ["Ala Vaikunthapurramuloo", "Aravinda Sametha", "DJ", "Athadu"],
        correctAnswer: 0,
      },
      {
        question: "Which film features the character 'Rangasthalam Chitti Babu'?",
        options: ["Rangasthalam", "Pushpa", "RRR", "Janatha Garage"],
        correctAnswer: 0,
      },
      {
        question: "Who played the role of 'Bheem' in RRR?",
        options: ["Ram Charan", "Nani", "Nagarjuna", "Jr. NTR"],
        correctAnswer: 3,
      },
      {
        question: "Which of these Telugu movies is based on a real-life event?",
        options: ["Kanche", "Jersey", "Agent Sai Srinivasa Athreya", "Ghazi"],
        correctAnswer: 3,
      },
      {
        question: "Which director is known for intelligent thrillers like 1 Nenokkadine and Arya?",
        options: ["Trivikram", "Rajamouli", "Sukumar", "Puri Jagannadh"],
        correctAnswer: 2,
      },
      {
        question: "In Gabbar Singh, Pawan Kalyan's character is inspired by which Bollywood film?",
        options: ["Sholay", "Dabangg", "Singham", "Gangs of Wasseypur"],
        correctAnswer: 1,
      },
      {
        question:"Which film has the famous interval scene where Mahesh Babu says 'Nenu Okkadine'?",
        options: ["Dookudu", "1 Nenokkadine", "Pokiri", "Athadu"],
        correctAnswer: 1,
      },
      {
        question: "Which song from Pushpa became a global sensation?",
        options: ["Oo Antava", "Saami Saami", "Srivalli", "Eyy Bidda Idhi Naa Adda"],
        correctAnswer: 0,
      },
      {
        question: "Which Telugu comedian is known for his famous line 'Emantivi Emantivi'?",
        options: ["Vennela Kishore", "Brahmanandam", "Sunil", "Ali"],
        correctAnswer: 0,
      },
      {
        question: "Which of these Telugu films is a psychological thriller?",
        options: ["Anukokunda Oka Roju", "Shatamanam Bhavati", "Race Gurram", "Fidaa"],
        correctAnswer: 0,
      },
      {
        question: "What  colour is the Dora Explorer backpack?",
        options: ["Blue", "Red", "Purple", "Yellow"],
        correctAnswer: 2,
      },
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Elivis Presley", "Michael Jackson", "Prince", "Justin Bieber"],
        correctAnswer: 1,
      },
    ],
  },
];  
  // DOM element selectors
  const configContainer = document.querySelector(".config-container");
  const quizContainer = document.querySelector(".quiz-container");
  const answerOptions = quizContainer.querySelector(".answer-options");
  const nextQuestionBtn = quizContainer.querySelector(".next-question-btn");
  const questionStatus = quizContainer.querySelector(".question-status");
  const timerDisplay = quizContainer.querySelector(".timer-duration");
  const resultContainer = document.querySelector(".result-container");
  
  // Quiz state variables
  const QUIZ_TIME_LIMIT = 15;
  let currentTime = QUIZ_TIME_LIMIT;
  let timer = null;
  let quizCategory = "programming";
  let numberOfQuestions = 10;
  let currentQuestion = null;
  const questionsIndexHistory = [];
  let correctAnswersCount = 0;
  let disableSelection = false;
  
  // Display the quiz result and hide the quiz container
  const showQuizResult = () => {
    clearInterval(timer);
    document.querySelector(".quiz-popup").classList.remove("active");
    document.querySelector(".result-popup").classList.add("active");
  
    const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort!`;
    resultContainer.querySelector(".result-message").innerHTML = resultText;
  };
  
  // Clear and reset the timer
  const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
  };
  
  // Initialize and start the timer for the current question
  const startTimer = () => {
    timer = setInterval(() => {
      currentTime--;
      timerDisplay.textContent = `${currentTime}s`;
  
      if (currentTime <= 0) {
        clearInterval(timer);
        disableSelection = true;
        nextQuestionBtn.style.visibility = "visible";
        quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
        highlightCorrectAnswer();
  
        // Disable all answer options after one option is selected
        answerOptions.querySelectorAll(".answer-option").forEach((option) => (option.style.pointerEvents = "none"));
      }
    }, 1000);
  };
  
  // Fetch a random question from based on the selected category
  const getRandomQuestion = () => {
    const categoryQuestions = questions.find((cat) => cat.category.toLowerCase() === quizCategory.toLowerCase())?.questions || [];
  
    // Show the results if all questions have been used
    if (questionsIndexHistory.length >= Math.min(numberOfQuestions, categoryQuestions.length)) {
      return showQuizResult();
    }
  
    // Filter out already asked questions and choose a random one
    const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  
    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
  };
  
  // Highlight the correct answer option and add icon
  const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded"> check_circle </span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
  };
  
  // Handle the user's answer selection
  const handleAnswer = (option, answerIndex) => {
    if (disableSelection) return;
    clearInterval(timer);
    disableSelection = true;
  
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? "correct" : "incorrect");
    !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;
  
    // Insert icon based on correctness
    const iconHTML = `<span class="material-symbols-rounded"> ${isCorrect ? "check_circle" : "cancel"} </span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);
  
    // Disable all answer options after one option is selected
    answerOptions.querySelectorAll(".answer-option").forEach((option) => (option.style.pointerEvents = "none"));
  
    nextQuestionBtn.style.visibility = "visible";
  };
  
  // Render the current question and its options in the quiz
  const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;
    disableSelection = false;
  
    resetTimer();
    startTimer();
  
    // Update the UI
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
    quizContainer.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;
    answerOptions.innerHTML = "";
  
    // Create option <li> elements, append them, and add click event listeners
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.classList.add("answer-option");
      li.textContent = option;
      answerOptions.append(li);
      li.addEventListener("click", () => handleAnswer(li, index));
    });
  };
  
  // Start the quiz and render the random question
  const startQuiz = () => {
    document.querySelector(".config-popup").classList.remove("active");
    document.querySelector(".quiz-popup").classList.add("active");
  
    // Update the quiz category and number of questions
    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);
  
    renderQuestion();
  };
  
  // Highlight the selected option on click - category or no. of question
  configContainer.querySelectorAll(".category-option, .question-option").forEach((option) => {
    option.addEventListener("click", () => {
      option.parentNode.querySelector(".active").classList.remove("active");
      option.classList.add("active");
    });
  });
  
  // Reset the quiz and return to the configuration container
  const resetQuiz = () => {
    resetTimer();
    correctAnswersCount = 0;
    questionsIndexHistory.length = 0;
    document.querySelector(".config-popup").classList.add("active");
    document.querySelector(".result-popup").classList.remove("active");
  };
  
  // Event listeners
  nextQuestionBtn.addEventListener("click", renderQuestion);
  resultContainer.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
  configContainer.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);
  