import { useState } from "react";

function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Male_cheetah_facing_left_in_South_Africa.jpg/1200px-Male_cheetah_facing_left_in_South_Africa.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image:
        "https://abilenezoo.org/wp-content/uploads/2023/05/Cougar-20221027-Caleb-8-scaled-1.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/Standing_jaguar.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nagarhole_Kabini_Karnataka_India%2C_Leopard_September_2013.jpg/1200px-Nagarhole_Kabini_Karnataka_India%2C_Leopard_September_2013.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1200px-Irbis4.JPG",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
    },
  ];

  const [currentCats, setCats] = useState(cats);

  const catItems = currentCats.map((cat) => (
    <SingleCat
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ));

  const handleSortCats = () => {
    let newCats = [...currentCats];
    newCats.sort((a, b) => a.name.localeCompare(b.name));
    setCats(newCats);
  };

  const handleReverseCats = () => {
    let newCats = [...currentCats];
    newCats.reverse();
    setCats(newCats);
  };

  const handleFilterPanthera = () => {
    const filtered = cats.filter((cat) => cat.latinName.startsWith("Panthera"));
    setCats(filtered);
  };

  const handleReset = () => {
    setCats(cats);
  };

  return (
    <div className="BigCats">
      <ul style={{ listStyle: "none" }}>{catItems}</ul>
      <button onClick={handleSortCats}>Sort List</button>
      <button onClick={handleReverseCats}>Reverse List</button>
      <button onClick={handleFilterPanthera}>Show Panthera Family</button>
      <button onClick={handleReset}>Show All</button>
    </div>
  );
}

function SingleCat({ name, latinName, image }) {
  return (
    <li>
      <h3 style={{ textDecoration: "underline" }}>{name}</h3>
      <em>{latinName}</em>
      <div>
        <img src={image} alt={name} width={250} height={180} />
      </div>
    </li>
  );
}

export default BigCats;
