import { useState } from "react";
import BillForm from "./BillForm";
import ReturnChange from "./ReturnChange";

const Main = ({ returnNotes, setReturnNotes }) => {
  const [returnAmount, setReturnAmount] = useState(0);

  return (
    <main>
      <BillForm
        returnNotes={returnNotes}
        setReturnNotes={setReturnNotes}
        returnAmount={returnAmount}
        setReturnAmount={setReturnAmount}
      />
      <ReturnChange returnNotes={returnNotes} />
    </main>
  );
};

export default Main;
