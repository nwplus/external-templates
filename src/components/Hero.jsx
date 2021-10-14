import styled from 'styled-components';

/** hack to display image without cropping: width=100%, height=0, padding-bottom to size the div to the image’s proportion
 * padding-bottom: height / width = 998px / 1440px ≈ 69%
 * https://www.quora.com/In-CSS-how-do-I-set-a-background-image-on-a-div-without-part-of-the-image-getting-cutoff */
const HeroContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 69%;
  background-image: url('/assets/background/hero.svg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`;

const HeroTextContainer = styled.div`
  padding-top: 28%;
`;

export default function Hero() {
  return (
    <HeroContainer>
    </HeroContainer>
  );
}
