import firebase from "../config/fbConfig";
const db = firebase.firestore();

const quizzes = [
  {
    quiz_description: "Big balls dangling in space.",
    quiz_id: "0",
    quiz_questions: [
      {
        question: "How many Planets in the solar system?",
        answers: ["8", "7", "5", "10"],
        correct_answer: "8"
      },
      {
        question: "Which Planet is the largest in the solar system?",
        answers: ["Mars", "Saturn", "Jupiter", "Mercury"],
        correct_answer: "Jupiter"
      },
      {
        question: "Which planet is the closest to the sun?",
        answers: ["Mars", "Saturn", "Jupiter", "Mercury"],
        correct_answer: "Mercury"
      }
    ],
    quiz_length: 3,
    quiz_points: 100,
    quiz_title: "Planets"
  },
  {
    quiz_description: "What your breakfast is made of.",
    quiz_id: "1",
    quiz_questions: [
      {
        question: "What's water's chemical formula?",
        answers: ["O2", "OH2", "2HO", "H2O"],
        correct_answer: "H20"
      },
      {
        question: "Which of these is not an element?",
        answers: ["Manganese", "Tantalum", "Seaborgium", "Mercurium"],
        correct_answer: "Mercurium"
      },
      {
        question: "What's the atomic number of Cobalt?",
        answers: ["27", "18", "30", "57"],
        correct_answer: "27"
      }
    ],
    quiz_length: 3,
    quiz_points: 100,
    quiz_title: "Chemistry"
  },
  {
    quiz_description: "Rawr.",
    quiz_id: "2",
    quiz_questions: [
      {
        question: "Are birds descended from dinosaurs?",
        answers: ["Yes", "No", "It's unknown", `"Squawk"`],
        correct_answer: "Yes"
      },
      {
        question: "What does the T in T-Rex stand for?",
        answers: [
          "Tyranisauria",
          "Tyrantosaurus",
          "Tyrannosaurus",
          "Tyransformaurus"
        ],
        correct_answer: "Tyrannosaurus"
      },
      {
        question: "Did velociraptors have feathers?",
        answers: [
          "Yes",
          "Some kinds did",
          "No",
          "Dinosaurs didn't have feathers."
        ],
        correct_answer: "Yes"
      }
    ],
    quiz_length: 3,
    quiz_points: 100,
    quiz_title: "Dinosaurs"
  }
];

export default function seedQuizzes() {
  quizzes.map((quiz, i) => {
    db.collection("quizzes")
      .doc(`${i}`)
      .set({
        quiz_description: quiz["quiz_description"],
        quiz_id: quiz["quiz_id"],
        quiz_questions: quiz["quiz_questions"],
        quiz_length: quiz["quiz_length"],
        quiz_points: quiz["quiz_points"],
        quiz_title: quiz["quiz_title"]
      })
      .then(function() {
        console.log("Quizzes successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    return quiz;
  });
}
