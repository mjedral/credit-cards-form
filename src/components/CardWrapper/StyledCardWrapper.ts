// TODO: styles for wrapper

import styled from 'styled-components';
import { px } from '../../tools/css';

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${px(16)};
  height: ${px(135)};
  border-radius: ${px(8)};
  width: 100%;
`;
