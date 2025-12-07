import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";

import HomePage from "./pages/Home/HomePage.jsx";
import MatchFormPage from "./pages/MatchForm/MatchFormPage.jsx";
import MatchResultPage from "./pages/MatchResult/MatchResultPage.jsx";
import PlannerDetailPage from "./pages/PlannerDetail/PlannerDetailPage.jsx";
import MyPage from "./pages/MyPage/MyPage.jsx";
import LoginPage from "./pages/Auth/LoginPage.jsx";
import SignupPage from "./pages/Auth/SignupPage.jsx";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/match" element={<MatchFormPage />} />
        <Route path="/results" element={<MatchResultPage />} />
        <Route path="/planner/:id" element={<PlannerDetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
