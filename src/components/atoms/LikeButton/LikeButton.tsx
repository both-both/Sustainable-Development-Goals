import { useState } from "react";
import { LikeButtonStyled, LikeButtonWrapperStyled } from "./LikeButton.Styled";

const outlineHeart =
  "M32.2666 49.4667L31.9999 49.7333L31.7066 49.4667C19.0399 37.9733 10.6666 30.3733 10.6666 22.6667C10.6666 17.3333 14.6666 13.3333 19.9999 13.3333C24.1066 13.3333 28.1066 16 29.5199 19.6267H34.4799C35.8933 16 39.8932 13.3333 43.9999 13.3333C49.3332 13.3333 53.3332 17.3333 53.3332 22.6667C53.3332 30.3733 44.9599 37.9733 32.2666 49.4667ZM43.9999 8C39.3599 8 34.9066 10.16 31.9999 13.5467C29.0933 10.16 24.6399 8 19.9999 8C11.7866 8 5.33325 14.4267 5.33325 22.6667C5.33325 32.72 14.3999 40.96 28.1333 53.4133L31.9999 56.9333L35.8666 53.4133C49.5999 40.96 58.6666 32.72 58.6666 22.6667C58.6666 14.4267 52.2132 8 43.9999 8Z";

const filledHeart =
  "M43.9999 8C39.3599 8 34.9066 10.16 31.9999 13.5467C29.0933 10.16 24.6399 8 19.9999 8C11.7866 8 5.33325 14.4267 5.33325 22.6667C5.33325 32.72 14.3999 40.96 28.1333 53.4133L31.9999 56.9333L35.8666 53.4133C49.5999 40.96 58.6666 32.72 58.6666 22.6667C58.6666 14.4267 52.2132 8 43.9999 8Z";

export const LikeButton = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    setIsVisible(!isVisible);
  };

  return (
    <LikeButtonWrapperStyled type="button" onClick={handleClick}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isVisible ? "Liked" : "Like"}
        <LikeButtonStyled
          d={liked ? filledHeart : outlineHeart}
          $liked={liked}
        />
      </svg>
      {isVisible && <p>Liked</p>}
      <>{likeCount}</>
    </LikeButtonWrapperStyled>
  );
};
