import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
         HELLO THIS IS THE WORKOUT SESSION 
        </p>
        <img src="/sahil.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          impedit quasi sunt amet rerum accusamus odio eveniet unde?
        </p>
        <div className="bootcamps">
          <div>
            <h4>MONDAY - CHEST ,TRICEPS </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4> TUESDAY = BACK ,BICEPS</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>WEDNESDAY = SHOULDER ,LEG</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>REPEAT </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;