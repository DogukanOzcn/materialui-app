import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme(); // Temayı oluştur

const additionalStyles = {
  socialButton: {
    mt: 2,
  },
};

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Giriş Yap
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Mail Adresi"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifreniz"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Beni hatırla"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Giriş Yap
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="textPrimary">
                  Şifremi Unuttum.
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="textPrimary">
                  {"Hesabın yok mu ? Üye Ol"}
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{ ...additionalStyles.socialButton, bgcolor: "blue" }}
          >
            Facebook ile Giriş Yap
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ ...additionalStyles.socialButton, bgcolor: "red" }}
          >
            Google ile Giriş Yap
          </Button>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            <Link
              color="inherit"
              href="https://www.linkedin.com/in/dogukanozcn/"
            >
              <h4>Doğukan Özcan</h4>
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
