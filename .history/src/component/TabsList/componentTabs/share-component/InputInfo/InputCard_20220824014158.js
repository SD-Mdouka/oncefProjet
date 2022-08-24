import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import cardReduit from "../../../../../API/dataCart.json";
import "./StyleInput.css";

export default function InputCard() {
  return (
    <div id="inputCard">
      {/* <Autocomplete
        disablePortal
        inputFocused={false}
        options={cardReduit.cardReduit}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField className="inputInside" {...params} label="Choisir" />
        )}
      /> */}
    </div>
  );
}
