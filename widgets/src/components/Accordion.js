import React from "react";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment>
        <div className="title active">
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className="content active">{item.content}</div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
