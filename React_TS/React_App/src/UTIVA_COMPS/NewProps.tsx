import React from "react";
import styled from "styled-components";
interface Iprops {
  title: string;
  sub: string;
}
const NewProps: React.FC<Iprops> = ({ title, sub }) => {
  return (
    <div>
      <Wrapper>
        <Card>
          <h4>{title}</h4>
          <p>{sub}</p>
        </Card>
      </Wrapper>
    </div>
  );
};

export default NewProps;

const Wrapper = styled.div`
  width: 350px;
  height: 350px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
`;

const Card = styled.div`
  width: 95%;
  height: 95%;
  /* background-color: orange; */

  h4 {
    color: blue;
  }

  p {
    color: #333232;
    font-weight: 400;
    font-size: 15px;
  }
`;
