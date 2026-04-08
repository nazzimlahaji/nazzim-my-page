import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorMode } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleMode } = useColorMode();
  const { lang, t, toggleLang } = useLanguage();

  const NAV_LINKS = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.experience, path: "/experience" },
    { label: t.nav.education, path: "/education" },
    { label: t.nav.skills, path: "/skills" },
  ];

  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  const DarkModeToggle = (
    <Tooltip title={mode === "dark" ? t.nav.switchToLight : t.nav.switchToDark}>
      <IconButton
        onClick={toggleMode}
        color="inherit"
        aria-label="Toggle dark mode"
        sx={{
          ml: 1,
          transition: "transform 0.3s",
          "&:hover": { transform: "rotate(20deg)" },
        }}
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );

  const LangToggle = (
    <Tooltip title={lang === "en" ? "Tukar ke Bahasa Melayu" : "Switch to English"}>
      <Button
        onClick={toggleLang}
        size="small"
        variant="outlined"
        color="inherit"
        aria-label="Toggle language"
        sx={{
          ml: 1,
          minWidth: 42,
          fontWeight: 700,
          fontSize: "0.75rem",
          px: 1,
          py: 0.4,
          borderRadius: 1.5,
          borderColor: "currentColor",
          opacity: 0.85,
          transition: "opacity 0.2s, transform 0.2s",
          "&:hover": { opacity: 1, transform: "scale(1.08)" },
        }}
      >
        {lang === "en" ? "MS" : "EN"}
      </Button>
    </Tooltip>
  );

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{ bgcolor: "background.paper" }}
    >
      <Toolbar sx={{ maxWidth: 1100, width: "100%", mx: "auto", px: 2 }}>
        {/* Brand */}
        <Typography
          component={Link}
          to="/"
          variant="h6"
          fontWeight={700}
          sx={{ flexGrow: 1, textDecoration: "none", color: "text.primary" }}
        >
          {t.nav.brand}
        </Typography>

        {isMobile ? (
          <>
            {LangToggle}
            {DarkModeToggle}
            <IconButton onClick={toggleDrawer(true)} aria-label={t.nav.openMenu}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 220 }}
                role="presentation"
                onClick={toggleDrawer(false)}
              >
                <List>
                  {NAV_LINKS.map(({ label, path }) => (
                    <ListItem key={path} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={path}
                        selected={location.pathname === path}
                      >
                        <ListItemText primary={label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {NAV_LINKS.map(({ label, path }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                color="inherit"
                sx={{
                  fontWeight: location.pathname === path ? 700 : 400,
                  borderBottom:
                    location.pathname === path
                      ? "2px solid"
                      : "2px solid transparent",
                  borderRadius: 0,
                  pb: "2px",
                }}
              >
                {label}
              </Button>
            ))}
            {LangToggle}
            {DarkModeToggle}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
