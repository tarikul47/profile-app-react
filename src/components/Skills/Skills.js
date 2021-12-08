import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Skill from "./Skill";

const Skills = () => {
  const imgStyle = {
    width: "66%",
  };

  const skillOne = {
      title: 'Interior Design',
      descriotion: `I create unique living spaces. Morbi
      nec lacus a eros auctor faucibus. The world is constantly changing,
      progress does not stand still and if the person has reached a certain
      level, they want to live more comfortably and beautifully. Surround
      yourself with things, objects and the environment that brings pleasure is
      the normal desire of a modern man.`
  }
  const skillTwo = {
      title: 'Illustration',
      descriotion: `An illustrator is a human
      artist who creates an image from a written text or story. They
      create thematic pictures in books and magazines. Beautiful
      illustrations on sites is also their work.`
  }


  return (
    <>
      <SectionTitle title ='MY SKILLS'></SectionTitle>
      <section
        className="mbr-section article content12 cid-qweRCEOYwi"
        id="content12-7"
        data-rv-view="769"
      >
        <div className="container">
          <div className="media-container-row">
            <div className="mbr-text counter-container col-12 col-md-8 mbr-fonts-style display-7">
              <ul>
                <Skill skill={skillOne}></Skill>
                <Skill skill={skillTwo}></Skill>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="cid-qweSTPaVJI" id="image1-b" data-rv-view="770">
        <figure className="mbr-figure container">
          <div className="image-block" style={imgStyle}>
            <img
              src="assets/images/elsa-noblet-341687-1200x800.jpg"
              width="1400"
              alt="Mobirise"
              title=""
              media-simple="true"
            />
          </div>
        </figure>
      </section>
      <section className="cid-qweSOmDZTu" id="content13-a" data-rv-view="772">
        <div className="container">
          <div className="media-container-row" style={imgStyle}>
            <div className="img-item item1" style={{ width: "117%" }}>
              <img
                src="assets/images/toa-heftiba-205003-1200x800.jpg"
                alt=""
                title=""
                media-simple="true"
              />
            </div>
            <div className="img-item">
              <img
                src="assets/images/patrick-perkins-340017-1200x911.jpg"
                alt=""
                title=""
                media-simple="true"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
