import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
  Divider,
  Button,
} from "@mui/material";
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
        "Go", "React", "TypeScript", "Laravel", "PHP",
        "PostgreSQL", "PostGIS", "NATS.io", "WebSocket",
        "Docker", "MinIO", "Python", "Ollama", "MCP",
      ],
    },
    {
      company: "Tuxuri Sdn. Bhd.",
      role: t.experience.jobs.tuxuriIntern.role,
      period: t.experience.jobs.tuxuriIntern.period,
      location: "Shah Alam, Selangor, Malaysia",
      type: t.experience.internship,
      bullets: t.experience.jobs.tuxuriIntern.bullets,
      tags: ["React", "TypeScript", "MapLibre", "PostgreSQL", "Docker", "REST API"],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <SEOHead
        title={t.seo.experience.title}
        description={t.seo.experience.description}
        path="/experience"
      />
      {/* Page header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
        <WorkIcon color="primary" fontSize="large" />
        <Box>
          <Typography variant="h4" fontWeight={700}>
            {t.experience.pageTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t.experience.pageSubtitle}
          </Typography>
        </Box>
      </Box>

      <Stack spacing={4}>
        {JOBS.map((job, idx) => (
          <Paper key={idx} variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            {/* Role & company */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  {job.role}
                  {job.type && (
                    <Chip
                      label={job.type}
                      size="small"
                      color="secondary"
                      sx={{ ml: 1, verticalAlign: "middle" }}
                    />
                  )}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  fontWeight={600}
                >
                  {job.company}
                </Typography>
              </Box>

              <Stack
                spacing={0.5}
                alignItems={{ xs: "flex-start", sm: "flex-end" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <CalendarTodayIcon
                    sx={{ fontSize: 14, color: "text.secondary" }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {job.period}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <LocationOnIcon
                    sx={{ fontSize: 14, color: "text.secondary" }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {job.location}
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Bullet points */}
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {job.bullets.map((bullet, bi) => (
                <Box key={bi} component="li" sx={{ mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    {bullet}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Tags */}
            <Stack direction="row" flexWrap="wrap" gap={0.8} mt={2}>
              {job.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  color="primary"
                />
              ))}
            </Stack>
          </Paper>
        ))}
      </Stack>

      {/* Projects */}
      <Box mt={6}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <CodeIcon color="primary" />
          <Typography variant="h5" fontWeight={700}>
            {t.experience.projectsTitle}
          </Typography>
        </Box>

        <Stack spacing={3}>
          {/* Boilerplate repo */}
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="subtitle1" fontWeight={700} gutterBottom>
              {t.experience.boilerplateTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {t.experience.boilerplateDesc}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              href="https://github.com/nazzimlahaji/go-api-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewIcon />}
              sx={{ mt: 1, textTransform: "none" }}
            >
              {t.experience.viewOnGitHub}
            </Button>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
}
