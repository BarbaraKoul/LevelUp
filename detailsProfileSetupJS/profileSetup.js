flatpickr("#date", {
        dateFormat: "Y-m-d",
        locale: "en",
        position:"below" 
        });

const questions = [
  "Which is your education level?",
  "What are your main career interests?",
  "Which of the following topics are you interested in?",
  "What kind of direction would you like to focus on/you focus on? ",
  "What are your future preferences?",
  "What type of support are you looking for"
];

const answers=[
    `<select id="education">
        <option>High School Diploma</option>
        <option>Bachelor's Degree</option>
        <option>Master's Degree</option>
        <option>PhD</option>
    </select>`,
    `<input type="text" placeholder="Write here"></input>`,
    `<input type="checkbox"></input>`,    
    ];

let i = 0;
const nextButton = document.querySelector(".nextButton");

nextButton.addEventListener("click", () => {
  if (i < questions.length) {
    document.querySelector("p").innerText = questions[i];
    document.querySelector(".answers").innerHTML=answers[i]
    i++;
  } else {
    document.querySelector("p").innerText = "Thank you!";
    nextButton.disabled = true;
  }
});
