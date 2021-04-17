import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
const AboutPage = () => {
  return (
    <Layout>
      <About>
        <div className="container">
          <Title>About Us</Title>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            suscipit ipsam neque. Numquam impedit aliquid sint. Eveniet
            temporibus optio ad ducimus deleniti cupiditate eaque omnis non
            laboriosam cum repudiandae qui, voluptas quod, beatae quo odio alias
            distinctio, cumque consectetur dignissimos! Fugiat harum perferendis
            porro? Molestias molestiae eligendi enim facilis architecto!
          </Text>
        </div>
      </About>
    </Layout>
  );
};

export default AboutPage;
const About = styled.div`
  padding: 4rem 0;
  text-align: center;
`;
const Title = styled.h1`
  text-transform: uppercase;
  margin: 2rem 0;
`;
const Text = styled.div`
  font-size: 1.2rem;
`;
