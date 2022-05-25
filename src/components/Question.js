import React from "react";
import styled from "styled-components";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import arrowDown from "../images/icon-arrow-down.svg";



const QuestionContainer = styled.div`
position: relative;

&:after {
    content: "";
    display: block;
    background-color: lightBlue;
    margin: 15px 0px;
    height: 1.3px;
}


`;



const QuestionParagraph = styled.p`
  color: black;
  font-weight: ${(props) => (props.questionIsActive ? 700 : 400)};

  margin-top: ${(props) => (props.id === 1 ? "0px" : "15px")};
  display:flex;
  justify-content: space-between;
`;

const ToggleArrow = styled.div`
  background-image: url(${arrowDown});
  display: inline-block;
  height: 8px;
  width: 13px;
  transform: rotate(${props => props.questionIsActive ? '180deg' : '0deg'});
  background-repeat: no-repeat; /* Do not repeat the image */
  background-position: center; /* Center the image */
  background-size: cover;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

const AnswerParagraph = styled.p`
color: black;
margin: 10px 0;

`;

const Question = (props) => {
  const { id, name, answer, isActive, handleIsActive } = props;

  const questionClicked = (id) => {
    handleIsActive(id);
  };

  return (
    <QuestionContainer className="questions">

      <QuestionParagraph
        id={id}
        questionIsActive={isActive}
        onClick={() => questionClicked(id)}
      >
        {name}
        <ToggleArrow questionIsActive={isActive} />
      </QuestionParagraph>

      {isActive && <AnswerParagraph>{answer}</AnswerParagraph>}

    </QuestionContainer>

  );
};

export default Question;
