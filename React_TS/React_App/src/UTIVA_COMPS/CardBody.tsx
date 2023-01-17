import React from "react";
import styled from "styled-components";
import CardProps from "./CardProps";

import pic1 from "./Assests/goal1.webp";
import pic2 from "./Assests/goal2.webp";
import pic3 from "./Assests/goal3.webp";
import pic4 from "./Assests/goal4.webp";
import pic5 from "./Assests/goal5.webp";

const CardBody = () => {
  return (
    <div>
      <Container>
        <Text>
          We are committed to these 5 <br /> major goals
        </Text>
        <Wrapper>
          <Holder>
            <CardProps
              img={pic1}
              title="Moving Women Into tech"
              subTitle=" Our goal is to support 50,000 women between 2022 and 2025. Working with our direct partners to help women, single mothers and girls move into tech."
            />
            <CardProps
              img={pic2}
              title="Access To Skill Training For People With Disabilities"
              subTitle="Working directly with our partners, we want to leverage our platform, knowledge and access to help 20,000 people with a disability move into tech."
            />
            <CardProps
              img={pic3}
              title="Pro-poor growth

"
              subTitle="Utiva wants to arm 200,000 poor, marginalized, underserved and minority group members with the requisite skills to help them succeed in a digital age, so in that way we can improve livelihoods and stimulate continent-wide economic growth."
            />
          </Holder>
        </Wrapper>
        <Wrapper>
          <Holder>
            <CardProps
              img={pic4}
              title="Investing in Web3"
              subTitle="We want to pioneer education in core areas of Web3 technology. Between 2022 and 2025, we want over 100,000 people to learn web3 concepts and fundamental knowledge for free."
            />
            <CardProps
              img={pic5}
              title="Access to Opportunities"
              subTitle="Through a partnership-led approach, we want to facilitate access to employment opportunities for women, PWDs’ potential victims of human trafficking and vulnerable households, by presenting them opportunities to practice their skills through projects, building their knowledge, improving their technical and enterprise skills."
            />
          </Holder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CardBody;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* height: 450px; */
  margin-top: 50px;
`;

const Holder = styled.div`
  display: flex;
  width: 80%;
  height: 450px;
`;

const Container = styled.div`
  background-color: #050794;
`;

const Text = styled.h1`
  color: white;
  text-align: center;
  padding-top: 100px;
`;
