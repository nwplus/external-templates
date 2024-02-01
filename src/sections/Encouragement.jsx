import styled from 'styled-components';

const EncouragementSection = styled.div`
  position: absolute;
  left: 145vh;
  top: 20vh;
  width: 564px;
  text-align: left;
`;

const Title = styled.h3`
  color: #08363C;
  font-family: "Yatra One";
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px; /* 100% */
  letter-spacing: 0.4px;
`;

const Text = styled.p`
  margin-top: 20px;
  color: #08363C;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 110% */
  letter-spacing: -0.1px;
`;

const Encouragement = () => (
    <>
      <EncouragementSection>
        <Title>Ahoy hackers!</Title>
        <Title>Embark on a tech adventure at cmd-f!</Title>
        <Text>Learn new skills, build with passion and connect with a community dedicated to making a difference. No matter your background or technical expertise, we provide the resources and support to ensure your journey is a success.</Text>
      </EncouragementSection>
    </>
);

export default Encouragement;