import styles from "./module/CalculatorDisplay.module.css";

const CalculatorDisplay = ({ CalValue }) => {
  return (
    <div className={styles.Display}>
      <input
        type="text"
        className={styles.inpDisplay}
        value={CalValue}
        readOnly
      />
    </div>
  );
};

export default CalculatorDisplay;
