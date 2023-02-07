import SVG from 'react-inlinesvg'
import styled from 'styled-components'

const SponsorText = styled.div`
  position: absolute;
  top: 9.5%;
  color: white;
  font-family: 'HK Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  left: 50%;
  transform: translateX(-50%);
`

const Sponsors = () => (
  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
    <SponsorText>
      <p style={{ display: 'inline' }}>
        nwPlus is always looking for new ventures, opportunities, and connections. If you are interested in sponsoring
        us, working with us, or speaking at one of our events, shoot us an email at&nbsp;
      </p>
      <a href="http://localhost:3000/" style={{ display: 'inline', textDecoration: 'underline', cursor: 'pointer' }}>
        sponsorship@nwplus.io.
      </a>
    </SponsorText>

    <SVG src="/assets/Sponsors + Footer.svg" />
  </div>
)

export default Sponsors
