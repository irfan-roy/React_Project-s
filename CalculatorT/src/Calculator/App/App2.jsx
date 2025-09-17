import React, { useState } from "react";
import ContainerC from "../Components/ContainerC";
import CalculatorDisplay from "../Components/CalculatorDisplay";
import ButtonContainer from "../Components/ButtonContainer";

function App2() {
  
 const [CalculatorValue, SetCalculatorValue] = useState("")

  const OnClickButton = (buttonText) => {
    if(buttonText === "c") {
      SetCalculatorValue("")
    } else if (buttonText === "=") {
      const Result = eval(CalculatorValue);
      SetCalculatorValue(Result);
    } else {
      const AllValue = CalculatorValue + buttonText; 
      SetCalculatorValue(AllValue);
    }
  }
  

  return (
    <ContainerC>
    <CalculatorDisplay CalValue={CalculatorValue} ></CalculatorDisplay>
    <ButtonContainer onButtonClick={OnClickButton}></ButtonContainer>
    </ContainerC>
  );
}
export default App2;
