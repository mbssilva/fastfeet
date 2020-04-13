import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#f4f'],
  start: { x: 0, y: 0.7 },
  end: { x: 0, y: 1.0 },
})`
  flex: 1;
`;
