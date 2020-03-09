import React from "react";

import StyledButton, { Props as StyledButtonProps } from "./styles/Button";

const Button = ({ name, onClick, secondary = true, mobileMarginTop }: Props) => (
  <StyledButton onClick={onClick} secondary={secondary} mobileMarginTop={mobileMarginTop}>
    {name}
  </StyledButton>
);

interface Props extends StyledButtonProps {
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default Button;
