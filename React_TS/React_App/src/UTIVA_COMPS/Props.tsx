import React from "react";
import styled from "styled-components";
interface Iprops {
  pic: string;
  title: string;
  sub: string;
}
const Props: React.FC<Iprops> = ({ pic, title, sub }) => {
  return (
    <div>
      <Wrapper>
        <Card>
          <Img src={pic} />

          <h4>{title}</h4>
          <p>{sub}</p>
        </Card>
      </Wrapper>
    </div>
  );
};

export default Props;

const Wrapper = styled.div`
  width: 300px;
  height: 270px;
  /* background-color: purple; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Card = styled.div`
  width: 80%;
  height: 80%;
  /* background-color: orange; */

  h4 {
    color: blue;
  }

  p {
    color: #333232;
    font-weight: 500;
  }
`;

const Img = styled.img``;
