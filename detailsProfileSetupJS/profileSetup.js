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
    `<div class="check">
    <input type="checkbox" class="choice">Technology</input>
     <input type="checkbox" class="choice">Arts</input>
     <input type="checkbox" class="choice">Sports</input>
     <input type="checkbox" class="choice">Other:</input>
     </div>`,
     `<input type="text" placeholder="Write here"></input>`,
     `<input type="text" placeholder="Write here"></input>`,
     `<div class="check">
    <input type="checkbox" class="choice">Mentoring</input>
     <input type="checkbox" class="choice">Internships</input>
     <input type="checkbox" class="choice">Skill improvement</input>
     <input type="checkbox" class="choice">Other:</input>
     </div>`
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
    document.querySelector(".answers").innerHTML=``;
    nextButton.disabled = true;
  }
});
