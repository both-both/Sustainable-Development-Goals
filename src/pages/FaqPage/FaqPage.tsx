import { Div } from "../../components/elements/Div/Div";
import { ContentWrapper } from "../../components/Contentwrapper/ContentWrapper";
import { useFetch } from "../../hooks/useFetch";
import type { FaqResponse } from "./FaqPage.types";
import { endpoints } from "../../data/Endpoints";
import { Loader } from "../../components/elements/Loader/Loader";
import React from "react";

export const FaqPage = () => {
  const { data, isLoading, error } = useFetch<FaqResponse>(endpoints.faq);

  if (isLoading) {
    return (
      <Loader
        visible={true}
        height="80"
        width="80"
        color="#2BBBDE"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ContentWrapper
      title="FAQ"
      description="Ofte stillede spørgsmål"
      showTitle={true}
    >
      <Div className="text-container">
        {data?.map((item) => (
          <React.Fragment>
            <h3 key={item.id}>{item.title}</h3>
            <p>{item.context}</p>
          </React.Fragment>
        ))}
      </Div>
    </ContentWrapper>
  );
};
