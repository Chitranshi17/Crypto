import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NoImg from "../assets/NoImg.png"
const SearchCoinCard = ({ coin }) => {
  console.log(coin)
  const {large, name, id, symbol} = coin;
  return (
    <Grid
      item
      lg={3}
      md={6}
      sm={4}
      xs={3}
      className="d-flex align-items-center justify-content-center"
    >
      <Paper sx={{ width: "100%", 
                height: {
                  xs: 0,
                  sm: 600,
                  md: 900,
                  lg: 1200,
                  xl: 300,
                },}} className="coinAllCard">
        <Card
          sx={{
            width:"100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="coin-All-Card"
        >
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{
            width: {
              xs: 0,
              sm: 600,
              md: 0,
              lg: 100,
              xl: 140,
            },   
            height: {
              xs: 900,
              sm: 600,
              md: 0,
              lg: 1200,
              xl: 140,
            }, borderRadius: "50%" }}
            image={large ? large : NoImg }
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color={"white"}
              align="center"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="error" align="center"
            sx={{fontWeight:"700"}}>
              {symbol}
            </Typography>
          </CardContent>
          <CardActions>
            
         
           <Button size="small" color="secondary">
            <Link to={`/coindetails/${coin.id}`}>
            More Details
           </Link></Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};

export default SearchCoinCard;
