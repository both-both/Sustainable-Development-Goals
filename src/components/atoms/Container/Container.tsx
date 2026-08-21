import type { ContainerProps } from "./Container.types";

export const Container = ({ bgcolor, height, children }: ContainerProps) => {
  return <div style={{ backgroundColor: bgcolor, height }}>{children}</div>;
};
