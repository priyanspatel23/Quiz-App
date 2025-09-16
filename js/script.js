const questions = [
  {
    q: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Transfer Machine Language", correct: false },
      { text: "Hyperlink Text Making Language", correct: false },
      { text: "Home Tool Markup Language", correct: false }
    ]
  },
  {
    q: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    q: "Who is known as the Father of Computers?",
    answers: [
      { text: "Alan Turing", correct: false },
      { text: "Charles Babbage", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false }
    ]
  },
  {
    q: "Which gas do humans need to survive?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false }
    ]
  },
  {
    q: "What is the capital city of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Bangkok", correct: false }
    ]
  },
  {
    q: "Which company created the Windows operating system?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Google", correct: false },
      { text: "Microsoft", correct: true },
      { text: "IBM", correct: false }
    ]
  },
  {
    q: "Which is the largest ocean in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    q: "Which device is used to input data into a computer?",
    answers: [
      { text: "Monitor", correct: false },
      { text: "Keyboard", correct: true },
      { text: "Printer", correct: false },
      { text: "Speaker", correct: false }
    ]
  },
  {
    q: "Which country hosted the 2024 Summer Olympics?",
    answers: [
      { text: "USA", correct: false },
      { text: "France", correct: true },
      { text: "Japan", correct: false },
      { text: "Brazil", correct: false }
    ]
  },
  {
    q: "Which programming language is used for web styling?",
    answers: [
      { text: "Python", correct: false },
      { text: "CSS", correct: true },
      { text: "C++", correct: false },
      { text: "Java", correct: false }
    ]
  },
  {
    q: "Which is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Tiger", correct: false },
      { text: "Horse", correct: false }
    ]
  },
  {
    q: "Which element has the chemical symbol H?",
    answers: [
      { text: "Hydrogen", correct: true },
      { text: "Helium", correct: false },
      { text: "Mercury", correct: false },
      { text: "Carbon", correct: false }
    ]
  },
  {
    q: "Which Indian city is known as the Silicon Valley of India?",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "Bangalore", correct: true },
      { text: "Hyderabad", correct: false },
      { text: "Chennai", correct: false }
    ]
  },
  {
    q: "Which is the smallest continent in the world?",
    answers: [
      { text: "Europe", correct: false },
      { text: "Australia", correct: true },
      { text: "Antarctica", correct: false },
      { text: "South America", correct: false }
    ]
  },
  {
    q: "Which device stores data permanently?",
    answers: [
      { text: "RAM", correct: false },
      { text: "Hard Disk", correct: true },
      { text: "Cache", correct: false },
      { text: "Register", correct: false }
    ]
  },
  {
    q: "What is the square root of 144?",
    answers: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "12", correct: true },
      { text: "14", correct: false }
    ]
  },
  {
    q: "Which is the largest mammal on Earth?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Shark", correct: false }
    ]
  },
  {
    q: "Which festival is known as the Festival of Lights in India?",
    answers: [
      { text: "Holi", correct: false },
      { text: "Diwali", correct: true },
      { text: "Eid", correct: false },
      { text: "Christmas", correct: false }
    ]
  },
  {
    q: "Which currency is used in the USA?",
    answers: [
      { text: "Euro", correct: false },
      { text: "Dollar", correct: true },
      { text: "Pound", correct: false },
      { text: "Yen", correct: false }
    ]
  },
  {
    q: "Who wrote the Ramayana?",
    answers: [
      { text: "Vyasa", correct: false },
      { text: "Valmiki", correct: true },
      { text: "Kalidasa", correct: false },
      { text: "Tulsidas", correct: false }
    ]
  },
  {
    q: "Which programming language is used for Android apps?",
    answers: [
      { text: "Swift", correct: false },
      { text: "Java", correct: true },
      { text: "Kotlin", correct: true },
      { text: "C#", correct: false }
    ]
  },
  {
    q: "Which blood group is called Universal Donor?",
    answers: [
      { text: "A+", correct: false },
      { text: "O-", correct: true },
      { text: "B+", correct: false },
      { text: "AB+", correct: false }
    ]
  },
  {
    q: "What is the freezing point of water?",
    answers: [
      { text: "0°C", correct: true },
      { text: "32°C", correct: false },
      { text: "100°C", correct: false },
      { text: "50°C", correct: false }
    ]
  },
  {
    q: "Which is the national sport of India?",
    answers: [
      { text: "Cricket", correct: false },
      { text: "Hockey", correct: true },
      { text: "Football", correct: false },
      { text: "Kabaddi", correct: false }
    ]
  },
  {
    q: "Which is the tallest mountain in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Lhotse", correct: false }
    ]
  },
  {
    q: "Which programming language is known as the Mother of All Languages?",
    answers: [
      { text: "Assembly", correct: false },
      { text: "C", correct: true },
      { text: "Pascal", correct: false },
      { text: "Java", correct: false }
    ]
  },
  {
    q: "Which Indian cricketer is known as the 'God of Cricket'?",
    answers: [
      { text: "Virat Kohli", correct: false },
      { text: "Sachin Tendulkar", correct: true },
      { text: "MS Dhoni", correct: false },
      { text: "Kapil Dev", correct: false }
    ]
  },
  {
    q: "What is the national bird of India?",
    answers: [
      { text: "Sparrow", correct: false },
      { text: "Peacock", correct: true },
      { text: "Crow", correct: false },
      { text: "Parrot", correct: false }
    ]
  },
  {
    q: "Which planet is the largest in our solar system?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false }
    ]
  }
];

let qNo = 0, score = 0, timer, timeLeft = 30;

const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const dispQ = () => {
  if (qNo >= questions.length) return endQuiz();
  const currentQ = questions[qNo];
  questionBox.textContent = currentQ.q;
  optionsBox.innerHTML = "";

  currentQ.answers.forEach((ans) => {
    const col = document.createElement("div");
    col.classList.add("col-md-6");
    col.innerHTML = `
      <button class="btn w-100 opt glow-border">${ans.text}</button>
    `;
    const btn = col.querySelector("button");
    btn.onclick = () => checkAns(ans.correct, btn);
    optionsBox.appendChild(col);
  });
  resetTimer();
};

const checkAns = (correct, btn) => {
  if (correct) {
    score++;
    scoreEl.textContent = score;
    btn.textContent += " ✅ True";
  } else {
    btn.textContent += " ❌ False";
  }
  disableOptions();
};

const disableOptions = () => {
  document.querySelectorAll(".opt").forEach(opt => {
    opt.classList.add("disabled");
  });
};

const resetTimer = () => {
  clearInterval(timer);
  timeLeft = 30;
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.textContent = timeLeft;
    } else {
      clearInterval(timer);
      disableOptions();
    }
  }, 1000);
};

nextBtn.onclick = () => {
  qNo++;
  dispQ();
};

const endQuiz = () => {
  clearInterval(timer);
  questionBox.textContent = `🎉 Quiz Completed! Your Score: ${score}/${questions.length}`;
  optionsBox.innerHTML = "";
  nextBtn.style.display = "none";
  restartBtn.classList.remove("d-none");
};

restartBtn.onclick = () => restartQuiz();
const restartQuiz = () => {
  qNo = 0;
  score = 0;
  scoreEl.textContent = 0;
  nextBtn.style.display = "inline-block";
  restartBtn.classList.add("d-none");
  dispQ();
};

dispQ();