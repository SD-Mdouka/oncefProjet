import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Box } from "@mui/material";
import Gare from "../../../../../API/dataGare.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./StyleInput.css";

export default function InputGare({ placeHolder }) {
  return (
    <div id="inputCard" className="z-1 -mt-1">
      <div className="flex justify-center w-[40px] h-[42px] items-center absolute z-[200] mt-1">
        <FaMapMarkerAlt
          className="transition-all duration-200"
          size="18px"
          color={"#bda7ef"}
        />
      </div>
      {/* <Autocomplete
        disablePortal
        inputFocused={false}
        className='flex relative'
        sx={{ width: 300 }}
        options={Gare.gare}
        renderOption={(props, option) => (
          <Box
            component='li'
            sx={{ '& > span': { ml: 5, flexShrink: 0 } }}
            {...props}
          >
            <FaMapMarkerAlt
              className='transition-all mr-5 duration-200'
              size='18px'
              color={'#bda7ef'}
            />
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField className='inputInside' {...params} label={placeHolder} />
        )}
      /> */}
    </div>
  );
}
