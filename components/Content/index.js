import propTypes from './props';
import { Container, Title, CVButton, CVButtonText } from './styles';

const Content = () => (
  <Container>
    <Title>germancutraro</Title>
    {/* <CVButton onClick={() => window.open('/cv.png', '_blank')}>
      <CVButtonText>ABRIR CV</CVButtonText>
    </CVButton> */}
  </Container>
);

Content.propTypes = propTypes;

export default React.memo(Content);
