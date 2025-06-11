import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy");

  const handleWinLotto = () => {
    setMood("ecstatic");
  };

  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";

    setMood(newMood);
  };

  return (
    <div className="MoodChanger">
      Current Mood: {mood}
      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
    </div>
  );
}

export default MoodChanger;
