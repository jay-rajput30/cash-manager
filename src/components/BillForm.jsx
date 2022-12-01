import { useState } from "react";
import "../styles.css";

const BillForm = ({
  returnNotes,
  setReturnNotes,
  returnAmount,
  setReturnAmount
}) => {
  const [cashToReturn, setCashToReturn] = useState({
    billAmount: 0,
    cashRec: 0
  });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    setCashToReturn({ ...cashToReturn, [name]: +value });
  };
  const btnClickHandler = () => {
    if (cashToReturn.cashRec < cashToReturn.billAmount) {
      alert(
        "please collect more cash, bill amount is higher than cash received."
      );
    }
    setReturnAmount(cashToReturn.cashRec - cashToReturn.billAmount);
    calculateChange();
  };

  const calculateChange = () => {
    let currencies = [2000, 500, 100, 20, 10, 5, 1];
    let returnChange = {
      "2000": 0,
      "500": 0,
      "100": 0,
      "20": 0,
      "10": 0,
      "5": 0,
      "1": 0
    };
    let temp = returnAmount;

    for (let i = 0; i < currencies.length; i++) {
      if (temp - currencies[i] >= 0) {
        returnChange[`${currencies[i]}`] += 1;
        temp = temp - currencies[i];
        i = i - 1;
      } else if (temp - currencies[i] < 0) {
        continue;
      }
    }
    console.log({ returnChange });
    setReturnNotes(returnChange);
  };

  return (
    <form className="bill-form" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="bill-amount">bill amount</label>
      <input
        type="number"
        id="bill-amount"
        name="billAmount"
        onChange={inputChangeHandler}
      />
      <label htmlFor="cash-received">cash received</label>
      <input
        type="number"
        id="cash-received"
        name="cashRec"
        onChange={inputChangeHandler}
      />
      <button type="submit" onClick={btnClickHandler}>
        check
      </button>
    </form>
  );
};

export default BillForm;

// logic for calculating change

// let currencies = [2000, 500, 100, 20, 10, 5, 1]
// let changeAmount = 1
// let returnChange = { 2000: 0, 500: 0, 100: 0, 20: 0, 10: 0, 5: 0, 1: 0 }
// let temp = changeAmount;
// for (let i = 0; i < currencies.length; i++) {
//   if (temp - currencies[i] >= 0) {
//     returnChange[`${currencies[i]}`] += 1;
//     temp = temp - currencies[i];
//     i = i - 1;
//   } else if (temp - currencies[i] < 0) { continue }
// }

// console.log({ returnChange })
