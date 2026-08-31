import { ContentWrapper } from "../../components/Contentwrapper/ContentWrapper";
import { EducationList } from "../../components/molecules/EducationList/EducationList";

export const EducationPage = () => {
  return (
    <>
      <ContentWrapper
        title="Undervisning"
        description="Find inspiration til undervisningen"
        showTitle={true}
      >
        <p>
          Her finder du inspiration til din undervisning i form af
          introducerende øvelser, der kan bruges til at sætte verdensmålene i
          spil sammen med dine elever. Øvelserne er udarbejdet på baggrund af
          bogen “Bliver verden bedre” og kernestof i fagene.
        </p>
        <EducationList />
      </ContentWrapper>
    </>
  );
};
