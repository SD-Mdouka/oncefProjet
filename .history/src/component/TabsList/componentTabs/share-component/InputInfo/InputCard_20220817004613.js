import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import cardReduit from "../../../../../API/dataCart.json";
import "./StyleInput.css";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="inputCard"
      options={cardReduit.cardReduit}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choisir" />}
    />
  );
}
