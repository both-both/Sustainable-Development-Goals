import { useParams } from "react-router-dom";
import { goals } from "../../data/goals";
import { ContentWrapper } from "../../components/Contentwrapper/ContentWrapper";
import { VideoIframe } from "./DetailPage.Styled";

export const DetailsPage = () => {
  const { id } = useParams();
  const goal = goals.find((goal) => goal.id === Number(id));

  if (!goal) {
    return <p>Verdensmålet blev ikke fundet </p>;
  }
  return (
    <>
      <ContentWrapper
        title={`Mål ${goal.id}: ${goal.title}`}
        description={goal.byline}
        showTitle={true}
      >
        <article>
          <h3>{goal.byline}</h3>
          <VideoIframe
            src={goal.video_url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></VideoIframe>

          <p>{goal.description}</p>
        </article>
      </ContentWrapper>
    </>
  );
};
