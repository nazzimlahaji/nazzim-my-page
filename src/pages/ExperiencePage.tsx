import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useLanguage } from "../context/LanguageContext";
import SEOHead from "../components/SEOHead";

export default function ExperiencePage() {
  const { t } = useLanguage();

  const JOBS = [
    {
      company: "Tuxuri Sdn. Bhd.",
      role: t.experience.jobs.tuxuriSE.role,
      period: t.experience.jobs.tuxuriSE.period,
      location: "Shah Alam, Selangor, Malaysia",
      bullets: t.experience.jobs.tuxuriSE.bullets,
      tags: [
        "Go",
        "React",
        "TypeScript",
        "Laravel",
        "PHP",
        "PostgreSQL",
        "PostGIS",
        "NATS.io",
        "WebSocket",
        "Docker",
        "MinIO",
        "Python",
        "Ollama",
        "MCP",
      ],
    },
    {
      company: "Tuxuri Sdn. Bhd.",
      role: t.experience.jobs.tuxuriIntern.role,
      period: t.experience.jobs.tuxuriIntern.period,
      location: "Shah Alam, Selangor, Malaysia",
      type: t.experience.internship,
      bullets: t.experience.jobs.tuxuriIntern.bullets,
      tags: [
        "React",
        "TypeScript",
        "MapLibre",
        "PostgreSQL",
        "Docker",
        "REST API",
      ],
    },
  ];

  const featuredTags = Array.from(
    new Set(JOBS.flatMap((job) => job.tags)),
  ).slice(0, 8);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        background: (theme) =>
          theme.palette.mode === "dark"
            ? `linear-gradient(180deg, ${alpha(theme.palette.background.default, 0.98)} 0%, ${alpha(theme.palette.primary.dark, 0.08)} 100%)`
            : `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.main, 0.04)} 100%)`,
      }}
    >
      <SEOHead
        title={t.seo.experience.title}
        description={t.seo.experience.description}
        path="/experience"
      />
      <Container maxWidth="lg">
        <Paper
          component="section"
          elevation={0}
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 5,
            p: { xs: 3, sm: 4, md: 5 },
            mb: { xs: 5, md: 6 },
            border: (theme) =>
              `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
            background: (theme) =>
              theme.palette.mode === "dark"
                ? `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.4)} 0%, ${alpha(theme.palette.background.paper, 0.96)} 55%, ${alpha(theme.palette.background.paper, 1)} 100%)`
                : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${theme.palette.background.paper} 45%, ${alpha(theme.palette.primary.light, 0.08)} 100%)`,
            boxShadow: (theme) =>
              theme.palette.mode === "dark"
                ? `0 24px 60px ${alpha(theme.palette.common.black, 0.28)}`
                : `0 24px 60px ${alpha(theme.palette.primary.main, 0.12)}`,
            "&::before": {
              content: '""',
              position: "absolute",
              top: { xs: -80, md: -120 },
              right: { xs: -100, md: -40 },
              width: { xs: 220, md: 320 },
              height: { xs: 220, md: 320 },
              borderRadius: "50%",
              background: (theme) =>
                `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.18)} 0%, transparent 70%)`,
            },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 6 }}
          >
            <Box sx={{ flex: 1, position: "relative", zIndex: 1 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
              >
                <Box
                  sx={{
                    display: "grid",
                    placeItems: "center",
                    width: 52,
                    height: 52,
                    borderRadius: "18px",
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.14),
                    color: "primary.main",
                  }}
                >
                  <WorkIcon fontSize="large" />
                </Box>
                <Chip
                  label={t.experience.pageTitle}
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                    borderRadius: 999,
                  }}
                />
              </Box>

              <Typography
                variant="h3"
                component="h1"
                fontWeight={800}
                sx={{
                  maxWidth: 620,
                  letterSpacing: -0.8,
                  lineHeight: 1.05,
                  mb: 1.5,
                  fontSize: { xs: "2.2rem", md: "3.2rem" },
                }}
              >
                {t.experience.pageTitle}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 620, lineHeight: 1.8 }}
              >
                {t.experience.pageSubtitle}
              </Typography>
            </Box>
          </Stack>
        </Paper>

        <Box
          component="section"
          sx={{
            position: "relative",
            mb: { xs: 6, md: 7 },
            "&::before": {
              content: '""',
              display: { xs: "none", md: "block" },
              position: "absolute",
              left: 22,
              top: 12,
              bottom: 12,
              width: 2,
              borderRadius: 999,
              background: (theme) =>
                `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.55)} 0%, ${alpha(theme.palette.primary.main, 0.08)} 100%)`,
            },
          }}
        >
          <Stack spacing={3.5}>
            {JOBS.map((job, index) => (
              <Box
                key={`${job.company}-${job.role}`}
                sx={{ position: "relative", pl: { xs: 0, md: 7 } }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    left: 10,
                    top: 32,
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    border: (theme) =>
                      `6px solid ${theme.palette.background.default}`,
                    backgroundColor:
                      index === 0 ? "primary.main" : "background.paper",
                    boxShadow: (theme) =>
                      `0 0 0 1px ${alpha(theme.palette.primary.main, 0.4)}`,
                  }}
                />

                <Paper
                  elevation={0}
                  sx={{
                    overflow: "hidden",
                    borderRadius: 4,
                    border: (theme) =>
                      `1px solid ${alpha(theme.palette.divider, 0.9)}`,
                    background: (theme) =>
                      theme.palette.mode === "dark"
                        ? `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0.98)} 0%, ${alpha(theme.palette.primary.dark, 0.08)} 100%)`
                        : `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
                    boxShadow: (theme) =>
                      theme.palette.mode === "dark"
                        ? `0 18px 40px ${alpha(theme.palette.common.black, 0.22)}`
                        : `0 18px 36px ${alpha(theme.palette.primary.main, 0.08)}`,
                  }}
                >
                  <Box
                    sx={{
                      px: { xs: 2.5, md: 3 },
                      py: 2.5,
                      borderBottom: (theme) =>
                        `1px solid ${alpha(theme.palette.divider, 0.7)}`,
                      background: (theme) =>
                        alpha(theme.palette.primary.main, 0.05),
                    }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      justifyContent="space-between"
                    >
                      <Box>
                        <Stack
                          direction="row"
                          flexWrap="wrap"
                          gap={1}
                          alignItems="center"
                          mb={1}
                        >
                          <Typography
                            variant="h5"
                            fontWeight={800}
                            sx={{ lineHeight: 1.1 }}
                          >
                            {job.role}
                          </Typography>
                          {job.type && (
                            <Chip
                              label={job.type}
                              size="small"
                              color="secondary"
                              sx={{ fontWeight: 700, borderRadius: 999 }}
                            />
                          )}
                        </Stack>

                        <Typography
                          variant="subtitle1"
                          color="primary"
                          fontWeight={700}
                        >
                          {job.company}
                        </Typography>
                      </Box>

                      <Stack
                        spacing={1}
                        alignItems={{ xs: "flex-start", sm: "flex-end" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                          }}
                        >
                          <CalendarTodayIcon
                            sx={{ fontSize: 16, color: "text.secondary" }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            fontWeight={500}
                          >
                            {job.period}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                          }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 16, color: "text.secondary" }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            fontWeight={500}
                          >
                            {job.location}
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>

                  <Box sx={{ px: { xs: 2.5, md: 3 }, py: 2.5 }}>
                    <Stack
                      spacing={1.4}
                      component="ul"
                      sx={{ m: 0, p: 0, listStyle: "none" }}
                    >
                      {job.bullets.map((bullet) => (
                        <Box
                          key={bullet}
                          component="li"
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "12px 1fr",
                            gap: 1.5,
                            alignItems: "start",
                          }}
                        >
                          <Box
                            aria-hidden="true"
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              mt: 0.9,
                              bgcolor: (theme) =>
                                alpha(theme.palette.primary.main, 0.75),
                              boxShadow: (theme) =>
                                `0 0 0 4px ${alpha(theme.palette.primary.main, 0.12)}`,
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.8 }}
                          >
                            {bullet}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  <Divider />

                  <Box sx={{ px: { xs: 2.5, md: 3 }, py: 2.25 }}>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {job.tags.map((tag) => (
                        <Chip
                          key={`${job.role}-${tag}`}
                          label={tag}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            borderRadius: 999,
                            color: "primary.main",
                            bgcolor: (theme) =>
                              alpha(theme.palette.primary.main, 0.08),
                            border: (theme) =>
                              `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box component="section">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                width: 44,
                height: 44,
                borderRadius: "14px",
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
                color: "primary.main",
              }}
            >
              <CodeIcon />
            </Box>
            <Typography variant="h4" fontWeight={800}>
              {t.experience.projectsTitle}
            </Typography>
          </Box>

          <Paper
            variant="outlined"
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              p: { xs: 2.5, md: 3.5 },
              background: (theme) =>
                theme.palette.mode === "dark"
                  ? `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 1)} 0%, ${alpha(theme.palette.primary.dark, 0.2)} 100%)`
                  : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.primary.light, 0.12)} 100%)`,
              borderColor: (theme) => alpha(theme.palette.primary.main, 0.16),
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? `0 18px 44px ${alpha(theme.palette.common.black, 0.18)}`
                  : `0 18px 44px ${alpha(theme.palette.primary.main, 0.08)}`,
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: (theme) =>
                  `linear-gradient(120deg, transparent 0%, ${alpha(theme.palette.primary.main, 0.04)} 55%, transparent 100%)`,
                pointerEvents: "none",
              },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", md: "center" }}
            >
              <Box sx={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
                <Typography variant="h5" fontWeight={800} gutterBottom>
                  {t.experience.boilerplateTitle}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8 }}
                >
                  {t.experience.boilerplateDesc}
                </Typography>
              </Box>

              <Button
                variant="contained"
                size="large"
                href="https://github.com/nazzimlahaji/go-api-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon />}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  minHeight: 48,
                  px: 2.5,
                  borderRadius: 999,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  boxShadow: (theme) =>
                    `0 12px 24px ${alpha(theme.palette.primary.main, 0.22)}`,
                }}
              >
                {t.experience.viewOnGitHub}
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
