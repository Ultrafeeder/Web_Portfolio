import React from "react";
import ProjectCards from "../../components/projectCards/ProjectCards";
import Headshot from "../../components/headShot/Headshot";
import Form from "../../components/form/Form";

const Home = () => {
  return (
    <>
      <Headshot></Headshot>
      <ProjectCards></ProjectCards>
      <Form></Form>
    </>
  );
};

export default Home;
