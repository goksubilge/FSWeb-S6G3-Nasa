import React from "react";

const DatePicker = (props) => {
  const { date, setDate } = props;

  const dateHandler = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={dateHandler}
      />
    </div>
  );
};

export default DatePicker;
