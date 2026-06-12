import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
  Divider,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArticleIcon from "@mui/icons-material/Article";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useLanguage } from "../context/LanguageContext";
import SEOHead from "../components/SEOHead";

const PUBLICATIONS = [
  {
    title:
      "Unveiling Sarcastic Intent: Web-Based Detection of Sarcasm In News Headlines",
    date: "September 1, 2023",
    journal: "Journal of Computing Research and Innovation",
    url: "https://jcrinn.com/index.php/jcrinn/article/view/365",
  },
];

export default function EducationPage() {
  const { t } = useLanguage();
  const theme = useTheme();

  const DEGREES = [
    {
      level: t.education.degrees.masters.level,
      field: "Computer Science",
      institution: "Universiti Teknologi MARA (UiTM)",
      location: "Shah Alam, Selangor, Malaysia",
      gpa: "3.88",
      award: t.education.degrees.masters.award,
      highlights: t.education.degrees.masters.highlights,
    },
    {
      level: t.education.degrees.bachelors.level,
      field: "Computer Science",
      institution: "Universiti Teknologi MARA (UiTM)",
      location: "Shah Alam, Selangor, Malaysia",
      gpa: "3.58",
      award: t.education.degrees.bachelors.award,
      highlights: t.education.degrees.bachelors.highlights,
    },
    {
      level: t.education.degrees.diploma.level,
      field: "Computer Science",
      institution: "Universiti Teknologi MARA (UiTM)",
      location: "Kota Samarahan, Sarawak, Malaysia",
      gpa: "3.87",
      award: t.education.degrees.diploma.award,
      highlights: t.education.degrees.diploma.highlights,
    },
  ];

  const isDark = theme.palette.mode === "dark";

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <SEOHead
        title={t.seo.education.title}
        description={t.seo.education.description}
        path="/education"
      />

      {/* Page header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
        <Box
          sx={{
            p: 1.25,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.primary.main, isDark ? 0.18 : 0.1),
            display: "flex",
            alignItems: "center",
          }}
        >
          <SchoolIcon color="primary" fontSize="large" />
        </Box>
        <Box>
          <Typography variant="h4" fontWeight={700} lineHeight={1.15}>
            {t.education.pageTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.25}>
            {t.education.pageSubtitle}
          </Typography>
        </Box>
      </Box>

      {/* Degree timeline */}
      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: { xs: 0, sm: 16 },
            top: 8,
            bottom: 8,
            width: 2,
            bgcolor: alpha(theme.palette.primary.main, 0.18),
            borderRadius: 1,
          },
        }}
      >
        <Stack spacing={3}>
          {DEGREES.map((deg, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                gap: { xs: 0, sm: 3 },
                pl: { xs: 0, sm: 0 },
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                  width: 34,
                  pt: "20px",
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    border: `2px solid`,
                    borderColor: "background.paper",
                    boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.25)}`,
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                />
              </Box>

              {/* Card */}
              <Paper
                variant="outlined"
                sx={{
                  flex: 1,
                  p: { xs: 2.5, sm: 3 },
                  borderRadius: 2,
                  borderLeft: `4px solid`,
                  borderLeftColor: "primary.main",
                  transition: "box-shadow 220ms ease, transform 220ms ease",
                  "&:hover": {
                    boxShadow: isDark
                      ? `0 4px 24px ${alpha(theme.palette.primary.main, 0.15)}`
                      : `0 4px 20px ${alpha(theme.palette.common.black, 0.1)}`,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {/* Header row */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 1.5,
                    mb: deg.award || deg.highlights.length > 0 ? 1.5 : 0,
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={700} lineHeight={1.2}>
                      {deg.level}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      fontWeight={600}
                      mt={0.4}
                    >
                      {deg.institution}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mt={0.25}
                    >
                      {deg.location}
                    </Typography>
                  </Box>

                  <Chip
                    label={`GPA ${deg.gpa}`}
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ fontWeight: 700, alignSelf: "flex-start" }}
                  />
                </Box>

                {/* Award badge */}
                {deg.award && (
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      px: 1.5,
                      py: 0.6,
                      borderRadius: 1.5,
                      bgcolor: alpha(theme.palette.warning.main, isDark ? 0.15 : 0.1),
                      border: `1px solid ${alpha(theme.palette.warning.main, 0.3)}`,
                      mb: deg.highlights.length > 0 ? 2 : 0,
                    }}
                  >
                    <EmojiEventsIcon
                      sx={{ color: "warning.main", fontSize: 16 }}
                    />
                    <Typography
                      variant="caption"
                      color="warning.dark"
                      fontWeight={700}
                      sx={{ letterSpacing: 0.2 }}
                    >
                      {deg.award}
                    </Typography>
                  </Box>
                )}

                {/* Highlights */}
                {deg.highlights.length > 0 && (
                  <>
                    <Divider sx={{ my: 1.5 }} />
                    <Stack spacing={1}>
                      {deg.highlights.map((h, hi) => (
                        <Box
                          key={hi}
                          sx={{ display: "flex", gap: 1, alignItems: "flex-start" }}
                        >
                          <CheckCircleOutlineIcon
                            sx={{
                              fontSize: 16,
                              color: "primary.main",
                              mt: "2px",
                              opacity: 0.75,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            lineHeight={1.6}
                          >
                            {h}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </>
                )}
              </Paper>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Academic Research */}
      <Box mt={7}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Box
            sx={{
              p: 0.875,
              borderRadius: 1.5,
              bgcolor: alpha(theme.palette.primary.main, isDark ? 0.18 : 0.1),
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArticleIcon color="primary" fontSize="small" />
          </Box>
          <Typography variant="h5" fontWeight={700}>
            {t.education.researchTitle}
          </Typography>
        </Box>

        <Stack spacing={3}>
          {PUBLICATIONS.map((pub, idx) => (
            <Paper
              key={idx}
              variant="outlined"
              sx={{
                p: 3,
                borderRadius: 2,
                borderLeft: `4px solid`,
                borderLeftColor: alpha(theme.palette.secondary.main, 0.6),
                transition: "box-shadow 220ms ease, transform 220ms ease",
                "&:hover": {
                  boxShadow: isDark
                    ? `0 4px 24px ${alpha(theme.palette.secondary.main, 0.12)}`
                    : `0 4px 20px ${alpha(theme.palette.common.black, 0.09)}`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={700}
                lineHeight={1.45}
                gutterBottom
              >
                {pub.title}
              </Typography>
              <Box
                sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 0.5, mb: 2 }}
              >
                <Chip
                  label={`${t.education.published}: ${pub.date}`}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: "0.72rem" }}
                />
                <Chip
                  label={pub.journal}
                  size="small"
                  variant="filled"
                  sx={{
                    fontSize: "0.72rem",
                    bgcolor: alpha(theme.palette.primary.main, isDark ? 0.18 : 0.08),
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                />
              </Box>
              <Button
                variant="outlined"
                size="small"
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon />}
                sx={{
                  textTransform: "none",
                  borderRadius: 1.5,
                  fontWeight: 600,
                }}
              >
                {t.education.viewPublication}
              </Button>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
