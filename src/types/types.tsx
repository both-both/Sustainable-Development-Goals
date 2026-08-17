import type React from "react";

export type ContentWrapperProps = {
  title: string;
  description: string;
  showTitle: boolean;
  children?: React.ReactNode;
};

export type HeaderProps = {
  children: React.ReactNode;
};

export type MainProps = {
  children?: React.ReactNode;
};

export type ContainerProps = {
  bgcolor?: string;
  height?: string;
  children: React.ReactNode;
};
export type NavbarProps = {
  children?: React.ReactNode;
};

export type UlProps = {
  children: React.ReactNode;
};
export type LiProps = {
  children: React.ReactNode;
};
