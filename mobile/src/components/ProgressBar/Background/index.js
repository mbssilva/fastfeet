import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#fff', '#7159c1', '#fff'],
  start: { x: 0, y: 0.3 },
  end: { x: 0, y: 0.2 },
})`
  align-self: stretch;
  height: 21px;
  margin: 0 50px;
`;
