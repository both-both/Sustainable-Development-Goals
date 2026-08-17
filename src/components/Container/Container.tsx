import type { ContainerProps } from "../../types/types";

export const Container = ({ bgcolor, height, children }: ContainerProps) => {
  return <div style={{ backgroundColor: bgcolor, height }}>{children}</div>;
};
