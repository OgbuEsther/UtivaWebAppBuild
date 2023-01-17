import React from "react";
import styled from "styled-components";
import Props from "./Props";

import pic from "./Assests/intensive-learning.svg";
import pic2 from "./Assests/internship.svg";
import pic3 from "./Assests/business.svg";
const Comp2 = () => {
  return (
    <div>
      <Container>
        <Holder>
          <First_text>
            <h4>OUR STRATEGY</h4>
            <h1>
              The quickest and <br /> easiest way to get <br /> quality talents
            </h1>
          </First_text>
          <br />
          <br />
          <br />
          <Props_Holder>
            <Props
              pic={pic}
              title="Ahead of the digital Curve"
              sub="Build your team to be ahead of the disruption that will change the way work is done"
            />
            <Props
              pic={pic3}
              title="Future of Work"
              sub="Develop the knowledge and perspective for the future of work and human interaction."
            />
            <Props
              pic={pic2}
              title="Game Changing Approach"
              sub="Leverage on the best pedagogy to move from learning to transitioning into new roles."
            />
          </Props_Holder>
        </Holder>
      </Container>
    </div>
  );
};

export default Comp2;

const Props_Holder = styled.div`
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  /* height: 500px; */
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 80%;
  /* height: 480px; */
  /* background-color: royalblue; */
`;

const First_text = styled.div`
  h4 {
    font-weight: light;
    color: gray;
  }

  h1 {
    color: blue;
  }
`;
