const app = {
  appName: "Тест по программированию",
  questions: [
    {
      name: "Вопрос 1",
      answers: ["Ответ 1", "Ответ 2", "Ответ 3"],
      rightAnswers: [2]
    }, // приходят с сервера
    {
      name: "Вопрос 2",
      answers: ["Ответ 1", "Ответ 2", "Ответ 3"],
      rightAnswers: [1]
    }, // приходят с сервера
    {
      name: "Вопрос 3",
      answers: ["Ответ 1", "Ответ 2", "Ответ 3"],
      rightAnswers: [2]
    } // приходят с сервера
  ],

  createAnswer(answer) {
    const liAnswer = this.createLi();
    const label = this.new("label");
    const input = this.new("input");
    input.setAttribute("type", "checkbox");
    label.textContent = answer;
    liAnswer.appendChild(input);
    liAnswer.appendChild(label);
    return liAnswer;
  },

  createQuestion(question) {
    const li = this.createLi();
    const h3 = this.new("h3");
    const ul = this.new("ul");
    h3.textContent = question.name;
    question.answers.forEach(answer => {
      const htmlAnswer = this.createAnswer(answer);
      ul.appendChild(htmlAnswer);
    });
    li.appendChild(h3);
    li.appendChild(ul);
    return li;
  },

  render() {
    const body = document.body;
    const main = this.new("main");
    const h1 = this.new("h1");
    const ol = this.new("ol");
    const button = this.new("button");
    button.textContent = "Подтвердить";
    h1.textContent = this.appName;

    this.questions.forEach(question => {
      const htmlQuestion = this.createQuestion(question);
      ol.appendChild(htmlQuestion);
    });

    button.onclick = function() {
      //ol.children[1].children[0].textContent = "Вопрос 4";
      //ol.children[0].children[1].children[2].children[0].checked = true;
      //const uls = [...ol.querySelectorAll("ul")];
      //uls.forEach(elem => {
      //  elem.children[1].children[0].checked = true;
      //  elem.insertAdjacentHTML("afterend", "<div>PASS</div>");
      //});

      const uls = [...document.querySelectorAll("ul")];
      const checks = uls.map(elem => [
        ...elem.querySelectorAll(":checked+label")
      ]);
      app.questions.forEach((question, index) => {
        let label = checks[index];
        if (label) {
          let answer1 = label[0].innerHTML;
          if ( question.answers[question.rightAnswers[0]] == answer1 && label.length == 1) {
            uls[index].insertAdjacentHTML("beforeend", "<div>Correct</div>");
          }
        }
      });
    };

    main.appendChild(h1);
    main.appendChild(ol);
    main.appendChild(button);
    body.appendChild(main);
  },

  new(tag) {
    return document.createElement(tag);
  },

  createLi() {
    return this.new("li");
  }
};

app.render();

const button = document.createElement("button");
button.textContent = "Generator";
document.body.appendChild(button);
const main = document.querySelector(".main");

const JavaScript = ["Arrays", "Classes", "Closure"];

const createList = arr => {
  let list = arr.map(elem => `<li>${elem}</li>`).join("");
  return `<ul>${list}</ul>`;
};

button.onclick = () => {
  main.innerHTML += createList(JavaScript);
  main.lastElementChild.insertAdjacentHTML(
    "beforebegin",
    "<div>my hobbies</div>"
  );
  main.lastElementChild.insertAdjacentHTML(
    "afterend",
    "<div>Salary 1000$</div>"
  );
};
