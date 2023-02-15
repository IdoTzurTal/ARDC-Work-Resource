import {
  PropTypes,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function HomePage() {
  const WhiteLink = styled(NavLink)({
    color: "white",
    textDecoration: "none",
  });

  return (
    <div>
      <Grid item xs={12} md={6}>
        <CardActionArea>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: "100vw", display: { xs: "none", sm: "block" } }}
              image="https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home image"
            />
          </Card>
        </CardActionArea>

        <CardContent sx={{ flex: 1 }}>
          <div
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography component="h2" variant="h5">
              ARDC Resource
            </Typography>
            <Typography variant="subtitle1" color="primary.dark">
              Meet your hiring needs while making an impact
            </Typography>
          </div>
        </CardContent>

        <CardActionArea>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ flex: 1, m: 1 }}>
              <Typography component="p" variant="h5">
                Founded in 2004, ARDC is an Israeli non-profit organization that
                works to promote social inclusion and economic mobility for
                refugees through career guidance, job training, educational
                programming, and job placement.
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: "50vw",
                display: { xs: "none", sm: "block" },
              }}
              image="https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home image"
            />
          </Card>
        </CardActionArea>
        <Card sx={{ p: 3 }}>
          <Typography variant="body1" color="primary.dark">
            We meet can help you meet your hiring needs with qualified, skilled,
            and diligent employees from Israel's refugee communities.
          </Typography>
          <Button color="primary" variant="contained" sx={{ m: 2 }}>
            <WhiteLink to="/Register">Join now</WhiteLink>
          </Button>
        </Card>
      </Grid>
    </div>
  );
}

export default HomePage;
