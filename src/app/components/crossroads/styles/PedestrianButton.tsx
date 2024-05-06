import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { green, grey, yellow } from '@mui/material/colors';

export const PedestrianButton = styled(IconButton)`
  border: 0.12rem solid ${grey[700]};
  background-color:${yellow[300]};
  padding: 0;
  border-radius: 0.5rem;
  min-width: 2rem;
  min-height: 2rem;
  &.blinking {
    border: 0.12rem solid ${green[500]};
    animation-name: blinking;
    animation-duration: 1s;
    animation-iteration-count: 100;
  }
  @keyframes blinking {
    50% {
      border-color: ${grey[200]}};
    }
  }
`;
