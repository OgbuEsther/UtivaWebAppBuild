import React from "react";
import styled from "styled-components";
import enu from "./Assests/enugu.webp";
import hero from "./Assests/Hero.webp";
import roy from "./Assests/royalbank.webp";
import face from "./Assests/facebook.webp";
import glo from "./Assests/globalfunds.webp";
import ama from "./Assests/amazon.webp";
const Hero = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Text_hold>
            {/* <h1></h1> */}
            <Div>
              Hire the Top 3% of <br /> Digital Talents
            </Div>
            <p>
              We have the largest network of elite tech <br /> talents , ready
              to take up the challenge when <br /> you need them
            </p>
            <ButtonHold>
              <Icon />
              <Button>Get started</Button>
            </ButtonHold>

            <Div2>TRUSTED BY</Div2>
            <Img_Hold>
              <One src={enu} />
              <Two src={roy} />
              <Three src={face} />
              <Four src={glo} />
              <Five src={ama} />
            </Img_Hold>
          </Text_hold>

          <Img>
            <Hold src={hero} />
          </Img>
        </Holder>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 550px;
  background-color: #f8f9f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 85%;
  height: 550px;
  /* background-color: aliceblue; */
  margin-top: 50px;
  display: flex;
`;

const Text_hold = styled.div`
  width: 60%;
  height: 450px;
  /* background-color: red; */

  h1 {
    color: gold;
  }

  p {
    font-size: 18px;
    line-height: 30px;
    font-weight: 500;
  }
`;

const Img = styled.div`
  width: 40%;
  height: 450px;
  /* background-color: blue; */
`;

const Hold = styled.img`
  width: 100%;
  height: 470px;
  object-fit: contain;
`;

const Div = styled.div`
  color: blue;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const ButtonHold = styled.div``;

const Button = styled.div`
  width: 150px;
  height: 50px;
  background-color: orange;
  color: white;
  font-weight: bold;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Icon = styled.div`
  width: 10px;
  margin-top: 5px;
  font-size: 12px;
  margin-left: 50px;
`;

const Div2 = styled.div`
  color: blue;
  margin-bottom: 30px;
  font-weight: 500;
`;

const Img_Hold = styled.div`
  width: 400px;
  height: 70px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;

const One = styled.img`
  width: 70px;
  height: 30px;
`;
const Two = styled.img`
  width: 70px;
  height: 30px;
`;
const Three = styled.img`
  width: 70px;
  height: 30px;
`;
const Four = styled.img`
  width: 70px;
  height: 30px;
`;
const Five = styled.img`
  width: 70px;
  height: 30px;
`;
