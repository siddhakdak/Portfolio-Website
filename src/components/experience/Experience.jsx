import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>HTML</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>C++</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>JavaScript</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>TypeScript</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Tailwaind</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>React</h4>
              <small className="text-light">Experienced</small></div>
            </article>
      
          </div>
        </div>




        <div className="expereince__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>NodeJS</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>ExpressJS</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>MongoDB</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Stripe</h4>
              <small className="text-light">Experienced</small></div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div><h4>Firebase</h4>
              <small className="text-light">intermediate</small></div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
