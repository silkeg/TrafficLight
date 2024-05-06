import { styled, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

export const QuadrantStack = styled(Stack)`
  width: 50%;
  box-sizing: border-box;
  border: 0 solid ${grey[500]};
  position: relative;
  &:nth-of-type(1):after,
  &:nth-of-type(2):after {
    content: '';
    background: repeating-linear-gradient(
      to right,
      white,
      white 1rem,
      ${grey[500]} 1rem,
      ${grey[500]} 1.7rem
    );
    height: 0.1rem;
    position: absolute;
    bottom: -2rem;
  }
  &:nth-of-type(1):after {
    left: 0.5rem;
    right: calc(-1.5rem / 2);
  }
  &:nth-of-type(2):after {
    left: calc(-1.5rem / 2);
    right: 0.5rem;
  }
  &:nth-of-type(1):before,
  &:nth-of-type(3):before {
    content: '';
    background: repeating-linear-gradient(
      to bottom,
      white,
      white 1rem,
      ${grey[500]} 1rem,
      ${grey[500]} 1.7rem
    );
    width: 0.1rem;
    position: absolute;
    right: -2rem;
    z-index: 1;
  }
  &:nth-of-type(1):before {
    top: 0.5rem;
    bottom: calc(-1.5rem / 2);
  }
  &:nth-of-type(3):before {
    top: calc(-1.5rem / 2);
    bottom: 0.5rem;
  }
`;
