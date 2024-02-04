import styled from 'styled-components';

const Title = styled.h3`
  position: absolute;
  left: 160.95vh;
  top: 16.62vh;
  width: 57.52vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: 5.71vh;
  font-style: normal;
  font-weight: 400;
  line-height: 5.71vh;
  letter-spacing: 0.4px;
`;

const Text = styled.p`
  position: absolute;
  left: 160.95vh;
  top: 36.92vh;
  width: 56.2vh;

  color: #08363C;
  font-family: "HK Grotesk";
  font-size: 2.04vh;
  font-style: normal;
  font-weight: 500;
  line-height: 2.24vh;
  letter-spacing: -0.1px;
`;

const Encouragement = () => (
    <>
      <Title>Ahoy hackers! Embark on a tech adventure at cmd-f!</Title>
      <Text>Learn new skills, build with passion and connect with a community dedicated to making a difference. No matter your background or technical expertise, we provide the resources and support to ensure your journey is a success.</Text>
    </>
);

export default Encouragement;