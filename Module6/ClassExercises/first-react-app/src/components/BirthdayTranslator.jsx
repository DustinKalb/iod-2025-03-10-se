import { useState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
]);

function BirthdayTranslator() {
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const handleChangeLanguage = (newlang) => {
    setCurrentLanguage(newlang);
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrases.get(currentLanguage)}! ({currentLanguage})
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>
      <button onClick={() => handleChangeLanguage("german")}>German</button>
      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
    </div>
  );
}

export default BirthdayTranslator;
