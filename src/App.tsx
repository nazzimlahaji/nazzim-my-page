import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useLanguage } from "./context/LanguageContext";

// Footer shown on every page
function Footer() {
  const { t } = useLanguage();
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
        color: "text.secondary",
        fontSize: 14,
      }}
    >
      © {new Date().getFullYear()} Mohd Nazzim Bin Lahaji. {t.footer.rights}
    </Box>
  );
}

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

