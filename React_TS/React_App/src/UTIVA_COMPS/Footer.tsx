import React from "react";
import styled from "styled-components";
import logo from "./Assests/utiva.svg";

import { BsFacebook, BsLinkedin, BsYoutube, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <FirstDiv>
            <Logo src={logo} />
            <p>
              We are the leading TECH EDUCATION company with students from over
              30 countries and a leading UK accreditation to deliver the best
              digital workforce training.
            </p>
            <Icons>
              <BsFacebook />
              <AiFillInstagram />
              <BsLinkedin />
              <BsYoutube />
              <BsTwitter />
            </Icons>
          </FirstDiv>
          <SecondDiv>
            <Box>
              <p>Top Courses &copy;</p>
              <Nav>Data Accelator</Nav>
              <Nav>Data Incubator</Nav>
              <Nav>Data Science Fellowship</Nav>
              <Nav>Product Incubator</Nav>
              <Nav>Product Accelator</Nav>
              <Nav>UI/UX Design</Nav>
            </Box>
            <Box>
              {" "}
              <p>Grow with Utiva</p>
              <Nav>Individual</Nav>
              <Nav>Business</Nav>
              <Nav>Impact</Nav>
              <Nav>Utiva Kids</Nav>
              <Nav>The Nucleus</Nav>
              <Nav>Ubuntu</Nav>
              <Nav>Utiva Hire</Nav>
            </Box>
            <Box>
              <p>Schools</p>
              <Nav>Data School</Nav>
              <Nav>Design School</Nav>
              <Nav>Product School</Nav>
              <Nav>Cloud Computing School</Nav>
              <Nav>Blockchain Dev. School</Nav>
              <Nav>Marketing School</Nav>
            </Box>
            <Box>
              <p>Company</p>
              <Nav>About us</Nav>
              <Nav>Affiliate</Nav>
              <Nav>Our Partners</Nav>
              <Nav>Become a Trainer</Nav>
              <Nav>Alumni</Nav>
              <Nav>Careers</Nav>
              <Nav>Business Network</Nav>
              <Nav>Podcast</Nav>
            </Box>
            <Box>
              <p>Resources</p>
              <Nav>Blog</Nav>
              <Nav>FAQs</Nav>
              <Nav>Events</Nav>
              <Nav>Success Stories</Nav>
              <Nav>Masterclass</Nav>
              <Nav>Consulting Practice</Nav>
              <Nav>Scholarship</Nav>
            </Box>
            <Box>
              <p>Policies</p>
              <Nav>Terms and Conditions</Nav>
              <Nav>Refund Policy</Nav>
              <Nav>Privacy Policy</Nav>
            </Box>
            <Box>
              <p>Contact</p>
              <Nav>info@utiva.io</Nav>
              <Nav>+2348035152982</Nav>
              <Nav>+447495380293</Nav>
              <Nav>01 229 7777</Nav>
            </Box>
          </SecondDiv>
          <br />
          <br />
          <br />
          <br />
          <CopyRg>
            <span>© 2022 Utiva. All right reserved.</span>
          </CopyRg>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;

const CopyRg = styled.div`
  width: 100%;
  font-size: 15px;
  color: blue;
  margin-top: 50pz;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  /* background-color: green; */
  p {
    font-weight: bold;
  }
`;
const Nav = styled.div`
  padding-bottom: 10px;
  color: black;
  transition: all 350ms;
  font-size: 12px;

  :hover {
    color: orange;
    cursor: pointer;
  }
`;

const Container = styled.div`
  /* height: 400px; */
  width: 100%;
  background-color: #f0f5f7;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  padding: 30px;
  flex-wrap: wrap;
`;

const FirstDiv = styled.div`
  width: 300px;
  /* background-color: red; */
  /* height: 250px; */
  margin-top: 50px;
  margin-left: 80px;

  p {
    color: black;
    font-size: 15px;
    margin-top: 20px;
  }
`;

const Logo = styled.img``;

const Icons = styled.div`
  width: 150px;
  justify-content: space-between;
  display: flex;
  font-size: 20px;
  margin-top: 30px;
  color: #050794;
`;

const SecondDiv = styled.div`
  width: 60%;
  /* background-color: blue; */
  /* height: 250px; */
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
