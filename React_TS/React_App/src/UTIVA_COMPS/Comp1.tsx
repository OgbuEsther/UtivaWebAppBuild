import React from "react";
import styled from "styled-components";
import NewProps from "./NewProps";

const Comp1 = () => {
  return (
    <div>
      <Container>
        <Holder>
          <Text>
            <h4>OUR OFFERS</h4>
            <Div>Training Made Easy</Div>
          </Text>
          <Wrapper>
            <NewProps
              title="In-Class Training"
              sub="In-class training provides you with exclusive partner pricing in our regularly scheduled learning classes"
            />
            <NewProps
              title="Exclusive Team Training"
              sub="Exclusive team training delivers existing Utiva courses in private sessions for your team , through a range of formats"
            />
            <NewProps
              title="Custom Training"
              sub="Work with your organisation to build and develop custom content tailored to your training needs and business goals "
            />
          </Wrapper>
        </Holder>
      </Container>
    </div>
  );
};

export default Comp1;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #effdf8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Holder = styled.div`
  width: 90%;
  height: 500px;
  /* background-color: blue; */
`;

const Text = styled.div`
  h4 {
    font-weight: light;
    color: gray;
  }
`;

const Div = styled.h1`
  color: blue;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: rebeccapurple; */
`;
