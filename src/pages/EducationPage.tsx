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
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArticleIcon from "@mui/icons-material/Article";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <SEOHead
        title={t.seo.education.title}
        description={t.seo.education.description}
        path="/education"
      />
      {/* Page header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
        <SchoolIcon color="primary" fontSize="large" />
        <Box>
          <Typography variant="h4" fontWeight={700}>
            {t.education.pageTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t.education.pageSubtitle}
          </Typography>
        </Box>
      </Box>

      <Stack spacing={4}>
        {DEGREES.map((deg, idx) => (
          <Paper key={idx} variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
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
                  {deg.level}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  fontWeight={600}
                >
                  {deg.institution}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {deg.location}
                </Typography>
              </Box>

              <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                <Chip
                  label={`GPA: ${deg.gpa}`}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>

            {deg.award && (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1.5 }}
              >
                <EmojiEventsIcon sx={{ color: "warning.main", fontSize: 18 }} />
                <Typography
                  variant="body2"
                  color="warning.dark"
                  fontWeight={600}
                >
                  {deg.award}
                </Typography>
              </Box>
            )}

            {deg.highlights.length > 0 && (
              <>
                <Divider sx={{ my: 2 }} />
                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {deg.highlights.map((h, hi) => (
                    <Box key={hi} component="li" sx={{ mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        {h}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Paper>
        ))}
      </Stack>

      {/* Academic Research */}
      <Box mt={6}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <ArticleIcon color="primary" />
          <Typography variant="h5" fontWeight={700}>
            {t.education.researchTitle}
          </Typography>
        </Box>

        <Stack spacing={3}>
          {PUBLICATIONS.map((pub, idx) => (
            <Paper key={idx} variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                {pub.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {t.education.published}: {pub.date} &nbsp;·&nbsp; {pub.journal}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon />}
                sx={{ mt: 1, textTransform: "none" }}
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
