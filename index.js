const users = [
    {
      name: "Іван",
      age: 25,
      city: "Київ",
    },
    {
      name: "Марія",
      age: 30,
      city: "Львів",
    },
    {
      name: "Петро",
      age: 40,
      city: "Одеса",
    },
  ];

const compileTemplate = Handlebars.compile(document.querySelector("#user-template").innerHTML);

const userTemplateElement = document.querySelector("#output-template");

userTemplateElement.innerHTML = compileTemplate(users)