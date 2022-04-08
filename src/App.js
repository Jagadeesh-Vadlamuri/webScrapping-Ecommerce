import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const App = () => {
  const [flipdata, setflipData] = useState([]);
  const [amadata, setamaData] = useState([]);
  const [snapdata, setsnapData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/flipkart")
      .then((res) => setflipData(res.data));
    axios
      .get("http://localhost:8080/amazon")
      .then((res) => setamaData(res.data));
    axios
      .get("http://localhost:8080/snapdeal")
      .then((res) => setsnapData(res.data));
  });

  return (
    <div className="container-fluid">
      <SearchBar />
      <div className="container-fluid product-data mt-4">
        <div className="flipkart col-sm-4">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png"
            alt="flipkart-logo"
            style={{ width: 200 }}
          />
          {flipdata.map((item) => {
            return (
              <Card className="card-header bg-warning mt-4" sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="285"
                  image={item.image}
                  alt="Image not Available"
                />
                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" color="text.dark">
                    Rating: {item.rating}
                  </Typography>
                  <Typography variant="p" color="text.dark">
                    {item.price}{" "}
                    <h6 className="finalprice text-dark">{item.finalprice}</h6>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="amazon col-sm-4 mt-4">
          <img
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            alt="amazon-logo"
            style={{ width: 200 }}
          />
          {amadata.map((item) => {
            return (
              <Card className="card-header bg-dark text-white mt-4" sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="285"
                  image={item.image}
                  alt="Image not Available"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" color="text.dark">
                    Rating: {item.rating}
                  </Typography>
                  <Typography variant="p" color="text.dark">
                    {item.price}{" "}
                    <h6 className="finalprice text-white">{item.finalprice}</h6>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="snapdeal col-sm-4">
          <img
            src="https://findvectorlogo.com/wp-content/uploads/2019/03/snapdeal-vector-logo.png"
            alt="snapdeal-logo"
            style={{ width: 200 }}
          />
          {snapdata.map((item) => {
            return (
              <Card className="card-header bg-danger text-white mt-4" sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  height="285"
                  image={item.image}
                  alt="Image not Available"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" color="text.dark">
                    Rating: {item.rating}
                  </Typography>
                  <Typography variant="p" color="text.dark">
                    {item.price}{" "}
                    <h6 className="finalprice text-white">{item.finalprice}</h6>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
