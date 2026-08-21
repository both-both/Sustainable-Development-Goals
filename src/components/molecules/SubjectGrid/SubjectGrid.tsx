import { subjects } from "../../../data/subjects";
import { SubjectGridStyled } from "./SubjectGridStyled";
import { SubjectCard } from "../SubjectCard/SubjectCard";

export const SubjectGrid = () => (
  <SubjectGridStyled>
    {subjects.map((subject) => (
      <SubjectCard
        key={subject.title}
        title={subject.title}
        color={subject.color}
      />
    ))}
  </SubjectGridStyled>
);
