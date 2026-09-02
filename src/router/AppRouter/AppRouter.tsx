import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { EducationPage } from "../../pages/EducationPage/EducationPage";
import { CustomGoalPage } from "../../pages/CustomGoalPage/CustomGoalPage";
import { FaqPage } from "../../pages/FaqPage/FaqPage";
import { ContactPage } from "../../pages/ContactPage/ContactPage";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { DetailsPage } from "../../pages/DetailsPage/DetailsPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ThemePage } from "../../pages/ThemePage/ThemePage";
import { ThemeGoalList } from "../../components/modules/ThemeGoalList/ThemeGoalList";
import { ThemeGoalDetails } from "../../components/modules/ThemeGoalDetails/ThemeGoalDetails";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/education-page" element={<EducationPage />} />
      <Route path="/custom-goal" element={<CustomGoalPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<ErrorPage />} />

      <Route path="/goals/:id" element={<DetailsPage />} />

      <Route path="/themes" element={<ThemePage />}>
        <Route path=":theme_slug" element={<ThemeGoalList />} />
        <Route path=":theme_slug/:goal_id" element={<ThemeGoalDetails />} />
      </Route>
    </Routes>
  );
};
