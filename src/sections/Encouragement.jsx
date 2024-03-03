import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 154.7vh;
  top: 15.98vh;
`

const Title = styled.h3`
  left: 0;
  top: 0;
  width: 55.83vh;

  color: #08363C;
  font-family: "Yatra One";
  font-size: calc(1rem + 3vh);
  // font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.4px;
`;

const Text = styled.p`
  margin-top: 1.5rem;
  left: 0;
  width: 54.01vh;

  color: #08363C;
  font-family: "HK Grotesk Medium";
  font-size: calc(0.5rem + 1.5vh);
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -0.1px;
`;

const Encouragement = () => (
    <>
      <Container>
        <Title>Ahoy hackers!</Title>
        <Title style={{ marginTop: "1rem" }}>Embark on a tech adventure at cmd-f!</Title>
        <Text>Learn new skills, build with passion and connect with a community dedicated to making a difference. No matter your background or technical expertise, we provide the resources and support to ensure your journey is a success.</Text>
      </Container>
    </>
);

export default Encouragement;