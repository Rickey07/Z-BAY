import React from "react";
import {
  Step,
  Stepper,
  StepLabel,
  StepButton,
  StepConnector,
  Chip,
  ButtonBase,
  useTheme,
} from "@mui/material";
import { useState } from "react";
const JourneyStepper = ({steps,getActiveStep}) => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  //Methods

  const handleStepClick = (index) => {
    setActiveStep(index);
    getActiveStep(steps[index])
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
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