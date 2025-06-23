import { useState } from "react";
import { useData } from "../hooks/useData";
import { useEmojiContext } from "../context/EmojiContext";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

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
      <FormControl sx={{ mb: 2, width: "10em" }}>
        <InputLabel
          id="currency-select-label"
          sx={{
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          }}
        >
          Currency
        </InputLabel>
        <Select
          sx={{
            color: "white",
            ".MuiSvgIcon-root": { color: "white" },
            ".MuiSelect-icon": { color: "white" },
            ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          }}
          labelId="currency-select-label"
          id="currency-select"
          value={currency}
          label="Currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencies.map((curr) => (
            <MenuItem value={curr} key={curr}>
              {curr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <strong>Current Price: </strong>
        {price}
      </div>
      <br />
      <Button variant="contained" onClick={toggleEmoji}>
        Change Emoji
      </Button>
      <div>{emoji}</div>
    </div>
  );
}

export default BitcoinRates;
