import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../nav/navbar";
import Button from "@material-ui/core/Button";
import { buy, finishSebet } from "../../actions/actions";
import { Redirect } from "react-router-dom";
import  Sidebar  from "../nav/sidebar"
const useStyles = makeStyles({
  main: {
    height: "100vh",
    fontFamily: "Lato, sans-serif",
    width: "30%",
    maxWidth: "1000px",
    minWidth: "250px",
  },
  basliq: {
    fontWeight: "700",
    color: "rgb(13, 17, 54)",
    textAlign: "center",
    marginBottom: "40px",
  },
  how: {
    color: "rgb(13, 17, 54)",
    fontWeight: "700",
  },
  qalani: {
    color: "rgb(119, 121, 140)",
  },
  x: {
    color: "rgb(119, 121, 140)",
    fontSize: "14px",
    alignSelf: "center",
  },
  mx5: {
    marginRight: "5px",
    marginLeft: "5px",
  },
  xet: {},
  button: {
    width: "100%",
    backgroundColor: "rgb(0, 158, 127)",
    marginTop: "50px",

    "&:hover": {
      backgroundColor: "rgb(4, 119, 96)",
    },
  },
});
function Checkout({setSidebarOn, sidebarOn}) {
  const sebet = useSelector((state) => state.sebet[1]);
  let sum = 0;
  sebet.forEach((element) => {
    sum = (parseFloat(sum) + parseFloat(element.sum)).toFixed(2);
    // sum = parseFloat(+sum);
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const logged = useSelector(state => state.login.authen)
  if (!logged) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Navbar setSidebarOn={setSidebarOn} />
      <Sidebar setSidebarOn={setSidebarOn} sidebarOn={sidebarOn} />
      <div className={classes.main + " conta"}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <h3 className={classes.basliq}>Your Orders</h3>
        </Box>
        {sebet.map((obj) => {
          return (
            <Box my={2} display="flex" justifyContent="space-between">
              <Box>
                <span className={classes.how}>{obj.howmany}</span>
                <span className={classes.x}> x </span>
                <span className={classes.qalani}> {obj.title} </span>
                <span className={classes.mx5 + " " + classes.qalani}>|</span>
                <span className={classes.qalani}>{obj.unit}</span>
              </Box>
              <Box component="span" className={classes.qalani}>
                ${obj.price}
              </Box>
            </Box>
          );
        })}

        <Box className={classes.xet}>
          <Box my={3} display="flex" justifyContent="space-between">
            <Box>
              <span className={classes.qalani}> Sub Total </span>
            </Box>
            <Box component="span" className={classes.qalani}>
              ${sum}
            </Box>
          </Box>

          <Box my={2} display="flex" justifyContent="space-between">
            <Box>
              <span className={classes.qalani}> Deliveri Fee </span>
            </Box>
            <Box component="span" className={classes.qalani}>
              $ 0
            </Box>
          </Box>

          <Box my={2} display="flex" justifyContent="space-between">
            <Box>
              <span className={classes.qalani}>Discount</span>
            </Box>
            <Box component="span" className={classes.qalani}>
              $ 0
            </Box>
          </Box>

          <Box my={2} display="flex" justifyContent="space-between">
            <Box>
              <span className={classes.how}>Total</span>
            </Box>
            <Box component="span" className={classes.how}>
              $ 0
            </Box>
          </Box>
          <Button
            onClick={() => {
              sebet.forEach((element) => {
                buy({
                  product: element.id,
                  count: element.howmany,
                });
              });
              setTimeout(() => {
                dispatch(finishSebet());
              }, 1500);
            }}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Buy products
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Checkout;
