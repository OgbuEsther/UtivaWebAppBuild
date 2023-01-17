import React from "react";
import styled from "styled-components";

interface Idata {
  title: string;
  subTitle: string;
  img: any;
}
const CardProps: React.FC<Idata> = ({ title, subTitle, img }) => {
  return (
    <div>
      <Container>
        <Holder>
          <One>
            <Img src={img} />
          </One>
          <Two>
            <Write>{title}</Write>
            <Write2>
              <HoldText>{subTitle}</HoldText>
            </Write2>
          </Two>
        </Holder>
      </Container>
    </div>
  );
};

export default CardProps;

const Container = styled.div``;

const Holder = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin-left: 20px;

  /* background-color: rebeccapurple; */
`;

const One = styled.div`
  width: 100%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Two = styled.div`
  width: 100%;
  height: 250px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: white;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Write = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: bold;
  color: lightgreen;
  text-align: center;
  font-weight: bold;
`;

const Write2 = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HoldText = styled.div`
  width: 80%;
  /* background-color: indigo; */
`;
