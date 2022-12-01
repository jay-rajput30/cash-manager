import "../styles.css";

const ReturnChange = ({ returnNotes }) => {
  console.log("return change component", returnNotes);
  return (
    <div className="notes-wrapper">
      <section className="change-note-container">
        <div className="note-container">
          <span>count</span>
          <span>{returnNotes["2000"]}</span>
          <span>{returnNotes["500"]}</span>
          <span>{returnNotes["100"]}</span>
          <span>{returnNotes["20"]}</span>
          <span>{returnNotes["10"]}</span>
          <span>{returnNotes["5"]}</span>
          <span>{returnNotes["1"]}</span>
        </div>
        <div className="note-container">
          <span>Notes</span>
          <span>2000</span>
          <span>500</span>
          <span>100</span>
          <span>20</span>
          <span>10</span>
          <span>5</span>
          <span>1</span>
        </div>
      </section>
    </div>
  );
};

export default ReturnChange;
