import styles from "./module/ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const CalculatorKey = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.BtnContainer}>
      {CalculatorKey.map((buttonNames) => (
        <button
          key={buttonNames}
          className={styles.button}
          onClick={() => onButtonClick(buttonNames)}
        >
          {buttonNames}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
