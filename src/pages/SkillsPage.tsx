import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
  Grid,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import HandymanIcon from "@mui/icons-material/Handyman";
import { useLanguage } from "../context/LanguageContext";
import SEOHead from "../components/SEOHead";

const ADDITIONAL: string[] = [
  "MapLibre",
  "OpenAPI / Swagger",
  "BookStack",
  "K-Means Clustering",
  "Random Forest",
  "RESTful APIs",
  "Role-Based Access Control (RBAC)",
  "Figma",
  "Orange Data Mining",
];

export default function SkillsPage() {
  const { t } = useLanguage();

  // Map translated level labels to MUI color variants
  const levelKey = (level: string) => {
    if (level === t.skills.levels.intermediate) return "primary";
    if (level === t.skills.levels.basic) return "warning";
    if (level === t.skills.levels.beginner) return "default";
    return "default";
  };

  const SKILL_CATEGORIES = [
    {
      title: t.skills.categories.languages,
      icon: <CodeIcon color="primary" />,
      skills: [
        { name: "Go (Golang)", level: t.skills.levels.intermediate },
        { name: "ReactJS / React 19", level: t.skills.levels.intermediate },
        { name: "TypeScript", level: t.skills.levels.intermediate },
        { name: "Laravel (PHP)", level: t.skills.levels.intermediate },
        { name: "PHP", level: t.skills.levels.beginner },
        { name: "Python", level: t.skills.levels.basic },
        { name: "JavaScript", level: t.skills.levels.basic },
      ],
    },
    {
      title: t.skills.categories.tools,
      icon: <HandymanIcon color="primary" />,
      skills: [
        { name: "Docker", level: t.skills.levels.basic },
        { name: "Git", level: t.skills.levels.intermediate },
        { name: "NATS.io", level: t.skills.levels.intermediate },
        { name: "WebSocket", level: t.skills.levels.intermediate },
        { name: "Firebase Auth", level: t.skills.levels.basic },
        { name: "Tailscale", level: t.skills.levels.basic },
        { name: "Sentry", level: t.skills.levels.basic },
        { name: "Postman", level: t.skills.levels.intermediate },
        { name: "Vite", level: t.skills.levels.intermediate },
        { name: "pnpm", level: t.skills.levels.intermediate },
        { name: "Astral-sh (uv)", level: t.skills.levels.basic },
        { name: "Ollama", level: t.skills.levels.basic },
        { name: "MCP (Model Context Protocol)", level: t.skills.levels.basic },
      ],
    },
    {
      title: t.skills.categories.database,
      icon: <StorageIcon color="primary" />,
      skills: [
        { name: "PostgreSQL", level: t.skills.levels.intermediate },
        { name: "PostGIS", level: t.skills.levels.intermediate },
        { name: "MinIO", level: t.skills.levels.basic },
      ],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <SEOHead
        title={t.seo.skills.title}
        description={t.seo.skills.description}
        path="/skills"
      />
      {/* Page header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
        <BuildIcon color="primary" fontSize="large" />
        <Box>
          <Typography variant="h4" fontWeight={700}>
            {t.skills.pageTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t.skills.pageSubtitle}
          </Typography>
        </Box>
      </Box>

      <Stack spacing={4}>
        {SKILL_CATEGORIES.map((cat) => (
          <Paper
            key={cat.title}
            variant="outlined"
            sx={{ p: 3, borderRadius: 2 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              {cat.icon}
              <Typography variant="h6" fontWeight={700}>
                {cat.title}
              </Typography>
            </Box>

            {/* Legend */}
            <Stack direction="row" spacing={1} mb={2} flexWrap="wrap" gap={1}>
              {([t.skills.levels.intermediate, t.skills.levels.basic, t.skills.levels.beginner] as const).map((lvl) => (
                <Chip
                  key={lvl}
                  label={lvl}
                  color={levelKey(lvl) as "primary" | "warning" | "default"}
                  size="small"
                  variant="filled"
                  sx={{ opacity: 0.7 }}
                />
              ))}
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ alignSelf: "center" }}
              >
                {t.skills.proficiencyLevels}
              </Typography>
            </Stack>

            <Grid container spacing={1}>
              {cat.skills.map(({ name, level }) => (
                <Grid key={name} size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      px: 1.5,
                      py: 1,
                      borderRadius: 1,
                      bgcolor: "action.hover",
                    }}
                  >
                    <Typography variant="body2" fontWeight={500}>
                      {name}
                    </Typography>
                    <Chip
                      label={level}
                      color={levelKey(level) as "primary" | "warning" | "default"}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        ))}

        {/* Additional / misc */}
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <CodeIcon color="primary" />
            <Typography variant="h6" fontWeight={700}>
              {t.skills.additionalTitle}
            </Typography>
          </Box>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {ADDITIONAL.map((item) => (
              <Chip key={item} label={item} size="small" variant="outlined" />
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
