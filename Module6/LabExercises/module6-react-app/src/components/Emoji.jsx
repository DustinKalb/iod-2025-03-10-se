import { useState } from "react";

function Emoji() {
  const [emoji, setEmoji] = useState("🙂");

  const handleChangeMood = () => {
    let newEmoji = "🙁";
    if (emoji === "🙁") newEmoji = "🙂";
    setEmoji(newEmoji);
  };

  return (
    <div className="Emoji">
      Current Mood: {emoji}
      <button onClick={handleChangeMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
