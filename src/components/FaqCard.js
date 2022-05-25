import React, { useState } from "react";
import "../scss/faqCard.scss";
import styled, { css } from "styled-components";
import womanIlustration from "../images/illustration-woman-online-desktop.svg";
import mobileWomanIlustration from "../images/illustration-woman-online-mobile.svg";
import boxIlustration from "../images/illustration-box-desktop.svg";
import bgPatternDesktop from "../images/bg-pattern-desktop.svg";
import bgPatternMobile from "../images/bg-pattern-mobile.svg";
import Question from "./Question";


const faqQuestions = [
  {
    id: 1,
    name: "How many team members can i invite?",
    answer: "25",
    isActive: false,
  },
  {
    id: 2,
    name: "What is the maximum file upload size?",
    answer: "15",
    isActive: false,
  },
  {
    id: 3,
    name: "How do i reset my password?",
    answer: "your send email reset request",
    isActive: false,
  },
  {
    id: 4,
    name: "How many team members can i invite?",
    answer: "10",
    isActive: false,
  },
  {
    id: 5,
    name: "Can i cancel my subsciption ?",
    answer: "click cancel subscription",
    isActive: false,
  },
  {
    id: 6,
    name: "Do you provide additional support?",
    answer: "yes",
    isActive: false,
  },
];

const CardContainer = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  width: 60rem;
  height: 32rem;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 1081px) {
    flex-direction: column;
    align-items: center;
    height: 80%;
    overflow: visible;
    margin-top: 107px;
    
    .illustration-section {
      width: 100%;
      
      overflow-y: visible;
      overflow-x: visible;
      .illustration-image{
        
        z-index: 1000; //makes it act sort of like a background
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        transform: translate(-50%, -45%);
        height: 240px;
        width: 240px;
        background-repeat: no-repeat; /* Do not repeat the image */
        background-image: url(${mobileWomanIlustration});
        
      } 

      &:before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        height:105px;
        width: 240px;
        background-repeat: no-repeat; /* Do not repeat the image */
        background-image: url(${bgPatternMobile});
      }
      

    }

    .questions-section{
    
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        text-align: center;
        padding-top: 0px;
        margin-top: calc(108px + 1.5rem);
      }

      .questions-container {
        max-height: 50vh;
        align-items: center;
      }
      
      .questions {
        width: 80%;
        
      }

    }
    
  }

`;


const IllustrationSection = styled.div`
  
  width: 50%;
  overflow: hidden;
`

const WomanImg = styled.div`

@media (min-width: 1081px) {
  position: relative;
  z-index: 2;
  background-image: url(${womanIlustration});
  height: 400px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  margin-left: -175px;
} 
`;



const BgPatternDesktop = styled.div`
  @media (min-width: 1081px) {

    position: absolute;
    top: -44%;
    z-index: 1;
    right: 58%;
    display: block;
    background-image: url(${bgPatternDesktop});
    width: 1000px;
    height: 800px; /* You must set a specified height */
    background-position: center; /* Center thse image */
    background-repeat: no-repeat; /* Do not repeat the image */
  }
`

const BoxIllustration = styled.div`
  @media (min-width: 1081px) {
    position: absolute;
    top: 40%;
    z-index: 3;
    left: 0;
    transform: translate(-50%, 6%);
    display: block;
    background-image: url(${boxIlustration});
    width: 90px;
    height: 180px; /* You must set a specified height */
    background-position: center; /* Center thse image */
    background-repeat: no-repeat; /* Do not repeat the image */
  }
`

const MainContent = styled.div`
  padding: 0 0;
  align-self: start;
  width: 40%;
`;


const QuestionsContainer = styled.div`
  overflow-y: auto;
  max-height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`





const MainTitle = styled.h1`
  letter-spacing: 0.2rem;
  font-size: 2rem;
  padding: 55px 0 30px;
`



const FaqCard = () => {
  const [answers, setAnswer] = useState(faqQuestions);

  function handleQuestionSelected(id) {


    console.log("event", id)
    let newFaqQuestions = answers.map((item) => {
      return item.id == id ? { ...item, isActive: ! item.isActive } : { ...item };
    });

    setAnswer(newFaqQuestions);
    console.log(newFaqQuestions)
  };

  return (
    <CardContainer className="card-container">
       
      <IllustrationSection className="illustration-section">
        <BoxIllustration className="box-illustration"></BoxIllustration>
        <WomanImg className="illustration-image" ></WomanImg>
        <BgPatternDesktop className='bg-pattern-desktop'></BgPatternDesktop>
       
      </IllustrationSection>

      <MainContent className='questions-section' >
        <MainTitle className="title">FAQ</MainTitle>
        <QuestionsContainer className='questions-container'>
        {answers.map((question, index) => {
          return (
            <Question
              key={index}
              {...question}
              handleIsActive={(id) => handleQuestionSelected(id)}
            ></Question>
          );
        })}
        </QuestionsContainer>
      </MainContent>

    </CardContainer>
  );
};

<style lang="scss"></style>;

export default FaqCard;
