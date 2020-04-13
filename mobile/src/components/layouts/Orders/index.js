import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#fff'],
  start: { x: 0, y: 0.5 },
  end: { x: 0, y: 1.0 },
})`
  flex: 1;
`;
