import styled from "styled-components";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import Big1Image from '../../public/assets/sparkles/big1.svg'
import Big2Image from '../../public/assets/sparkles/big2.svg'
import Big3Image from '../../public/assets/sparkles/big3.svg'
import Mid1Image from '../../public/assets/sparkles/mid1.svg'
import Mid2Image from '../../public/assets/sparkles/mid2.svg'
import Mid3Image from '../../public/assets/sparkles/mid3.svg'
import Mid4Image from '../../public/assets/sparkles/mid4.svg'
import Mid5Image from '../../public/assets/sparkles/mid5.svg'
import Mid6Image from '../../public/assets/sparkles/mid6.svg'
import Mid7Image from '../../public/assets/sparkles/mid7.svg'
import Mid8Image from '../../public/assets/sparkles/mid8.svg'
import Mid9Image from '../../public/assets/sparkles/mid9.svg'
import Mid10Image from '../../public/assets/sparkles/mid10.svg'
import Mid11Image from '../../public/assets/sparkles/mid11.svg'
import Mid12Image from '../../public/assets/sparkles/mid12.svg'
import Mid13Image from '../../public/assets/sparkles/mid13.svg'
import Mid14Image from '../../public/assets/sparkles/mid14.svg'
import Mid15Image from '../../public/assets/sparkles/mid15.svg'
import Mid16Image from '../../public/assets/sparkles/mid16.svg'
import Smol1Image from '../../public/assets/sparkles/smol1.svg'
import Smol2Image from '../../public/assets/sparkles/smol2.svg'
import Smol3Image from '../../public/assets/sparkles/smol3.svg'
import Smol4Image from '../../public/assets/sparkles/smol4.svg'
import Smol5Image from '../../public/assets/sparkles/smol5.svg'
import Smol6Image from '../../public/assets/sparkles/smol6.svg'
import Smol7Image from '../../public/assets/sparkles/smol7.svg'
import Smol8Image from '../../public/assets/sparkles/smol8.svg'
import Smol9Image from '../../public/assets/sparkles/smol9.svg'
import Smol10Image from '../../public/assets/sparkles/smol10.svg'

const Sparkle = styled.img`
  position: absolute;
  animation-name: sparkle;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-play-state: paused;
  animation-iteration-count: infinite;
`

const Big1 = styled(Sparkle)`
  left: 68.92vh;
  top: 80.19vh;
  width: 5.58vh;
  height: 5.58vh;
`

const Big2 = styled(Sparkle)`
  left: 99vh;
  top: 81.17vh;
  width: 4.21vh;
  height: 4.21vh;
`

const Big3 = styled(Sparkle)`
  left: 78vh;
  top: 72vh;
  width: 4.21vh;
  height: 4.21vh;
`

const Mid1 = styled(Sparkle)`
  left: 62.3vh;
  top: 72.5vh;
  width: 1.4vh;
  height: 1.07vh;
`

const Mid2 = styled(Sparkle)`
  left: 80.6vh;
  top: 72.45vh;
  width: 1.26vh;
  height: 0.97vh;
`

const Mid3 = styled(Sparkle)`
  left: 75.2vh;
  top: 73vh;
  width: 2.02vh;
  height: 1.55vh;
`

const Mid4 = styled(Sparkle)`
  left: 94.11vh;
  top: 75.3vh;
  width: 1.56vh;
  height: 1.2vh;
`

const Mid5 = styled(Sparkle)`
  left: 93.6vh;
  top: 90.5vh;
  width: 1.4vh;
  height: 1.07vh;
`

const Mid6 = styled(Sparkle)`
  left: 82.4vh;
  top: 90vh;
  width: 1.4vh;
  height: 1.07vh;
`

const Mid7 = styled(Sparkle)`
  left: 111.4vh;
  top: 87vh;
  width: 1.26vh;
  height: 0.97vh;
`

const Mid8 = styled(Sparkle)`
  left: 88.72vh;
  top: 67.54vh;
  width: 1.65vh;
  height: 1.27vh;
`

const Mid9 = styled(Sparkle)`
  left: 113.2vh;
  top: 95vh;
  width: 2.02vh;
  height: 1.5vh;
`

const Mid10 = styled(Sparkle)`
  left: 128vh;
  top: 96vh;
  width: 1.56vh;
  height: 1.2vh;
`

const Mid11 = styled(Sparkle)`
  left: 93.62vh;
  top: 90.49vh;
  width: 1.4vh;
  height: 1.07vh;
`

const Mid12 = styled(Sparkle)`
  left: 82.5vh;
  top: 90vh;
  width: 1.4vh;
  height: 1.07vh;
`

const Mid13 = styled(Sparkle)`
  left: 112.05vh;
  top: 87.25vh;
  width: 1.26vh;
  height: 0.97vh;
`

const Mid14 = styled(Sparkle)`
  left: 88.72vh;
  top: 65.57vh;
  width: 1.65vh;
  height: 1.27vh;
`

const Mid15 = styled(Sparkle)`
  left: 108.23vh;
  top: 90.2vh;
  width: 2.02vh;
  height: 1.55vh;
`

const Mid16 = styled(Sparkle)`
  left: 128.7vh;
  top: 94.7vh;
  width: 1.57vh;
  height: 1.2vh;
`

const Smol1 = styled(Sparkle)`
  left: 110.3vh;
  top: 60.58vh;
  width: 0.98vh;
  height: 0.98vh;
`

const Smol2 = styled(Sparkle)`
  left: 101.47vh;
  top: 60vh;
  width: 0.98vh;
  height: 0.98vh;
`

const Smol3 = styled(Sparkle)`
  left: 103.03vh;
  top: 60.6vh;
  width: 0.98vh;
  height: 0.98vh;
`

const Smol4 = styled(Sparkle)`
  left: 101vh;
  top: 65vh;
  width: 0.98vh;
  height: 0.98vh;
`

const Smol5 = styled(Sparkle)`
  left: 87.6vh;
  top: 67.82vh;
  width: 0.98vh;
  height: 0.98vh;
`

const Smol6 = styled(Sparkle)`
  left: 110.29vh;
  top: 60.58vh;
  width: 0.98vh;
  height: 0.98vh;
`

const Smol7 = styled(Sparkle)`
  left: 101.47vh;
  top: 59.9vh;
  width: 0.98vh;
  height: 0.98vh;
`

const Smol8 = styled(Sparkle)`
  left: 103.03vh;
  top: 60.58vh;
  width: 0.98vh;
  height: 0.98vh;
`
const Smol9 = styled(Sparkle)`
  left: 100.98vh;
  top: 64.9vh;
  width: 0.98vh;
  height: 0.98vh;
`

const Smol10 = styled(Sparkle)`
  left: 87.6vh;
  top: 67.82vh;
  width: 0.98vh;
  height: 0.98vh;
`

const SparkleWrapper = ({ SparkleComponent, imageSrc, ...props }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      const duration = Math.random() * 100 + 500;
      setTimeout(() => setIsAnimating(false), duration);
    };

    const interval = setInterval(startAnimation, Math.random() * 500 + 200);

    return () => clearInterval(interval);
  }, []);

  return <SparkleComponent src={imageSrc} {...props} style={{ animationPlayState: isAnimating ? 'running' : 'paused' }} />;
};

const Sparkles = () => {
  const sparkles = [Big1, Big2, Big3, Mid1, Mid2, Mid3, Mid4, Mid5, Mid6, Mid7, Mid8, Mid9, Mid10, Mid11, Mid12, Mid13, Mid14, Mid15, Mid16, Smol1, Smol2, Smol3, Smol4, Smol5, Smol6, Smol7, Smol8, Smol9, Smol10];
  const images = [Big1Image, Big2Image, Big3Image, Mid1Image, Mid2Image, Mid3Image, Mid4Image, Mid5Image, Mid6Image, Mid7Image, Mid8Image, Mid9Image, Mid10Image, Mid11Image, Mid12Image, Mid13Image, Mid14Image, Mid15Image, Mid16Image, Smol1Image, Smol2Image, Smol3Image, Smol4Image, Smol5Image, Smol6Image, Smol7Image, Smol8Image, Smol9Image, Smol10Image];

  return (
    <>
      {sparkles.map((sparkle, i) => (
        <SparkleWrapper key={uuidv4()} SparkleComponent={sparkle} imageSrc={images[i]} />
      ))}
      {/* <Big1 src={Big1Image} />
      <Big2 src={Big2Image} />
      <Big3 src={Big3Image} />
      <Mid1 src={Mid1Image} />
      <Mid2 src={Mid2Image} />
      <Mid3 src={Mid3Image} />
      <Mid4 src={Mid4Image} />
      <Mid5 src={Mid5Image} />
      <Mid6 src={Mid6Image} />
      <Mid7 src={Mid7Image} />
      <Mid8 src={Mid8Image} />
      <Mid9 src={Mid9Image} />
      <Mid10 src={Mid10Image} />
      <Mid11 src={Mid11Image} />
      <Mid12 src={Mid12Image} />
      <Mid13 src={Mid13Image} />
      <Mid14 src={Mid14Image} />
      <Mid15 src={Mid15Image} />
      <Mid16 src={Mid16Image} /> */}
    </>
  ) 
}

export default Sparkles;