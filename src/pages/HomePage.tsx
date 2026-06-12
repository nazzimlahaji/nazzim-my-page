import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile_pic.jpg";
import SEOHead from "../components/SEOHead";
import { useLanguage } from "../context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  const HIGHLIGHTS = [
    {
      num: "01",
      label: t.home.highlights.backend.label,
      desc: t.home.highlights.backend.desc,
    },
    {
      num: "02",
      label: t.home.highlights.infrastructure.label,
      desc: t.home.highlights.infrastructure.desc,
    },
    {
      num: "03",
      label: t.home.highlights.frontend.label,
      desc: t.home.highlights.frontend.desc,
    },
  ];

  const QUICK_LINKS = [
    {
      label: t.home.quickLinks.experience,
      to: "/experience",
      icon: <WorkIcon />,
    },
    {
      label: t.home.quickLinks.education,
      to: "/education",
      icon: <SchoolIcon />,
    },
    { label: t.home.quickLinks.skills, to: "/skills", icon: <CodeIcon /> },
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
          position: "relative",
          overflow: "hidden",
          background: (th) =>
            th.palette.mode === "dark"
              ? `linear-gradient(135deg, #1a0533 0%, #2d0a6b 45%, #1a1a40 100%)`
              : `linear-gradient(135deg, ${th.palette.primary.dark} 0%, ${th.palette.primary.main} 55%, #1976d2 100%)`,
          color: "primary.contrastText",
          py: { xs: 8, md: 14 },
        }}
      >
        {/* Background depth orbs */}
        <Box
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10%",
              left: "5%",
              width: 360,
              height: 360,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            },
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 5 }}
            alignItems={{ xs: "center", sm: "flex-start" }}
          >
            {/* Avatar with layered ring */}
            <Box sx={{ flexShrink: 0, position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
                }}
              />
              <Avatar
                src={profilePic}
                alt="Mohd Nazzim Bin Lahaji"
                sx={{
                  width: 180,
                  height: 180,
                  border: "3px solid rgba(255,255,255,0.2)",
                  position: "relative",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              />
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              {/* H1 */}
              <Typography
                variant="h3"
                component="h1"
                fontWeight={800}
                sx={{ letterSpacing: -0.5, lineHeight: 1.1, mb: 0.5 }}
              >
                Mohd Nazzim
                <Box component="span" sx={{ display: "block" }}>
                  Bin Lahaji
                </Box>
              </Typography>

              {/* Role with accent bar */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2,
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 3,
                    borderRadius: 2,
                    bgcolor: "rgba(255,255,255,0.6)",
                  }}
                />
                <Typography
                  variant="body1"
                  component="h2"
                  sx={{
                    opacity: 0.85,
                    letterSpacing: 2,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                  }}
                >
                  {t.home.role}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{ opacity: 0.88, maxWidth: 520, lineHeight: 1.75 }}
              >
                {t.home.bio}
              </Typography>

              {/* Contact chips */}
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                mt={3}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                {[
                  {
                    icon: <EmailIcon sx={{ color: "white !important" }} />,
                    label: "nazzimlahaji@gmail.com",
                    href: "mailto:nazzimlahaji@gmail.com",
                  },
                  {
                    icon: <LocationOnIcon sx={{ color: "white !important" }} />,
                    label: "Subang Jaya, Selangor",
                  },
                  {
                    icon: <HomeIcon sx={{ color: "white !important" }} />,
                    label: "Kota Kinabalu, Sabah",
                  },
                ].map(({ icon, label, href }) => (
                  <Chip
                    key={label}
                    icon={icon}
                    label={label}
                    component={href ? "a" : "div"}
                    href={href}
                    clickable={!!href}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.18)",
                      backdropFilter: "blur(8px)",
                      fontSize: "0.78rem",
                      transition: "background 200ms",
                      "&:hover": href
                        ? { bgcolor: "rgba(255,255,255,0.22)" }
                        : undefined,
                    }}
                  />
                ))}
              </Stack>

              {/* Social links */}
              <Stack
                direction="row"
                spacing={1.5}
                mt={2.5}
                justifyContent={{ xs: "center", sm: "flex-start" }}
              >
                <Button
                  variant="contained"
                  size="small"
                  href="https://www.linkedin.com/in/nazzimlahaji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.95)",
                    color: "primary.dark",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "white",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
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
                    borderColor: "rgba(255,255,255,0.5)",
                    color: "white",
                    textTransform: "none",
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
        sx={{ py: { xs: 6, md: 8 } }}
      >
        {/* Section label */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Box
            sx={{
              width: 4,
              height: 24,
              borderRadius: 2,
              bgcolor: "primary.main",
            }}
          />
          <Typography
            variant="overline"
            color="primary"
            sx={{ fontWeight: 700, letterSpacing: 3 }}
          >
            About
          </Typography>
        </Box>
        <Typography variant="h5" component="h2" fontWeight={700} mb={2}>
          {t.home.aboutTitle}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={6}
          sx={{ lineHeight: 1.85, maxWidth: 680 }}
        >
          {t.home.aboutBody}
        </Typography>

        {/* Core Strengths */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Box
            sx={{
              width: 4,
              height: 24,
              borderRadius: 2,
              bgcolor: "primary.main",
            }}
          />
          <Typography
            variant="overline"
            color="primary"
            sx={{ fontWeight: 700, letterSpacing: 3 }}
          >
            {t.home.strengthsTitle}
          </Typography>
        </Box>

        <Grid container spacing={2} mb={6}>
          {HIGHLIGHTS.map(({ num, label, desc }) => (
            <Grid key={num} size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 200ms, box-shadow 200ms",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    borderRadius: "2px 2px 0 0",
                    background: (th) =>
                      `linear-gradient(90deg, ${th.palette.primary.main}, ${th.palette.primary.light})`,
                    opacity: 0,
                    transition: "opacity 200ms",
                  },
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: (th) =>
                      `0 0 0 1px ${th.palette.primary.main}20, 0 6px 24px rgba(0,0,0,0.1)`,
                    "&::before": { opacity: 1 },
                  },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 900,
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: "primary.main",
                    opacity: 0.12,
                    display: "block",
                    mb: 2,
                    letterSpacing: "-0.05em",
                    fontVariantNumeric: "tabular-nums",
                    position: "absolute",
                    top: 12,
                    right: 16,
                  }}
                >
                  {num}
                </Typography>
                <Box
                  sx={{
                    width: 32,
                    height: 3,
                    borderRadius: 2,
                    bgcolor: "primary.main",
                    opacity: 0.4,
                    mb: 2,
                  }}
                />
                <Typography variant="subtitle1" fontWeight={700} mb={1}>
                  {label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Quick navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Box
            sx={{
              width: 4,
              height: 24,
              borderRadius: 2,
              bgcolor: "primary.main",
            }}
          />
          <Typography
            variant="overline"
            color="primary"
            sx={{ fontWeight: 700, letterSpacing: 3 }}
          >
            {t.home.exploreTitle}
          </Typography>
        </Box>

        {/* Semantic nav for SEO — visually hidden */}
        <Box component="nav" sx={{ display: "none" }} aria-label="Site sections">
          {QUICK_LINKS.map(({ label, to }) => (
            <Typography
              key={to}
              component={Link}
              to={to}
              variant="body2"
              sx={{ color: "primary.main", textDecoration: "underline" }}
            >
              {label}
            </Typography>
          ))}
        </Box>

        <Grid container spacing={2}>
          {QUICK_LINKS.map(({ label, to, icon }) => (
            <Grid key={to} size={{ xs: 12, sm: 4 }}>
              <Box
                component={Link}
                to={to}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2.5,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  color: "text.primary",
                  textDecoration: "none",
                  transition: "border-color 200ms, background 200ms, box-shadow 200ms",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: (th) =>
                      th.palette.mode === "dark"
                        ? "rgba(124,77,255,0.08)"
                        : "rgba(21,101,192,0.04)",
                    boxShadow: (th) =>
                      `0 0 0 1px ${th.palette.primary.main}20`,
                    "& .link-arrow": { transform: "translateX(4px)" },
                    "& .link-icon": {
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                    },
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    className="link-icon"
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 1.5,
                      bgcolor: (th) =>
                        th.palette.mode === "dark"
                          ? "rgba(124,77,255,0.12)"
                          : "rgba(21,101,192,0.08)",
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 200ms, color 200ms",
                      "& .MuiSvgIcon-root": { fontSize: "1.1rem" },
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography variant="body2" fontWeight={600}>
                    {label}
                  </Typography>
                </Box>
                <ArrowForwardIcon
                  className="link-arrow"
                  sx={{
                    fontSize: "1rem",
                    color: "text.disabled",
                    transition: "transform 200ms, color 200ms",
                    flexShrink: 0,
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
