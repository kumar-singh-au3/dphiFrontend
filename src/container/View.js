import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteNotes } from "../store/actions/deleteNotes";
import EditNotes from "./../component/EditNotes";
import "./view.css";
import List from "./../component/list";
import Filter from "./../component/filter";

const View = (props) => {
  const [editScreen, onEditScreenChange] = useState(""); //this is to switch between view page and edit page
  const [sort, onSortChange] = useState("newest");
  const [newDates, onDateChange] = useState(props.dates);
  const viewScreen = () => {
    onEditScreenChange("");
  };
  const { dates, years } = props;
  const onChangeFilterValue = (e) =>
    onDateChange(
      dates.filter(
        (val) =>
          (document.getElementById("year_filter").value ==
            new Date(val).getFullYear() ||
            document.getElementById("year_filter").value == "All") &&
          (document.getElementById("month_filter").value ==
            new Date(val).getMonth() ||
            document.getElementById("month_filter").value == "All")
      )
    );

  return (
    <>
      {editScreen ? (
        <EditNotes {...props} date={editScreen} viewScreen={viewScreen} />
      ) : (
        <div className="display">
          <h1>View</h1>
          <Filter
            sort={sort}
            years={years}
            onChangeFilterValue={onChangeFilterValue}
            onSortChange={onSortChange}
          />
          <List
            dates={newDates}
            sort={sort}
            onEditScreenChange={onEditScreenChange}
            deleteNotes={props.deleteNotes}
          />
          <Link to="/" className="push_button red">
            Go Back
          </Link>
        </div>
      )}
    </>
  );
};
const mapStateToProps = ({ notes }) => {
  return {
    dates: Object.keys(notes).length ? Object.keys(notes) : [],
    years: Object.keys(notes).length
      ? [
          ...new Set(
            Object.keys(notes).map((fullDate) => {
              return new Date(fullDate).getFullYear();
            })
          ),
        ]
      : [],
  };
};
const mapsDispatchToProps = {
  deleteNotes,
};
export default connect(mapStateToProps, mapsDispatchToProps)(View);
