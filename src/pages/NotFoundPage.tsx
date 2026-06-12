import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../context/LanguageContext";

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        px: 2,
      }}
    >
      <SEOHead
        title={t.seo.notFound.title}
        description={t.seo.notFound.description}
        path="/404"
      />

      {/* Atmospheric background mesh */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: (th) =>
              th.palette.mode === "dark"
                ? "radial-gradient(circle, rgba(124,77,255,0.12) 0%, transparent 65%)"
                : "radial-gradient(circle, rgba(21,101,192,0.07) 0%, transparent 65%)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "5%",
            right: "10%",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: (th) =>
              th.palette.mode === "dark"
                ? "radial-gradient(circle, rgba(124,77,255,0.06) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(21,101,192,0.04) 0%, transparent 70%)",
          },
        }}
      />

      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          maxWidth: 480,
        }}
      >
        {/* Giant ghost number */}
        <Typography
          aria-hidden="true"
          sx={{
            fontSize: { xs: "9rem", sm: "14rem" },
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.06em",
            background: (th) =>
              th.palette.mode === "dark"
                ? "linear-gradient(160deg, rgba(124,77,255,0.9) 0%, rgba(124,77,255,0.2) 100%)"
                : "linear-gradient(160deg, rgba(21,101,192,0.85) 0%, rgba(21,101,192,0.15) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            userSelect: "none",
            mb: 0,
          }}
        >
          404
        </Typography>

        {/* Divider rule */}
        <Box
          sx={{
            width: 48,
            height: 2,
            mx: "auto",
            my: 3,
            borderRadius: 1,
            bgcolor: "primary.main",
            opacity: 0.5,
          }}
        />

        <Typography
          variant="h5"
          component="h1"
          fontWeight={700}
          sx={{ mb: 1.5, letterSpacing: -0.3 }}
        >
          {t.seo.notFound.heading}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.75 }}
        >
          {t.seo.notFound.body}
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          sx={{
            textTransform: "none",
            px: 4,
            py: 1.25,
            fontWeight: 600,
            borderRadius: 2,
            boxShadow: (th) =>
              th.palette.mode === "dark"
                ? "0 0 24px rgba(124,77,255,0.35)"
                : "0 4px 20px rgba(21,101,192,0.25)",
            transition: "transform 150ms, box-shadow 150ms",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: (th) =>
                th.palette.mode === "dark"
                  ? "0 0 32px rgba(124,77,255,0.5)"
                  : "0 8px 28px rgba(21,101,192,0.35)",
            },
          }}
        >
          {t.seo.notFound.backHome}
        </Button>
      </Box>
    </Box>
  );
}
