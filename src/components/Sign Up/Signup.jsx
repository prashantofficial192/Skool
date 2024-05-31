import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "../assets/images/10001.svg"
import "./Signup.css"

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 6,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >   <Box sx={{ width: 100 }}>
                    <img src={Logo} alt="Logo" style={{ width: "100%", marginBottom: '20px' }} />
                </Box>
                <Typography component="h1" variant="h5" style={{fontWeight:"bold", marginBottom: '15px'}}>
                    Create your Skool account
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="fname"
                        label="First Name"
                        name="fname"
                        autoComplete="firstName"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="lname"
                        label="Last Name"
                        name="lname"
                        autoComplete="lastName"
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Already have an account? Log in"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}