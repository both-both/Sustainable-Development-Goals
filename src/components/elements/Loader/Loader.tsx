import { LoaderStyled } from "./Loader.Styled";
import type { LoaderProps } from "./Loader.types";
import { TailSpin } from "react-loader-spinner";

export const Loader = ({
  visible,
  height,
  width,
  color,
  ariaLabel,
  radius,
  wrapperStyle,
  wrapperClass,
}: LoaderProps) => {
  return (
    <LoaderStyled>
      <TailSpin
        visible={visible}
        height={height}
        width={width}
        color={color}
        ariaLabel={ariaLabel}
        radius={radius}
        wrapperStyle={wrapperStyle}
        wrapperClass={wrapperClass}
      />
    </LoaderStyled>
  );
};
