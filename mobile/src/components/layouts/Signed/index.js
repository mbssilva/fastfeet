import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#fff'],
  start: { x: 0, y: 0.1999 },
  end: { x: 0, y: 0.2 },
})`
  flex: 1;
`;
