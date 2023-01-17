import React from "react";
import styled from "styled-components";

interface Iprops {
  bg: string;
  br: string;
}
const Global_btn: React.FC<Iprops> = ({ bg, br }) => {
  return (
    <div>
      <Button bg={bg} br={br}>
        Get Started
      </Button>
    </div>
  );
};

export default Global_btn;

const Button = styled.div<{ bg: string; br: string }>`
  width: 150px;
  height: 60px;
  background-color: ${(props) => (props.bg ? "transparent" : "orange")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.br ? "1px solid black" : "0px")};

  :hover {
    cursor: pointer;
    transition: all 350ms;
  }
`;
