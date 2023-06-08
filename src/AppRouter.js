import { Route, Routes } from "react-router";
import JobDetailsPage from "./pages/JobDetailsPage";
import JobListPage from "./pages/JobListPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<JobListPage />} />
      <Route path="/jobs/:id" element={<JobDetailsPage />} />
    </Routes>
  );
};

export default AppRouter;
