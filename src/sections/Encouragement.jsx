import styled from 'styled-components';

const Title = styled.h3`
  position: absolute;
  left: 154.7vh;
  top: 15.98vh;
  width: 55.83vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 5.49vh;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`;

const Text = styled.p`
  position: absolute;
  left: 154.7vh;
  top: 35.49vh;
  width: 54.01vh;

  color: #08363C;
  font-family: "HK Grotesk";
  font-size: 1.96vh;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.1px;
`;

const Encouragement = () => (
    <>
      <Title>Ahoy hackers! Embark on a tech adventure at cmd-f!</Title>
      <Text>Learn new skills, build with passion and connect with a community dedicated to making a difference. No matter your background or technical expertise, we provide the resources and support to ensure your journey is a success.</Text>
    </>
);

export default Encouragement;