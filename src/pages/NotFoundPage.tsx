import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../context/LanguageContext";

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <Container maxWidth="sm" sx={{ py: 12, textAlign: "center" }}>
      <SEOHead
        title={t.seo.notFound.title}
        description={t.seo.notFound.description}
        path="/404"
      />

      <Typography
        variant="h1"
        fontWeight={800}
        sx={{
          fontSize: { xs: "5rem", md: "8rem" },
          background: (th) =>
            `linear-gradient(135deg, ${th.palette.primary.main}, ${th.palette.primary.light})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2,
        }}
      >
        404
      </Typography>

      <Typography variant="h5" fontWeight={600} gutterBottom>
        {t.seo.notFound.heading}
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        {t.seo.notFound.body}
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        startIcon={<HomeIcon />}
        sx={{ textTransform: "none", px: 4 }}
      >
        {t.seo.notFound.backHome}
      </Button>
    </Container>
  );
}
