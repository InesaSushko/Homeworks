/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/

class Html {
  constructor() {
    this.headings = ["Name", "Last Name", "Email"];
    this.contacts = [
      { name: "Inesa", lastName: "Sushko", email: "inesatat@gmail.com" },
      { name: "Alla", lastName: "Tsyupak", email: "alla@gmail.com" },
      { name: "Roman", lastName: "Pelyh", email: "roman@gmail.com" },
      { name: "Nikolay", lastName: "Sushko", email: "nikolay@gmail.com" },
      { name: "Kseniya", lastName: "Gurbanova", email: "kseniya@gmail.com" },
      { name: "Danil", lastName: "Zmuncila", email: "danil@gmail.com" },
      { name: "Tatyana", lastName: "Sushko", email: "tatyana@gmail.com" },
      { name: "Alina", lastName: "Pelyh", email: "alina@gmail.com" },
      { name: "Vika", lastName: "Loskot", email: "vika@gmail.com" },
      { name: "Grygoriy", lastName: "Kirichenko", email: "grygoriy@gmail.com" }
    ];
    this.footerIcons = [
      {
        href: "index.html",
        class: "tab active",
        icon: "glyphicon glyphicon-search",
        text: "Contacts"
      },
      {
        href: "keypad.html",
        class: "tab",
        icon: "glyphicon glyphicon-th",
        text: "Keypad"
      },
      {
        href: "edit-contact.html",
        class: "tab",
        icon: "glyphicon glyphicon-pencil",
        text: "Edit Contact"
      },
      {
        href: "user.html",
        class: "tab",
        icon: "glyphicon glyphicon-user",
        text: "User"
      },
      {
        href: "add-user.html",
        class: "tab",
        icon: "glyphicon glyphicon-plus",
        text: "Add user"
      },

    ];
  }

  header() {
    const header = document.createElement("header");
    const headInside = `<div class='container top-radius'><h2>Contacts</h2></div>`;
    header.className = "header";
    header.innerHTML = headInside;
    return header;
  }

  form() {
    const form = document.createElement("form");
    form.className = "form-inline search-form";
    const div = `<div class='form-group>`;
    const label = `<label class='sr-only' for= 'search'>Search</label>`;
    const input = `<input type="text" class="form-control" id= "search" placeholder="Search">`;
    form.innerHTML = div + label + input + `</div>`;
    return form;
  }

  createContacts(contact) {
    let tags =  ``;
    for(let param in contact) {
      console.log(contact[param]);
      tags += `<td>${contact[param]}</td>`
    }
    return tags
  }

  table() {
    const table = document.createElement("table");
    table.className = "table table-hover contacts";
    const heads = this.headings.map(header => `<th>${header}</th>`).join("");
    const people = this.contacts.map(contact => `<tr>` + this.createContacts(contact) + `</tr>`).join("");
    const thead = `<thead><tr>${heads}</tr></thead>`;
    const tbody = `<tbody>${people}</tbody>`;
    table.innerHTML = thead + tbody;
    return table;
  }

  footer() {
    const footer = document.createElement("footer");
    const icons = this.footerIcons.map( elem => {
      let a = `<a href = '${elem.href}' class='${elem.class}'>`;
      let span = `<span class = '${elem.icon}' aria-hidden='true'></span>`;
      let span2 = `<span class = "tab-text">${elem.text}</span></a>`;
      return a + span + span2;
    });
    const footerTop = `<div class="container bottom-radius"><nav class="main-nav">`;
    footer.className = "footer";
    footer.innerHTML = footerTop + icons + `</nav></div>`;
    return footer;
  }

  main() {
    const main = document.createElement("main");
    const div = document.createElement("div");
    div.className = "container";
    div.appendChild(this.form());
    div.appendChild(this.table());
    div.appendChild(this.footer());
    main.appendChild(div);
    document.body.appendChild(main);
  }
}

let phoneBook = new Html();
phoneBook.main();


