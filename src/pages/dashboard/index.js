import { Card, CardContent, Typography, Grid, CssBaseline } from "@mui/material";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import Navbar from "../components/navbar";
import Image from "next/image";


const Dashboard = () => {
  const currentDate = dayjs().format("MMMM DD, YYYY");
  const currentDay = dayjs().format("dddd");

  const gradientStyle = {
    padding: "20px",
    borderRadius: "5px"
  };

  return (
    <>
      <Navbar/>
      <CssBaseline/>

      <Grid container spacing={6} style={gradientStyle}>
        <Grid item xs={12}>
          <Typography variant="body2" color="#757575">
            Good Morning,
          </Typography>
          <Typography variant="h5">Ricardo Jr. Hermogino</Typography>
        </Grid>
        

        <Grid item xs={6} sx={{ textAlign: "center" }}>
        <Image src="/3d-weather-icons/sun/27.png" alt="sample" width={170} height={130} />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <Typography sx={{ letterSpacing: 8 }}>Sunny Day</Typography>
          <Typography variant="h2">32&deg;C</Typography>
          <Typography>
            <strong>{currentDay}</strong>{" "}
            <span style={{ color: "#757575" }}>{currentDate}</span>
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography sx={{ mb: 2 }} variant="h6">
            You should take an umbrella with you
          </Typography>
          <Typography color="#757575">
            The average temperature for the next 5 days will be 21 degrees, it
            will rain for 7 days
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ backgroundColor: "#292929", borderRadius: 5 }}>
            <CardContent>
              <Grid container spacing={6} sx={{ textAlign: "center" }}>
                <Grid item xs={4}>
                  <Icon icon="uil:cloud-wind" color="#fff" fontSize={45} />
                  <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                    136
                  </Typography>
                  <Typography color="#b3b3b3">Air Quality</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Icon icon="lets-icons:pressure" color="#fff" fontSize={45} />
                  <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                    846hpa
                  </Typography>
                  <Typography color="#b3b3b3">Pressure</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Icon icon="mdi:uv-ray-outline" color="#fff" fontSize={45} />
                  <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                    2
                  </Typography>
                  <Typography color="#b3b3b3">UV</Typography>
                </Grid>

                <Grid item xs={4}>
                  <Icon icon="mingcute:rain-line" color="#fff" fontSize={45} />
                  <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                    4mm
                  </Typography>
                  <Typography color="#b3b3b3">Precipitation</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Icon icon="bx:wind" color="#fff" fontSize={45} />
                  <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                    11km/h
                  </Typography>
                  <Typography color="#b3b3b3">Wind</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Icon icon="ph:eye-bold" color="#fff" fontSize={45} />
                  <Typography variant="h6" color="#fff" sx={{ mt: 1 }}>
                    6.4 km
                  </Typography>
                  <Typography color="#b3b3b3">Visibility</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
