import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import "react-calendar/dist/Calendar.css";
import CreateNotes from "./../component/CreateNotes";

const Create = (props) => {
  const [date, onChange] = useState(new Date());
  date.setHours(0, 0, 0);
  const [createEntry, onCreateEntry] = useState(false); //this is to switch between calendar page and create notes page

  const validateDate = () => {
    console.log("props.dates", props.dates);
    if (props.dates[date]) {
      alert("Entry to this date already exist either edit or delete it");
      return;
    }
    onCreateEntry(true);
  };

  if (createEntry) {
    return <CreateNotes {...props} onCreateEntry={onCreateEntry} date={date} />;
  }
  return (
    <div>
      <h1>Choose Date</h1>
      <Calendar onChange={onChange} value={date} />
      <button onClick={validateDate} className="push_button blue">
        Create Entry
      </button>
      <Link to="/" className="push_button red">
        Go Back
      </Link>
    </div>
  );
};
const mapStateToProps = ({ notes }) => {
  return { dates: notes };
};
export default connect(mapStateToProps)(Create);
