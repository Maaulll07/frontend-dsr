import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";
import MBILogo from "../../assets/MBI_logo.jpeg";

export default function LoginPage() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "cornsilk",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 2,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255, 255, 255)",
          boxShadow: 6,
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CardMedia
              component={"img"}
              sx={{
                height: 200, // Atur tinggi gambar
                objectFit: "scale-down", // Bisa diganti dengan 'contain' tergantung kebutuhan
              }}
              src={MBILogo}
            />
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 4,
            }}
          >
            <TextField
              label="User ID"
              variant="outlined"
              fullWidth
              size="small"
              name="userid"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              size="small"
              name="password"
            />
            <Button variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
