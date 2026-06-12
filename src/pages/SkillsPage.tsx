import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Grid,
  LinearProgress,
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

type LevelColor = "success" | "primary" | "warning" | "default";

export default function SkillsPage() {
  const { t } = useLanguage();

  const levelKey = (level: string): LevelColor => {
    if (level === t.skills.levels.advanced) return "success";
    if (level === t.skills.levels.intermediate) return "primary";
    if (level === t.skills.levels.basic) return "warning";
    if (level === t.skills.levels.beginner) return "default";
    return "default";
  };

  const levelProgress = (level: string): number => {
    if (level === t.skills.levels.advanced) return 92;
    if (level === t.skills.levels.intermediate) return 65;
    if (level === t.skills.levels.basic) return 40;
    if (level === t.skills.levels.beginner) return 20;
    return 20;
  };

  const SKILL_CATEGORIES = [
    {
      title: t.skills.categories.languages,
      icon: <CodeIcon color="primary" />,
      skills: [
        { name: "Go (Golang)", level: t.skills.levels.advanced },
        { name: "ReactJS", level: t.skills.levels.advanced },
        { name: "TypeScript", level: t.skills.levels.advanced },
        { name: "Laravel (PHP)", level: t.skills.levels.intermediate },
        { name: "JavaScript", level: t.skills.levels.intermediate },
        { name: "Python", level: t.skills.levels.basic },
        { name: "PHP", level: t.skills.levels.beginner },
      ],
    },
    {
      title: t.skills.categories.tools,
      icon: <HandymanIcon color="primary" />,
      skills: [
        { name: "Git", level: t.skills.levels.advanced },
        { name: "NATS.io", level: t.skills.levels.advanced },
        { name: "WebSocket", level: t.skills.levels.intermediate },
        { name: "Postman", level: t.skills.levels.intermediate },
        { name: "Vite", level: t.skills.levels.intermediate },
        { name: "Docker", level: t.skills.levels.basic },
        { name: "Kubernetes", level: t.skills.levels.basic },
        { name: "Firebase Auth", level: t.skills.levels.basic },
        { name: "Tailscale", level: t.skills.levels.basic },
        { name: "Sentry", level: t.skills.levels.basic },
        { name: "Ollama", level: t.skills.levels.basic },
        { name: "MCP (Model Context Protocol)", level: t.skills.levels.basic },
      ],
    },
    {
      title: t.skills.categories.database,
      icon: <StorageIcon color="primary" />,
      skills: [
        { name: "PostgreSQL", level: t.skills.levels.advanced },
        { name: "MinIO", level: t.skills.levels.advanced },
        { name: "PostGIS", level: t.skills.levels.intermediate },
      ],
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
      <SEOHead
        title={t.seo.skills.title}
        description={t.seo.skills.description}
        path="/skills"
      />

      {/* Page header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
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
          Skills
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
        <BuildIcon color="primary" />
        <Typography variant="h4" fontWeight={700}>
          {t.skills.pageTitle}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" mb={5}>
        {t.skills.pageSubtitle}
      </Typography>

      {/* Proficiency legend */}
      <Stack
        direction="row"
        flexWrap="wrap"
        gap={1.5}
        mb={5}
        sx={{
          p: 2,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          fontWeight={600}
          sx={{ letterSpacing: 0.5, alignSelf: "center", mr: 0.5 }}
        >
          {t.skills.proficiencyLevels}
        </Typography>
        {(
          [
            t.skills.levels.advanced,
            t.skills.levels.intermediate,
            t.skills.levels.basic,
            t.skills.levels.beginner,
          ] as const
        ).map((lvl) => (
          <Box
            key={lvl}
            sx={{ display: "flex", alignItems: "center", gap: 0.75 }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: (th) => {
                  const colors: Record<LevelColor, string> = {
                    success: th.palette.success.main,
                    primary: th.palette.primary.main,
                    warning: th.palette.warning.main,
                    default: th.palette.action.disabled,
                  };
                  return colors[levelKey(lvl)];
                },
                flexShrink: 0,
              }}
            />
            <Typography variant="caption" fontWeight={600} color="text.secondary">
              {lvl}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Stack spacing={4}>
        {SKILL_CATEGORIES.map((cat) => (
          <Box key={cat.title}>
            {/* Category header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2,
                pb: 1.5,
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 1.5,
                  bgcolor: (th) =>
                    th.palette.mode === "dark"
                      ? "rgba(124,77,255,0.12)"
                      : "rgba(21,101,192,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& .MuiSvgIcon-root": { fontSize: "1.1rem" },
                }}
              >
                {cat.icon}
              </Box>
              <Typography variant="h6" fontWeight={700}>
                {cat.title}
              </Typography>
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ ml: "auto", fontVariantNumeric: "tabular-nums" }}
              >
                {cat.skills.length}
              </Typography>
            </Box>

            <Grid container spacing={1.5}>
              {cat.skills.map(({ name, level }) => {
                const color = levelKey(level);
                const progress = levelProgress(level);
                return (
                  <Grid key={name} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                      sx={{
                        px: 2,
                        py: 1.5,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "background.paper",
                        transition: "border-color 200ms, box-shadow 200ms",
                        "&:hover": {
                          borderColor: (th) => {
                            const map: Record<LevelColor, string> = {
                              success: th.palette.success.main,
                              primary: th.palette.primary.main,
                              warning: th.palette.warning.main,
                              default: th.palette.divider,
                            };
                            return map[color];
                          },
                          boxShadow: (th) => {
                            const map: Record<LevelColor, string> = {
                              success: `0 0 0 1px ${th.palette.success.main}30`,
                              primary: `0 0 0 1px ${th.palette.primary.main}30`,
                              warning: `0 0 0 1px ${th.palette.warning.main}30`,
                              default: "none",
                            };
                            return map[color];
                          },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body2" fontWeight={600}>
                          {name}
                        </Typography>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            flexShrink: 0,
                            bgcolor: (th) => {
                              const map: Record<LevelColor, string> = {
                                success: th.palette.success.main,
                                primary: th.palette.primary.main,
                                warning: th.palette.warning.main,
                                default: th.palette.action.disabled,
                              };
                              return map[color];
                            },
                          }}
                        />
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        color={
                          (color === "default" ? "inherit" : color) as
                            | "inherit"
                            | "primary"
                            | "warning"
                            | "success"
                        }
                        sx={{
                          height: 4,
                          borderRadius: 2,
                          bgcolor: "action.disabledBackground",
                          "& .MuiLinearProgress-bar": { borderRadius: 2 },
                        }}
                      />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        ))}

        {/* Additional / misc */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2,
              pb: 1.5,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 1.5,
                bgcolor: (th) =>
                  th.palette.mode === "dark"
                    ? "rgba(124,77,255,0.12)"
                    : "rgba(21,101,192,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& .MuiSvgIcon-root": { fontSize: "1.1rem", color: "primary.main" },
              }}
            >
              <CodeIcon color="primary" />
            </Box>
            <Typography variant="h6" fontWeight={700}>
              {t.skills.additionalTitle}
            </Typography>
            <Typography
              variant="caption"
              color="text.disabled"
              sx={{ ml: "auto", fontVariantNumeric: "tabular-nums" }}
            >
              {ADDITIONAL.length}
            </Typography>
          </Box>
          <Stack direction="row" flexWrap="wrap" gap={1}>
            {ADDITIONAL.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                variant="outlined"
                sx={{
                  borderRadius: 1.5,
                  transition: "border-color 150ms, color 150ms, background 150ms",
                  "&:hover": {
                    borderColor: "primary.main",
                    color: "primary.main",
                    bgcolor: (th) =>
                      th.palette.mode === "dark"
                        ? "rgba(124,77,255,0.08)"
                        : "rgba(21,101,192,0.06)",
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
