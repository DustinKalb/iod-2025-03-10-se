import React, { useState, useContext } from "react";

// Emoji options
const emojis = {
  happy: "😊",
  sad: "🙁",
};

// Create the context
export const EmojiContext = React.createContext({
  emoji: emojis.happy,
  toggleEmoji: () => {},
});

// Provider component
export function EmojiProvider(props) {
  const [emoji, setEmoji] = useState(emojis.happy);

  // Toggle between happy and sad
  const toggleEmoji = () => {
    setEmoji((prev) => (prev === emojis.happy ? emojis.sad : emojis.happy));
  };

  return (
    <EmojiContext.Provider value={{ emoji, toggleEmoji }}>
      {props.children}
    </EmojiContext.Provider>
  );
}

// Custom hook for easy access
export const useEmojiContext = () => useContext(EmojiContext);
