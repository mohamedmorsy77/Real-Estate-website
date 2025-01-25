import React from "react";

function SectionHead({ head, desc }) {
  return (
    <div className={`col-12`}>
      <h3 className="fs-1 fw-bold">{head}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default SectionHead;
