import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import NoImg from "../assets/NoImg.png";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CartItems = ({ coin }) => {
  // const {id , name , price} = coin

  const { small, name, symbol, data } = coin.item;

  const dispatch = useDispatch();

  // URLSearchParams

  return (
    <>
      <Grid
        item
        lg={3}
        md={6}
        sm={12}
        xs={6}
        className="d-flex align-items-center justify-content-center"
      >
        <Paper
          sx={{
            width: {
              xs: 200,
              sm: 200,
              md: 400,
              lg: 400,
              xl: 400,
            },
            height: {
              xs: 150,
              sm: 180,
              md: 250,
              lg: 300,
              xl: 300,
            },
            margin: "1rem",
          }}
          className="coinAllCard"
        >
          <Card
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "2rem",
            }}
            className="coin-All-Card"
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="50%"
              sx={{ width: "40%", height: "50%", borderRadius: "50%" }}
              image={small ? small : NoImg}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                align="center"
                component="div"
              >
                {name}
              </Typography>
              <Typography variant="body2" align="center" color="text.secondary">
                {symbol}
              </Typography>
              <Typography
                variant="body2"
                align="center"
                color="error"
                sx={{ fontWeight: "700" }}
              >
                {data.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/coindetails/${coin.item.id}`}>
                <Button size="small" color="secondary">
                  More Details
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default CartItems;
