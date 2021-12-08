import React from "react";

const SectionTitle = (props) => {
  return (
    <section
      className="mbr-section content4 cid-qweSxLMTHM"
      id="content4-8"
      data-rv-view="767"
    >
      <div className="container">
        <div className="media-container-row">
          <div className="title col-12 col-md-8">
            <h2 className="align-center pb-3 mbr-fonts-style display-2">
              {props.title}:
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
