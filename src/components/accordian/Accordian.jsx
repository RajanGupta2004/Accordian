import "./accordian.css";
import React, { useState } from "react";
import data from "./data.jsx";

export const Accordian = () => {
  const [selected, setSelected] = useState("");

  const handleClick = (ItemSelected) => {
    setSelected(ItemSelected === selected ? null : ItemSelected);
  };
  return (
    <div className="container">
      <div className="wrapper">
        {data && data.length > 0 ? (
          <div>
            {data.map((dataitem) => {
              return (
                <div
                  className="QuestionAnswer"
                  key={dataitem.id}
                  onClick={() => handleClick(dataitem.id)}
                >
                  <div className="questiontitle">
                    <h2>{dataitem.title}</h2>
                    <span className="myspan">+</span>
                  </div>
                  <div className="content">
                    {selected === dataitem.id ? (
                      <div className="content">{dataitem.answer}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h2>No data found</h2>
        )}
      </div>
    </div>
  );
};
