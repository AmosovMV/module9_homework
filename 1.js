const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString,"text/xml");

const studentList = xmlDOM.querySelector("list");

const student1 = studentList.firstElementChild;

const student2 = studentList.lastElementChild;

const nameStudent1 = student1.querySelector("name");

const firstNameStudent1 = nameStudent1.querySelector("first");

const secondNameStudent1 = nameStudent1.querySelector("second");

const ageStudent1 = student1.querySelector("age");

const profStudent1 = student1.querySelector("prof");

const langStudent1 = nameStudent1.getAttribute("lang");

const nameStudent2 = student2.querySelector("name");

const firstNameStudent2 = nameStudent2.querySelector("first");

const secondNameStudent2 = nameStudent2.querySelector("second");

const ageStudent2 = student2.querySelector("age");

const profStudent2 = student2.querySelector("prof");

const langStudent2 = nameStudent2.getAttribute("lang");

const resultObj = {
  list: [
    {
     name: firstNameStudent1.textContent +" "+ secondNameStudent1.textContent,
     age: ageStudent1.textContent,
     prof: profStudent1.textContent,
     lang: langStudent1,
    },
    {     
     name: firstNameStudent2.textContent +" "+ secondNameStudent2.textContent,
     age: ageStudent2.textContent,
     prof: profStudent2.textContent,
     lang: langStudent2,
    },
  ]
};

console.log(resultObj);