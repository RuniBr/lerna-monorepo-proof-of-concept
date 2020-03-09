import React from "react";

const Header = ({ title, children }: Props) => (
  <>
    <h1 className="title">{title}</h1>
    <>{children}</>
  </>
);

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default Header;
