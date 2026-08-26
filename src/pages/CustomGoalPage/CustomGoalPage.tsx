import { ContentWrapper } from "../../components/Contentwrapper/ContentWrapper";
import { CustomGoalDesigner } from "../../components/molecules/CustomGoalDesigner/CustomGoalDesigner";

export const CustomGoalPage = () => {
  return (
    <>
      <ContentWrapper
        title="Byg dit eget mål"
        description="Her kan du bygge dit eget mål"
        showTitle={true}
      >
        <h3>Mangler der et mål?</h3>
        <p>
          Med tekst feltet herunder kan du bygge dit eget mål og give det en
          bestemt farve.
        </p>
        <CustomGoalDesigner />
      </ContentWrapper>
    </>
  );
};
