import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Infobox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1547754980-3df97fed72a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAINY_URL =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="cardcontainer">
      <Card sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
        <CardMedia
          sx={{ height: 140 }}
          // image={INIT_URL}
          image={
            info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="weather"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Maxtemp = {info.tempmax}&deg;C</div>
            <div>Mintemp = {info.tempmin}&deg;C</div>
            <div>feelslike = {info.feelslike}</div>
            <div>Humidity = {info.humidity}</div>
            <div>Weather = {info.weather}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
