import React from "react";

const CalcButton = (props) => {
  const { valueDegeri, onClickFunc, size = 4 } = props;
  // = (e) => { } fonksiyon olduğunu belirtmeye çalışmış sanırım
  return (
    <div className={`col-xs-${size}`}>
      <button
        value={valueDegeri}
        type="button"
        onClick={(e) => {
          onClickFunc(e);
        }}
        className="btn"
      >
        {valueDegeri}
      </button>
    </div>
  );
};

export default CalcButton;
