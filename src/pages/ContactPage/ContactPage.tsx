import { ContentWrapper } from "../../components/Contentwrapper/ContentWrapper";
import { ContactForm } from "../../components/molecules/ContactForm/ContactForm";

export const ContactPage = () => {
  return (
    <>
      <ContentWrapper
        title="Kontakt os"
        description="Kontakt os her på siden"
        showTitle={true}
      >
        <p>
          Udfyld og send formularen og vi vil hurtigst muligt besvare dine
          spørgsmål.
        </p>
        <ContactForm />
      </ContentWrapper>
    </>
  );
};
