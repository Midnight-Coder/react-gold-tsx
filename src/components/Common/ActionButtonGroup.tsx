import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';


const ActionButtonGroup = styled(ButtonGroup)`
  display: flex;
  justify-content: flex-end;

  & :not(:last-child) {
    margin-right: 10px;
  }

  & .MuiButtonGroup-grouped:not(:last-of-type) {
    border-radius: inherit;
    border-right-color: rgba(103, 58, 183, 0.5);
  }

  & .MuiButtonGroup-grouped:not(:first-of-type) {
    border-radius: inherit;
  }`;

export default ActionButtonGroup;
