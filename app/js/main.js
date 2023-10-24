let developers = [
  {
    id: 1,
    name: "Iddi Shabanm",
    profession: "web developer",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "John Odhiambo",
    profession: "web developer",
    age: 25,
    gender: "male",
  },
  {
    id: 3,
    name: "Evone Wavinya",
    profession: "web developer",
    age: 20,
    gender: "female",
  },
  {
    id: 4,
    name: "Randy Kimani",
    profession: "web developer",
    age: 21,
    gender: "male",
  },
];

//selecting the card component
let cards = "";

developers.map((dev) => {
  cards += `
    <ul class="card">
      <li> Name: <h1>${dev.name}</h1></li>
      <li>Profession: <h2>${dev.profession}</h2></li>
      <li>Age: <h3>${dev.age}</h3></li>
      <li>Gender: <h4>${dev.gender}</h4></li>
    </ul>
  `;
});

document.querySelector(".box").innerHTML = `
  <div class="container">
    ${cards}
  </div>
`;
