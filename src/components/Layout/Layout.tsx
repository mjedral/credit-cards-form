import React from 'react';
import { StyledLayout } from './StyledLayout';

// TODO: remove unneccessary props

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: LayoutProps) => {
  return <StyledLayout className={className}>{children}</StyledLayout>;
};
