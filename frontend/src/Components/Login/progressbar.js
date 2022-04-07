import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";



 
const Progressbar = () => {

      const [bar, setbar] = useState(0);
      const [bar1, setbar1] = useState(0);
      const [bar2, setbar2] = useState(0);

      const [subtract, setsubtract] = useState(0);

      const [total, settotal] = useState(0);



let newno;
let toatls;
    //   const [toatls, settoatls] = useState(false);

// settotal(bar + bar1 + bar2);
//  const ValueLabelComponent = () =>{

//  }
let someall = bar + bar1 + bar2;

// settotal(bar+bar1+bar2)

useEffect(() => {
  settotal(bar + bar1 + bar2);
 

})


  if (total > 100) {
    //       toatls = total - 100;
    //       let a = 10;
    //  setbar(bar - toatls);
    // setbar(33);
    // setbar1(33);
    // setbar2(33);
    // setbar(total-20);
    // alert(total);
    // setbar(bar + 1);
   
  }



const  ValueLabelComponent = (props) => {
  const { children, value } = props;

{total < 100
  ? setbar(value)
  : // setbar()
    console.log("sum", bar + bar1 + bar2);
}
 

//   console.log("value", value);

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const ValueLabelComponent1 = (props) => {
  const { children, value } = props;

  setbar1(value);

//   console.log("value", value);

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};
const ValueLabelComponent2 = (props) => {
  const { children, value } = props;

  setbar2(value);

//   console.log("value", value);

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
};
ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};


ValueLabelComponent1.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};
ValueLabelComponent2.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};



  return (
    <div>
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent,
        }}
        aria-label="custom thumb label"
        defaultValue={20}
      />
      {bar}%
      {/* 
///////////////////////////////////////////////////////////////////////////////////// */}
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent1,
        }}
        aria-label="custom thumb label"
        defaultValue={20}
      />
      {/* {total > 100 ? <div>{newno}%</div> : <div>{bar1}%</div>} */}
      {bar1}% 
      {/* 
///////////////////////////////////////////////////////////////////////////////////// */}
      <Box sx={{ m: 3 }} />
      <Typography gutterBottom>Tooltip value label</Typography>
      <Slider
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent2,
        }}
        aria-label="custom thumb label"
        defaultValue={50}
      />
      {bar2}%
      <br />
      {/* {total > 100 ? <div>{setsubtract(200)}</div> : null} */}
      <h3>Total :</h3>
      <h2>{total}</h2>
      <h3>Subtraction of : {subtract}</h3>
      {/* {bar1} */}
    </div>
  );
};

export default Progressbar;
