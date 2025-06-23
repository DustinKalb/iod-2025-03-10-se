import { useState } from "react";
import { useData } from "../hooks/useData";
import { useEmojiContext } from "../context/EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const data = useData(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=" +
      currency
  );
  let price = "Loading...";
  if (data && data.bitcoin) {
    price = data ? data.bitcoin[currency.toLowerCase()] : "not found";
  }

  // Use the emoji context
  const { emoji, toggleEmoji } = useEmojiContext();

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>Current Price: </strong>
        {price}
      </div>
      <button onClick={toggleEmoji}>Change Emoji</button>
      <span>{emoji}</span>
    </div>
  );
}

export default BitcoinRates;
