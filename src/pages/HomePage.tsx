import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLanguage } from "../context/LanguageContext";
import SEOHead from "../components/SEOHead";
import profilePic from "../assets/profile_pic.jpg";

export default function HomePage() {
  const { t } = useLanguage();

  const HIGHLIGHTS = [
    {
      label: t.home.highlights.backend.label,
      desc: t.home.highlights.backend.desc,
    },
    {
      label: t.home.highlights.infrastructure.label,
      desc: t.home.highlights.infrastructure.desc,
    },
    {
      label: t.home.highlights.frontend.label,
      desc: t.home.highlights.frontend.desc,
    },
  ];

  const QUICK_LINKS = [
    { label: t.home.quickLinks.experience, to: "/experience" },
    { label: t.home.quickLinks.education, to: "/education" },
    { label: t.home.quickLinks.skills, to: "/skills" },
  ];

  return (
    <Box>
      <SEOHead
        title={t.seo.home.title}
        description={t.seo.home.description}
        path="/"
      />

      {/* Hero */}
      <Box
        component="section"
        aria-label="Introduction"
        sx={{
          background: (th) =>
            `linear-gradient(135deg, ${th.palette.primary.dark} 0%, ${th.palette.primary.main} 60%, ${th.palette.primary.light} 100%)`,
          color: "primary.contrastText",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            alignItems="center"
          >
            {/* Avatar profile picture */}
            <Avatar
              src={profilePic}
              alt="Mohd Nazzim Bin Lahaji"
              sx={{
                width: 170,
                height: 170,
                border: "3px solid rgba(255,255,255,0.5)",
                flexShrink: 0,
              }}
            />

            <Box>
              {/* H1 — the single primary heading for this page */}
              <Typography
                variant="h3"
                component="h1"
                fontWeight={700}
                gutterBottom
              >
                Mohd Nazzim Bin Lahaji
              </Typography>
              {/* H2 — role subtitle */}
              <Typography
                variant="h6"
                component="h2"
                sx={{ opacity: 0.85, letterSpacing: 1, fontWeight: 500, mb: 1 }}
              >
                {t.home.role}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 560 }}>
                {t.home.bio}
              </Typography>

              {/* Contact chips */}
              <Stack direction="row" flexWrap="wrap" gap={1} mt={3}>
                <Chip
                  icon={<EmailIcon sx={{ color: "white !important" }} />}
                  label="nazzimlahaji@gmail.com"
                  component="a"
                  href="mailto:nazzimlahaji@gmail.com"
                  clickable
                  sx={{
                    bgcolor: "rgba(255,255,255,0.15)",
                    color: "white",
                    border: "none",
                  }}
                />
                <Chip
                  icon={<LocationOnIcon sx={{ color: "white !important" }} />}
                  label="Subang Jaya, Selangor (Current)"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.15)",
                    color: "white",
                    border: "none",
                  }}
                />
                <Chip
                  icon={<HomeIcon sx={{ color: "white !important" }} />}
                  label="Kota Kinabalu, Sabah (Hometown)"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.15)",
                    color: "white",
                    border: "none",
                  }}
                />
              </Stack>

              {/* Social links */}
              <Stack direction="row" spacing={1.5} mt={2}>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://www.linkedin.com/in/nazzimlahaji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    borderColor: "rgba(255,255,255,0.6)",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://github.com/nazzimlahaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  sx={{
                    borderColor: "rgba(255,255,255,0.6)",
                    color: "white",
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* About section */}
      <Container
        maxWidth="md"
        component="section"
        aria-label="About"
        sx={{ py: 6 }}
      >
        <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
          {t.home.aboutTitle}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          {t.home.aboutBody}
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* Core Strengths */}
        <Typography variant="h6" component="h3" fontWeight={700} gutterBottom>
          {t.home.strengthsTitle}
        </Typography>
        <Stack spacing={2} mb={5}>
          {HIGHLIGHTS.map(({ label, desc }) => (
            <Box
              key={label}
              sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
            >
              <Chip
                label={label}
                color="primary"
                size="small"
                sx={{ mt: 0.3, flexShrink: 0 }}
              />
              <Typography variant="body2" color="text.secondary">
                {desc}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ mb: 4 }} />

        {/* Quick navigation */}
        <Typography variant="h6" component="h3" fontWeight={700} gutterBottom>
          {t.home.exploreTitle}
        </Typography>

        {/* Semantic <nav> with plain anchor links for SEO crawlers */}
        <Box
          component="nav"
          aria-label="Site sections"
          sx={{ mb: 2, display: "flex", gap: 2, flexWrap: "wrap" }}
        >
          {QUICK_LINKS.map(({ label, to }) => (
            <Typography
              key={to}
              component={Link}
              to={to}
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "underline",
                fontWeight: 500,
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          {QUICK_LINKS.map(({ label, to }) => (
            <Button
              key={to}
              component={Link}
              to={to}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ textTransform: "none" }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
