import styled from 'styled-components'

const TestimonialsContainer = styled.div`
  aspect-ratio: 1280/832;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
`

const TestimonialsBackground = styled.div`
  background-image: url('./assets/images/testimonials_background.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Testimonials = () => (
    <TestimonialsContainer id="testimonials">
      <TestimonialsBackground />
    </TestimonialsContainer>
  )

export default Testimonials
