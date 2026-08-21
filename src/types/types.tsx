import type React from "react";

export type HeaderProps = {
  children: React.ReactNode;
};

export type MainProps = {
  children?: React.ReactNode;
};

export type NavbarProps = {
  children?: React.ReactNode;
};

export type UlProps = {
  children: React.ReactNode;
};

export type DivProps = {
  children?: React.ReactNode;
  className?: string;
  height?: string;
  width?: string;
  color?: string;
  as?: React.ElementType;
};

export type GoalSectionProps = {
  children: React.ReactNode;
};
export type GoalProps = {
  src: string;
  alt: string;
};

export type SubjectProps = {
  title: string;
  color: string;
};
