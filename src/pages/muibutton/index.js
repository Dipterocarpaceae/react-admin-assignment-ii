import * as React from "react";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import { Title } from "react-admin";
import styles from "../../styles/CssModulesColor.module.css";
import StyledButton from "../../components/CustomizedButton";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/GlobalTheme";

const MUIButton = () => (
  <Card>
    <Title title="MUI Button" />
    <CardContent>
      <Button variant="contained">MUI STANDARD</Button>
    </CardContent>
    <CardContent>
      <Button variant="contained" sx={{ border: "3px solid red", color: "red" }}>
        MUI SX STYLES
      </Button>
    </CardContent>
    <CardContent>
      <Button variant="contained" className={styles.redColor}>
        MUI REACT CSS MODULE
      </Button>
    </CardContent>
    <CardContent>
      <StyledButton variant="contained">MUI STYLED BUTTON</StyledButton>
    </CardContent>
    <CardContent>
      <ThemeProvider theme={theme}>
        <Button variant="contained" className={styles.fontItalic}>
          MUI THEME
        </Button>
      </ThemeProvider>
    </CardContent>
  </Card>
);

export default MUIButton;
