import React, { useState } from "react";
import styled from "styled-components";
import Log from "./Assests/utiva.svg";
import Global_btn from "./Global_btn";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import Persona from "./Assests/person.svg";
//
const Utiva_Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);

  const toggleShow = () => {
    setShow(!show);
  };
  const toggleShow2 = () => {
    setShow2(!show2);
  };
  const toggleShow3 = () => {
    setShow3(!show3);
  };

  return (
    <div>
      <Header>
        <Container>
          <Wrap>
            <Div1>
              <Logo src={Log} />
            </Div1>
            <Div2>
              <One onClick={toggleShow}>
                Schools
                <AiOutlineDown />
              </One>
              <Two onClick={toggleShow2}>
                Enterprise
                <AiOutlineDown />
              </Two>
              <Three onClick={toggleShow3}>
                Company
                <AiOutlineDown />
              </Three>
            </Div2>
            <Div3>
              <Global_btn bg="" br="" />
              <Global_btn bg="w" br="w" />
            </Div3>
          </Wrap>
        </Container>
        {show ? (
          <DropDown>
            <DropDownWrapper>
              <HeaderDiv>
                <PeopleIcon>
                  <Ima src={Persona} />
                </PeopleIcon>
                <h3>Utiva For Individual</h3>
              </HeaderDiv>
              <BodyDiv>
                <Main1>
                  <h2>Schools</h2>
                  <M_One>
                    <Sub1>
                      <Nav>
                        <p>Data</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Design</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Product</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Cloud computing</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Blockchain Developer</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Programming</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Product Marketing</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Business Analysis</p>
                        <AiOutlineArrowRight />
                      </Nav>
                    </Sub1>
                  </M_One>
                </Main1>
                <Main2>
                  <h3>Top Programs</h3>
                  <M_Two>
                    <p>Data Accelerator</p>
                    <p>Data Incubator</p>
                    <p>Design</p>
                    <p>Product Incubator</p>
                    <p>Product Accelerator</p>
                  </M_Two>
                </Main2>
                <Main3>
                  <h3>Why learn at Utiva?</h3>
                  <M_Three>
                    <p>
                      We offer learning programs that are designed by industry
                      knowledge experts and co-created with leading companies.
                    </p>
                  </M_Three>
                </Main3>
              </BodyDiv>
            </DropDownWrapper>
          </DropDown>
        ) : null}
        {show2 ? (
          <DropDown>
            <DropDownWrapper>
              <HeaderDiv>
                <PeopleIcon>
                  <Ima src={Persona} />
                </PeopleIcon>
                <h3>Utiva for Enterprise</h3>
              </HeaderDiv>
              <BodyDiv>
                <Main1>
                  <h2>Grow with Utiva</h2>
                  <M_One>
                    <Sub1>
                      <Nav>
                        <p>Business</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Utiva Hire</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Utiva Impact</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Utiva Kids</p>
                        <AiOutlineArrowRight />
                      </Nav>
                    </Sub1>
                  </M_One>
                </Main1>
                <Main2>
                  <h3>Top Programs</h3>
                  <M_Two>
                    <p>Data Accelerator</p>
                    <p>Data Incubator</p>
                    <p>Design</p>
                    <p>Product Incubator</p>
                    <p>Product Accelerator</p>
                  </M_Two>
                </Main2>
                <Main3>
                  <h3>Why learn at Utiva?</h3>
                  <M_Three>
                    <p>
                      We offer learning programs that are designed by industry
                      knowledge experts and co-created with leading companies.
                    </p>
                  </M_Three>
                </Main3>
              </BodyDiv>
            </DropDownWrapper>
          </DropDown>
        ) : null}
        {show3 ? (
          <DropDown>
            <DropDownWrapper>
              <HeaderDiv>
                <PeopleIcon>
                  <Ima src={Persona} />
                </PeopleIcon>
                <h3>Utiva For Individual</h3>
              </HeaderDiv>
              <BodyDiv>
                <Main1>
                  <h2>Schools</h2>
                  <M_One>
                    <Sub1>
                      <Nav>
                        <p>Data</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Design</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Product</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Cloud computing</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Blockchain Developer</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Programming</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Product Marketing</p>
                        <AiOutlineArrowRight />
                      </Nav>
                      <Nav>
                        <p>Business Analysis</p>
                        <AiOutlineArrowRight />
                      </Nav>
                    </Sub1>
                  </M_One>
                </Main1>
                <Main2>
                  <h3>Top Programs</h3>
                  <M_Two>
                    <p>Data Accelerator</p>
                    <p>Data Incubator</p>
                    <p>Design</p>
                    <p>Product Incubator</p>
                    <p>Product Accelerator</p>
                  </M_Two>
                </Main2>
                <Main3>
                  <h3>Why learn at Utiva?</h3>
                  <M_Three>
                    <p>
                      We offer learning programs that are designed by industry
                      knowledge experts and co-created with leading companies.
                    </p>
                  </M_Three>
                </Main3>
              </BodyDiv>
            </DropDownWrapper>
          </DropDown>
        ) : null}
      </Header>
    </div>
  );
};

export default Utiva_Header;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  /* background-color: burlywood; */
`;

const Main1 = styled.div`
  width: 33%;
  height: 100%;
`;

const M_One = styled.div`
  width: 80%;

  height: 75%;
  display: flex;
`;

const Sub1 = styled.div`
  width: 100%;
  height: 100%;
`;

const Main2 = styled.div`
  width: 28%;
  height: 100%;
  /* background-color: blue; */
`;

const M_Two = styled.div``;

const Main3 = styled.div`
  width: 37%;
  height: 100%;
  /* background-color: blueviolet; */
`;

const M_Three = styled.div``;

const Ima = styled.img`
  margin-top: 15px;
`;
const DropDownWrapper = styled.div`
  width: 90%;
  /* background-color: aqua; */
  height: 100%;
  margin-top: 50px;
`;

const HeaderDiv = styled.div`
  display: flex;
  width: 215px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;

  h3 {
    color: blue;
  }
`;

const PeopleIcon = styled.div``;

const BodyDiv = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  /* background-color: cadetblue; */
`;

const DropDown = styled.div`
  position: absolute;
  width: 1000px;
  height: 600px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: 1px solid black;
  top: 90%;
  left: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 6;
  width: 100%;
  height: 100px;
  background-color: #f8f9f8;
  /* margin-top: 30px; */
  display: flex;
  align-items: center;
  justify-content: center;

  /* position: fixed; */
`;

const Wrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 0;
`;
const Logo = styled.img`
  margin-left: 10px;
`;

const Div1 = styled.div``;

const Div2 = styled.div`
  display: flex;
  width: 200px;
`;

const One = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  display: flex;
  font-size: 15px;
  /* font-weight: bold; */

  color: black;

  :hover {
    cursor: pointer;
    color: darkgray;
  }
`;

const Two = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  color: black;
  font-size: 15px;
  /* font-weight: bold; */
  display: flex;
  :hover {
    cursor: pointer;
    color: darkgray;
  }
`;

const Three = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  color: black;
  display: flex;
  font-size: 15px;
  :hover {
    cursor: pointer;
    color: darkgray;
  }
`;

const Div3 = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 20px;
  justify-content: space-between;

  width: 350px;
`;
