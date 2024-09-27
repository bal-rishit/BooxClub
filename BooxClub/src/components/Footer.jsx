import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
justify-content: space-around;
background-color: lightblue;
margin-top: 20px;
flex-wrap: wrap; // Allow children to wrap onto multiple lines

  ${mobile({
    flexDirection: "column",
    alignItems: "center",
  })}
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;

  ${mobile({
    textAlign: "center",
    marginBottom: "20px",
  })}
`;

const Desc = styled.p``;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  ${mobile`
    text-align: center;
  `}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;

  ${mobile`
  margin-right: 10px;
  
  display: inline-block;
`}
`;

const Center = styled.div`
  flex: 1;
  padding: 0px 20px;
  margin-top: 20px;

  ${mobile({
    textAlign: "center",
  })}
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    textAlign: "center",
    maxWidth: "100%", // Set max-width to prevent overflow
  })}
`;


const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Title>BooxClub.</Title>
        <Desc>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          </p>
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <a href="#">
              <FacebookIcon />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="#">
              <InstagramIcon />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="#">
              <LinkedInIcon />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a href="#">
              <XIcon />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          
          <ListItem>
            <a href="#">Home</a>
          </ListItem>
          <ListItem>
            <a href="#">Products</a>
          </ListItem>
          <ListItem>
            <a href="#">Courses</a>
          </ListItem>
          
          <ListItem>
            <a href="#">About us</a>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} /> 007 Abcde , New Delhi
          123456
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@
          BooxClub.com
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;

