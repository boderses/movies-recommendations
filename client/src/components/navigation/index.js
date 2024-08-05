import { useState, useContext, useCallback } from "react";
import {
  Drawer,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Button,
  ListItemText,
  Hidden,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link as RouterLink } from "react-router-dom";
import { AppContext } from "../../providers/appContext";
import { LOCALES } from "../../const";
import { FormattedMessage } from "react-intl";
import translate from "../../utils/translate";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);
  const setLanguage = useCallback((locale) => {
    dispatch({
      type: "setLocale",
      locale,
    });
  }, []);

  const languages = [
    { code: LOCALES.ENGLISH, label: "English" },
    { code: LOCALES.DANISH, label: "Dansk" },
    { code: LOCALES.UKRAINIAN, label: "Українська" },
  ];

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link to="settings">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={translate("navigation.settings")} />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#483D8B" }}>
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Link
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", flexGrow: 1 }}
            >
              <FormattedMessage id="navigation.home" />
            </Typography>
          </Link>
          <Box>
            {languages.map((language) => (
              <Button
                key={language.code}
                disabled={state.locale === language.code}
                sx={{
                  fontSize: '0.65rem',
                  my: 2,
                  color: state.locale === language.code ? "black" : "white",
                  backgroundColor:
                    state.locale === language.code
                      ? "LightSlateGrey"
                      : "transparent",
                  "&.Mui-disabled": {
                    color:
                      state.locale === language.code
                        ? "#000000"
                        : "rgba(0, 0, 0, 0.26)",
                  },
                }}
                onClick={() => setLanguage(language.code)}
              >
                {language.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Button
              component={RouterLink}
              to="settings"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <FormattedMessage id="navigation.settings" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
