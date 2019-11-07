import React from "react";
import { render } from "react-dom";
import { Student } from "./Student";
import { AppWrapper } from "./AppWrapper";

const Title = ({ text }) => <h1>{text}</h1>;
const App = () => {
  return (
    <>
      <AppWrapper>
        <Title text="Hello React in Area 51"></Title>
      </AppWrapper>
      <AppWrapper>
        <Student name="Paul" company="Google" background="Front End"></Student>
        <Student name="Jorge" company="Apple" background="Back End"></Student>
        <Student
          name="Brenda"
          company="Facebook"
          background="Full Stack"
        ></Student>
      </AppWrapper>
    </>
  );
};
render(<App />, document.getElementById("root"));
