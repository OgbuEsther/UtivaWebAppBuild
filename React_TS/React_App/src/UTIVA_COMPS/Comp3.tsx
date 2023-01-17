import React from "react";
import styled from "styled-components";

import pic1 from "./Assests/image1.webp";
import pic2 from "./Assests/image2.webp";
import pic3 from "./Assests/image3.webp";
import pic4 from "./Assests/image4.webp";

const Comp3 = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Wrap>
            <Text_Hold>
              <h3>Driving Impact in EdTech</h3>
              <p>
                We are committed to driving another level of impact by creating
                new models to solve the wicked problem of unemployment and
                education for people of colour, Africans and Minorities.
              </p>
            </Text_Hold>
          </Wrap>
          <br />
          <br />
          <br />
          <br />
          <Grid_Wrap>
            <One>
              <Img src={pic1} />
            </One>
            <Two>
              <Img src={pic2} />
            </Two>
            <Three>
              <Img src={pic3} />
            </Three>
            <Four>
              <Img src={pic4} />
            </Four>
          </Grid_Wrap>
        </Holder>
      </Container>
    </div>
  );
};

export default Comp3;

const Container = styled.div`
  width: 100%;
  /* height: 400px; */
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div``;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text_Hold = styled.div`
  width: 60%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    text-align: center;
    color: blue;
  }
  p {
    text-align: center;
  }
`;

const Grid_Wrap = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const One = styled.div`
  background-color: burlywood;
`;

const Two = styled.div`
  background-color: yellowgreen;
`;

const Three = styled.div`
  background-color: turquoise;
`;

const Four = styled.div`
  background-color: teal;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
