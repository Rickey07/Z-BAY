import React from "react";
import {
  Step,
  Stepper,
  Chip,
  ButtonBase,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
const JourneyStepper = ({steps,getActiveStep}) => {
  const [activeStep, setActiveStep] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"))

  //Methods

  const handleStepClick = (index) => {
    if(cart.length) {
      setActiveStep(index);
      getActiveStep(steps[index])
    } else {
      toast.warn("Please Add Products in cart First") 
    }
 
  };


  return (
    <div >
      <Stepper activeStep={activeStep} orientation={mobile?"vertical":"horizontal"}>
        {steps.map((step, index) => {
          const stepCount = index + 1;
          return (
            <Step key={step}>
              <ButtonBase
                onClick={() => handleStepClick(index)}
                children={
                  <Chip
                    sx={{
                      p: 1,
                      cursor: "pointer",
                      backgroundColor:
                        activeStep === index
                          ? theme.palette.primary.main
                          : "rgb(252, 233, 236)",
                      color:"#fff"
                    }}
                    label={`${stepCount}.${step}`}
                  ></Chip>
                }
              />
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default JourneyStepper;