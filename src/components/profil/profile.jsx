import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { producSubmit, producUpdate } from "../../actions/actions";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";

const pSekill = React.createRef();

const yasil = "rgb(0, 158, 127)";
const tundyasil = "rgb(4, 119, 96)";
const aciqYasil = "rgb(0, 197, 141)";
const useStyles = makeStyles({
  linkk: {
    fontFamily: "Lato, sans-serif",
    borderRadius: "50px 0px 0px 50px",
    fontWeight: "700",
    fontSize: "16px",
    padding: "20px 55px 20px 30px",
    color: "black",
  },
  activeLink: {
    color: yasil,
    backgroundColor: "rgb(245, 245, 245)",
  },
  links: {
    backgroundColor: "white",
    padding: "20px 0 20px 20px",
    width: "325px",
    height: "100vh",
    position: "fixed",
    top: "101px",
    zIndex: "5",

    ["@media (max-width:1000px)"]: {
     
      left: '-345px',

    },
  },

  pranimation: {
    animation: `$sideba 500ms`,
  },
  "@keyframes sideba": {
    "0%": {
      left:'-345px'
    },

    "100%": {
      left:'0px'
    },
  },


  prTable: {
    zIndex: "3",
    position: "fixed",

    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100vw",
    height: "100vh",
    top: "0",
    right: "0",
    animation: `$fadee 500ms`,
  },



  "@keyframes fadee": {
    "0%": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },

    "100%": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  },

  proTable: {
    backgroundColor: "rgb(245, 245, 245)",
    width: "70%",
    float: "right",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ["@media (max-width:1000px)"]: {
     width:"100%"
      // left: '-345px',

    },


  },
  proFooter: {
    height: "120px",
    backgroundColor: "white",
    width: "100%",
    // position: "fixed",
    bottom: "0",
    paddingLeft: "60px",
    paddingRight: "60px",
  },
  prHead: {
    fontSize: "18px",
    fontFamily: "Lato, sans-serif",
    color: "rgb(22, 31, 106)",
    fontWeight: "700",
    marginLeft: "60px",
    margin: "30px auto 30px 60px",
  },
  proMain: {
    paddingLeft: "60px",
    marginRight: "60px",
    overflowY: "scroll",
    // height: "500px",
  },

  proAnimate: {
    animation: `$myEffect 500ms`,
  },

  "@keyframes myEffect": {
    "0%": {
      transform: "translateX(200%)",
    },

    "100%": {
      transform: "translateX(0)",
    },
  },

  proYazi: {
    color: "rgb(102, 109, 146)",
    fontFamily: "Lato, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
  },
  proUp: {
    backgroundColor: "white",
    padding: "30px",
    width: "60%",
    // marginBottom: "120px",
    ["@media (max-width:1000px)"]: {
     
     width:"100%"
    },
  },
  proUpDashed: {
    border: "2px dashed rgb(230, 230, 230)",
    padding: "30px",
    cursor: "pointer",
    position: "relative",
  },
  drag: {
    fontWeight: "400",
    fontSize: "14px",
    fontFamily: "Lato, sans-serif",
  },
  dragYasil: {
    color: aciqYasil,
    fontWeight: "700",
    fontSize: "16px",
  },
  proInput: {
    width: "100%",
    height: "100%",
    zIndex: "5",
    cursor: "pointer",
    opacity: "0",
    position: "absolute",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
  },
  inputt: {
    width: "100%",
    fontSize: "16px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "500",
    height: "50px",
    backgroundColor: "rgb(245, 245, 245)",
    border: "0",
    paddingLeft: "20px",
    marginBottom: "0px",
    boxSizing: "border-box",

    "&:focus": {
      outlineColor: aciqYasil,
    },
  },
  errorDiv: {
    height: "20px",
    color: "red",
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "5px",
    paddingBottom: "15px",
    marginBottom: "10px",
  },
  inputtNumber: {
    width: "100%",
    fontSize: "16px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "500",
    height: "50px",
    backgroundColor: "rgb(245, 245, 245)",
    border: "0",
    paddingLeft: "20px",
    marginBottom: "0px",
    boxSizing: "border-box",

    "&:focus": {
      outlineColor: aciqYasil,
    },
  },
  textarea: {
    width: "100%",
    fontSize: "16px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "500",
    // height: "50px",
    backgroundColor: "rgb(245, 245, 245)",
    border: "0",
    paddingLeft: "20px",
    marginBottom: "0px",
    boxSizing: "border-box",

    "&:focus": {
      outlineColor: aciqYasil,
    },
  },
  catInput: {
    boxSizing: "border-box",
    height: "60px",
    width: "100%",
    backgroundColor: "rgb(245, 245, 245)",
    paddingLeft: "15px",
    paddingRight: "15px",
    border: "2px solid white",
    position: "relative",
    cursor: "pointer",
  },
  cancelBut: {
    backgroundColor: "white",
    color: "gray",
    fontSize: "14px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    width: "50%",
    margin: 0,
    height: "55px",
    "&:hover": {
      backgroundColor: "rgb(245, 245, 245)",
    },
    // "&:active": {
    //   color: 'gray',

    // }
  },
  createBut: {
    backgroundColor: aciqYasil,
    color: "white",
    fontSize: "14px",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    width: "50%",
    margin: 0,
    height: "55px",
    "&:hover": {
      backgroundColor: yasil,
    },
  },
  xicen: {
    backgroundColor: "white",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    position: "absolute",
    left: "-50px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "lightgray",
    },

    ["@media (max-width:1000px)"]: {
     
      right: '20px !important',
      left:'auto',

    },
  },
  categoriesss: {
    position: "absolute",
    padding: "5px 0",
    backgroundColor: "white",
    width: "100%",

    bottom: "65px",
    boxShadow: "rgb(0 0 0 / 16%) 0px 4px 16px",
    right: "0",
  },
  selectActive: {
    borderColor: yasil,
  },
  categori: {
    color: "rgb(102, 109, 146)",
    fontWeight: "700",
    fontFamily: "Lato, sans-serif",
    fontSize: "14px",
    padding: "10px",
    "&:hover": {
      backgroundColor: "rgb(245, 245, 245)",
    },
  },
  pSekil: {
    width: "100px",
    marginTop: "20px",
  },
  upSeklil: {
    width: "100px",
  },
  column760: {
    ["@media (max-width:1000px)"]: {
     
     flexDirection:"column"

    },
  }
});

function Profile({
  setCatPlh,
  catPlh,
  proAdd,
  img,
  setImg,
  upId,
  setUpId,
  setProAdd,
  updatePr,
  title,
  setTitle,
  categoryI,
  description,
  setCategoryI,
  setDescription,
  priceI,
  setPriceI,
  amL,
  setAmL,
  unit,
  setUnit,
  prSideRef
}) {
  console.log(proAdd, "proadd");
  const logged = useSelector((state) => state.login.authen);
  const classes = useStyles();
  const [catSubOn, setCatSubOn] = useState(false);

  const [xButCatSub, setXButCatSub] = useState(false);

  console.log(
    {
      catPlh,
      proAdd,
      img,
      setImg,
      upId,
      setUpId,
      setProAdd,
      updatePr,
      title,
      setTitle,
      categoryI,
      description,
      setCategoryI,
      setDescription,
      priceI,
      setPriceI,
      amL,
      setAmL,
      unit,
      setUnit,
    },
    "propsdara baxdigim yer"
  );
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    title: false,
    categoryI: false,
    description: false,
    priceI: false,
    amL: false,
    unit: false,
  });
  const categoryData = useSelector((state) => state.dataManu.categories);
  if (!logged) {
    return <Redirect to="/" />;
  }
  return (
    <Box
      className={classes.links}
      display="flex"
      flexDirection="column"
      pl={2}
      component="section"
      ref={prSideRef}
   
    >
      <NavLink
        activeClassName={classes.activeLink}
        className={"anchor " + classes.linkk}
        to="/profile/product"
      >
        <Box component="span" mr={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.6"
            height="13"
            viewBox="0 0 15.6 13"
          >
            <path
              data-name="Path 154"
              d="M299.593,418.656l-3.148-4.494a.9.9,0,0,0-.572-.272.658.658,0,0,0-.573.272l-3.148,4.494h-3.435a.66.66,0,0,0-.716.677v.207l1.789,6.327a1.448,1.448,0,0,0,1.36,1.023h9.3a1.366,1.366,0,0,0,1.359-1.023l1.789-6.327v-.207a.659.659,0,0,0-.716-.677Zm-5.87,0,2.149-3,2.145,3Zm2.149,5.443a1.362,1.362,0,1,1,1.428-1.363,1.4,1.4,0,0,1-1.428,1.363Zm0,0"
              transform="translate(-288 -413.89)"
              fill="currentColor"
            ></path>
          </svg>
        </Box>{" "}
        Product
      </NavLink>

      <NavLink
        activeClassName={classes.activeLink}
        className={"anchor " + classes.linkk}
        to="/profile/category"
      >
        <Box component="span" mr={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.958"
            height="13"
            viewBox="0 0 12.958 13"
          >
            <path
              data-name="Path 321"
              d="M1.015,10.3,1,4.388a.4.4,0,0,1,.564-.373l5.379,2.3a.4.4,0,0,1,.246.371L7.2,12.594a.4.4,0,0,1-.564.373l-5.379-2.3A.4.4,0,0,1,1.015,10.3Zm12.323-5.63L8.375,6.816l.013,5.468,4.963-2.15-.013-5.468m.2-.713a.405.405,0,0,1,.405.4l.014,5.908a.4.4,0,0,1-.244.372L8.347,12.963a.4.4,0,0,1-.565-.37L7.768,6.684a.4.4,0,0,1,.244-.372l5.368-2.325a.4.4,0,0,1,.16-.034ZM7.44.626l-5.149,2.3L7.451,5.2,12.6,2.9,7.44.626m0-.626A.4.4,0,0,1,7.6.034l5.659,2.495a.4.4,0,0,1,0,.74L7.617,5.79a.4.4,0,0,1-.328,0L1.63,3.3a.4.4,0,0,1,0-.74L7.275.035A.4.4,0,0,1,7.439,0Z"
              transform="translate(-1.001)"
              fill="currentColor"
            ></path>
          </svg>
        </Box>{" "}
        Category
      </NavLink>
      <NavLink
        activeClassName={classes.activeLink}
        className={"anchor " + classes.linkk}
        to="/profile/orders"
      >
        <Box component="span" mr={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11.321"
            height="13"
            viewBox="0 0 11.321 13"
          >
            <g data-name="Group 1087" transform="translate(0)">
              <g data-name="Group 1086">
                <path
                  data-name="Path 322"
                  d="M274.867.365A.733.733,0,0,0,274.234,0h-2.718V3.215h5Z"
                  transform="translate(-265.461)"
                  fill="currentColor"
                ></path>
                <path
                  data-name="Path 323"
                  d="M48.821,0H46.077a.733.733,0,0,0-.633.366L43.8,3.215h5.02V0Z"
                  transform="translate(-43.528)"
                  fill="currentColor"
                ></path>
                <path
                  data-name="Path 324"
                  d="M33.057,156.648v8.127a.9.9,0,0,0,.9.9h9.529a.9.9,0,0,0,.9-.9v-8.127Zm7.39,3.418-1.971,1.971a.38.38,0,0,1-.539,0l-.924-.924a.381.381,0,1,1,.539-.539l.654.654,1.7-1.7a.381.381,0,1,1,.539.539Z"
                  transform="translate(-33.057 -152.671)"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </svg>
        </Box>
        Orders
      </NavLink>
      <NavLink
        activeClassName={classes.activeLink}
        className={"anchor " + classes.linkk}
        to="/profile/costumers"
      >
        <Box component="span" mr={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.489"
            height="13"
            viewBox="0 0 12.489 13"
          >
            <g data-name="group (1)" transform="translate(0)">
              <path
                data-name="Path 327"
                d="M43.356,2.708a.328.328,0,0,0,.459-.062,5.053,5.053,0,0,1,8.04,0,.328.328,0,1,0,.521-.4,5.708,5.708,0,0,0-9.081,0A.328.328,0,0,0,43.356,2.708Z"
                transform="translate(-41.591)"
                fill="currentColor"
              ></path>
              <path
                data-name="Path 328"
                d="M228.037,79.44a1.023,1.023,0,1,0,1.023-1.023A1.024,1.024,0,0,0,228.037,79.44Z"
                transform="translate(-218.311 -74.985)"
                fill="currentColor"
              ></path>
              <path
                data-name="Path 329"
                d="M214.438,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306h1.731a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,214.438,130.872Z"
                transform="translate(-202.642 -125.054)"
                fill="currentColor"
              ></path>
              <path
                data-name="Path 330"
                d="M23.247,80.463a1.023,1.023,0,1,0-1.023-1.023A1.024,1.024,0,0,0,23.247,80.463Z"
                transform="translate(-21.507 -74.985)"
                fill="currentColor"
              ></path>
              <path
                data-name="Path 331"
                d="M8.626,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306H8.445a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,8.626,130.872Z"
                transform="translate(-5.839 -125.054)"
                fill="currentColor"
              ></path>
              <path
                data-name="Path 332"
                d="M121,40.028a1.319,1.319,0,1,0-1.319,1.319A1.321,1.321,0,0,0,121,40.028Z"
                transform="translate(-113.433 -37.015)"
                fill="currentColor"
              ></path>
              <path
                data-name="Path 333"
                d="M100.82,110.947h0l-.377-.116a.117.117,0,0,0-.144.072l-.792,2.173a.143.143,0,0,1-.269,0l-.792-2.173a.117.117,0,0,0-.11-.077c-.011,0-.411.121-.411.121a1.169,1.169,0,0,0-.8,1.11v2.3a.117.117,0,0,0,.019.064l.826,1.257v3.181a.117.117,0,0,0,.117.117h2.573a.117.117,0,0,0,.117-.117v-3.181l.826-1.257a.117.117,0,0,0,.019-.064v-2.3A1.161,1.161,0,0,0,100.82,110.947Z"
                transform="translate(-93.126 -105.975)"
                fill="currentColor"
              ></path>
              <path
                data-name="Path 334"
                d="M141.079,111.386a.174.174,0,0,0-.129-.054h-.361a.174.174,0,0,0-.129.054.167.167,0,0,0-.022.2l.193.291-.09.762.178.473a.054.054,0,0,0,.1,0l.178-.473-.09-.762.193-.291A.167.167,0,0,0,141.079,111.386Z"
                transform="translate(-134.525 -106.459)"
                fill="currentColor"
              ></path>
            </g>
          </svg>{" "}
        </Box>
        Customers
      </NavLink>
      <NavLink
        activeClassName={classes.activeLink}
        className={"anchor " + classes.linkk}
        to="/profile/coupons"
      >
        <Box component="span" mr={2}>
          <svg
            data-name="Group 2930"
            xmlns="http://www.w3.org/2000/svg"
            width="11.426"
            height="13"
            viewBox="0 0 11.426 13"
          >
            <g>
              <path
                data-name="Path 3616"
                d="M116.344,226.9a1.513,1.513,0,0,0-.27.027l-.982-1.113,1.958-2.219a1.526,1.526,0,0,0-.135-2.15l-2.839,3.218,0,0-.632.716h-.769l.386.439-.984,1.115a1.523,1.523,0,1,0,1.222,1.493,1.5,1.5,0,0,0-.085-.478l.862-.977.839.952a1.5,1.5,0,0,0-.093.5,1.523,1.523,0,1,0,1.523-1.523Zm-4.57,2.285a.762.762,0,1,1,.762-.762A.764.764,0,0,1,111.774,229.182Zm4.57,0a.762.762,0,1,1,.762-.762A.764.764,0,0,1,116.344,229.182Zm0,0"
                transform="translate(-107.965 -216.944)"
                fill="currentColor"
              ></path>
              <path
                data-name="Path 3617"
                d="M4.605,0V1.574H3.844V0H-2.25V7.668H2.884l.96-1.089v-1.2h.762v.335L6.632,3.425l.571.5A2.287,2.287,0,0,1,7.409,7.15l-.457.518H9.176V0ZM1.178,3.479A1.141,1.141,0,0,1,1.559,5.7v.8H.8V5.7A1.139,1.139,0,0,1,.035,4.621H.8a.381.381,0,1,0,.381-.381A1.141,1.141,0,0,1,.8,2.024v-.83h.762v.83A1.139,1.139,0,0,1,2.32,3.1H1.559a.381.381,0,1,0-.381.381ZM4.605,4.621H3.844V3.859h.762Zm0-1.523H3.844V2.336h.762Zm0,0"
                transform="translate(2.25)"
                fill="currentColor"
              ></path>
            </g>
          </svg>{" "}
        </Box>{" "}
        Coupons
      </NavLink>

      <NavLink
        activeClassName={classes.activeLink}
        className={"anchor " + classes.linkk}
        to="/profile/settings"
      >
        <Box component="span" mr={2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
          >
            <path
              data-name="005-repairing-service"
              d="M12.961,5.778a.423.423,0,0,0-.418-.32,1.435,1.435,0,0,1-.982-2.5.361.361,0,0,0,.04-.49,6.435,6.435,0,0,0-1.03-1.04.362.362,0,0,0-.494.04,1.5,1.5,0,0,1-1.621.364A1.444,1.444,0,0,1,7.577.422a.361.361,0,0,0-.319-.38A6.487,6.487,0,0,0,5.8.039a.362.362,0,0,0-.322.372A1.446,1.446,0,0,1,4.584,1.8a1.5,1.5,0,0,1-1.609-.367.362.362,0,0,0-.491-.041,6.462,6.462,0,0,0-1.051,1.04.362.362,0,0,0,.039.494,1.44,1.44,0,0,1,.363,1.622,1.5,1.5,0,0,1-1.414.879.354.354,0,0,0-.376.319,6.516,6.516,0,0,0,0,1.478.43.43,0,0,0,.426.32,1.426,1.426,0,0,1,1.338.891,1.446,1.446,0,0,1-.364,1.607.361.361,0,0,0-.039.49,6.458,6.458,0,0,0,1.028,1.04.361.361,0,0,0,.495-.039,1.5,1.5,0,0,1,1.62-.364,1.442,1.442,0,0,1,.88,1.411.361.361,0,0,0,.319.38,6.472,6.472,0,0,0,1.462,0,.362.362,0,0,0,.322-.372,1.445,1.445,0,0,1,.89-1.386,1.5,1.5,0,0,1,1.61.366.363.363,0,0,0,.491.041,6.47,6.47,0,0,0,1.051-1.04.361.361,0,0,0-.039-.494,1.44,1.44,0,0,1-.364-1.621,1.455,1.455,0,0,1,1.33-.881l.08,0a.362.362,0,0,0,.38-.319A6.487,6.487,0,0,0,12.961,5.778ZM6.5,10.247A3.747,3.747,0,1,1,9.719,8.421L8.078,6.78A2.3,2.3,0,0,0,5.356,3.666a.26.26,0,0,0-.18.181.254.254,0,0,0,.072.248s.81.816,1.081,1.087a.168.168,0,0,1,.024.121l0,.018a5.181,5.181,0,0,1-.123.793l-.017.017-.018.018a5.107,5.107,0,0,1-.805.125v0l-.014,0H5.361a.173.173,0,0,1-.125-.053c-.282-.282-1.06-1.055-1.06-1.055a.265.265,0,0,0-.189-.084.257.257,0,0,0-.242.2A2.3,2.3,0,0,0,6.859,8L8.518,9.657A3.728,3.728,0,0,1,6.5,10.247Z"
              transform="translate(-0.002 0.001)"
              fill="currentColor"
            ></path>
          </svg>{" "}
        </Box>{" "}
        Settings
      </NavLink>

      {proAdd && (
        <Box className={classes.prTable}>
          <Box className={classes.proTable + " " + classes.proAnimate}>
            <Box
              onClick={() => {
                setProAdd(false);
                setErrors({
                  title: false,
                  categoryI: false,
                  description: false,
                  priceI: false,
                  amL: false,
                  unit: false,
                });
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.xicen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10.003 10"
                width="6px"
                height="6px"
              >
                <path
                  data-name="_ionicons_svg_ios-close (5)"
                  d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z"
                  transform="translate(-160.5 -160.55)"
                  fill="currentColor"
                ></path>
              </svg>
            </Box>
            <h2 className={classes.prHead}>
              {!updatePr && "Add Product"}
              {updatePr && "Update your product"}
            </h2>

            <Box component="main" className={classes.proMain}>
              <Box className={classes.column760} display="flex" justifyContent="space-between">
                <p className={classes.proYazi}>
                  Upload your Product image here
                </p>
                <Box className={classes.proUp}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    className={classes.proUpDashed}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="41px"
                          height="30px"
                          viewBox="0 0 40.909 30"
                        >
                          <g transform="translate(0 -73.091)">
                            <path
                              data-name="Path 2125"
                              d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
                              transform="translate(0)"
                              fill="#e6e6e6"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      <p className={classes.drag}>
                        <span className={classes.dragYasil}>Drag/Upload</span>{" "}
                        your image here.
                      </p>
                    </Box>
                    <input
                      accept="image/png, image/gif, image/jpeg" 
                      onChange={(event) => {
                        setImg(event.currentTarget.files[0]);
                        const va2 = event.target;

                        var reader = new FileReader();

                        reader.onload = function (e) {
                          pSekill.current.src = e.target.result;
                          // setImg()
                        };
                        if(typeof event.currentTarget.files[0]=="object"){
                        reader.readAsDataURL(event.currentTarget.files[0]);}

                        // console.log(img, 'img');
                      }}
                      className={classes.proInput}
                      type="file"
                    />
                  </Box>
                  <Box className={classes.pSekil}>
                    {!updatePr && (
                      <img
                        className={classes.upSeklil}
                        id="sekil"
                        ref={pSekill}
                        src=""
                      />
                    )}

                    {updatePr && (
                      <img
                        className={classes.upSeklil}
                        id="sekil"
                        ref={pSekill}
                        src={img}
                      />
                    )}
                  </Box>
                </Box>
              </Box>

              <Box className={classes.column760} mt={4} display="flex" justifyContent="space-between">
                <p className={classes.proYazi + " " + classes.animatedItem}>
                  Add your Product description and necessary information from
                  here
                </p>
                <Box className={classes.proUp}>
                  <label className={classes.label} for="title">
                    Title
                  </label>

                  <input
                    onChange={(event) => {
                      setTitle(event.currentTarget.value);
                    }}
                    type="text"
                    id="title"
                    value={title}
                    className={classes.inputt}
                  />
                  <div className={classes.errorDiv}>
                    {errors.title && <p className="mp0">{errors.title}</p>}
                  </div>
                  <label className={classes.label} for="price">
                    Price
                  </label>

                  <input
                    onChange={(event) => {
                      setPriceI(event.currentTarget.value);
                    }}
                    value={priceI}
                    type="number"
                    id="price"
                    className={classes.inputtNumber}
                  />
                  <div className={classes.errorDiv}>
                    {errors.priceI && <p className="mp0">{errors.priceI}</p>}
                  </div>
                  <label className={classes.label} for="description">
                    Description
                  </label>

                  <textarea
                    onChange={(event) => {
                      setDescription(event.currentTarget.value);
                    }}
                    value={description}
                    type="textarea"
                    id="description"
                    rows="4"
                    className={classes.textarea}
                  ></textarea>

                  <div className={classes.errorDiv}>
                    {errors.description && (
                      <p className="mp0">{errors.description}</p>
                    )}
                  </div>

                  <label className={classes.label} for="unit">
                    Unit
                  </label>

                  <input
                    onChange={(event) => {
                      setUnit(event.currentTarget.value);
                    }}
                    type="text"
                    id="unit"
                    value={unit}
                    className={classes.inputt}
                  />

                  <div className={classes.errorDiv}>
                    {errors.unit && <p className="mp0">{errors.unit}</p>}
                  </div>

                  <label className={classes.label} for="amu">
                    Amount by Unit
                  </label>

                  <input
                    onChange={(event) => {
                      setAmL(event.currentTarget.value);
                    }}
                    value={amL}
                    type="number"
                    id="amu"
                    className={classes.inputtNumber}
                  />
                  <div className={classes.errorDiv}>
                    {errors.amL && <p className="mp0">{errors.amL}</p>}
                  </div>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.catInput}
                    tabIndex="-1"
                    onFocus={(event) => {
                      event.currentTarget.classList.add("select-active");
                    }}
                    onClick={() => {
                      setCatSubOn(!catSubOn);
                    }}
                    onBlur={(event) => {
                      //   if (!event.currentTarget.contains(event.relatedTarget)) {

                      event.currentTarget.classList.remove("select-active");
                      //   }
                      setCatSubOn(false);
                    }}
                  >
                    <span>{catPlh}</span>{" "}
                    <Box display="flex" alignItems="center">
                      {xButCatSub && (
                        <Box mr={1} display="flex" alignItems="center">
                          <CancelIcon
                            onMouseDown={() => {
                              // setPrice("Product Type");
                              setCatPlh("Product Type");
                              setXButCatSub(false);
                              setCategoryI("");
                            }}
                            className={classes.xicon}
                          />
                        </Box>
                      )}
                      <Box display="flex" alignItems="center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                        >
                          <path
                            data-name="_ionicons_svg_md-arrow-dropdown (2)"
                            d="M128,192l5,5,5-5Z"
                            transform="translate(-128 -192)"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Box>
                    </Box>
                    {catSubOn && (
                      <Box className={classes.categoriesss}>
                        {categoryData.map((cata) => {
                          return (
                            <div
                              key={cata.id}
                              onMouseDown={(event) => {
                                setCatPlh(cata.title);
                                // setXButCat(true);
                                setXButCatSub(true);
                                // xButCatSub(false);
                                setCategoryI(cata.id);
                              }}
                              className={classes.categori}
                            >
                              {cata.title}
                            </div>
                          );
                        })}
                      </Box>
                    )}
                  </Box>

                  <div className={classes.errorDiv}>
                    {errors.categoryI && (
                      <p className="mp0">{errors.categoryI}</p>
                    )}
                  </div>

                  {/* <div>i9ii</div> */}
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.proFooter}
            >
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.cancelBut}
                onClick={() => setProAdd(false)}
              >
                <span style={{ color: "red" }}>Cancel</span>
              </Button>{" "}
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.createBut}
                onClick={() => {
                  // console.log(categoryI);
                  if (
                    title &&
                    description &&
                    title.length < 100 &&
                    !isNaN(parseFloat(priceI).toFixed(2)) &&
                    categoryI &&
                    amL &&
                    unit &&
                    unit.length < 30 &&
                    Number.isInteger(+amL)
                  ) {
                    if (!updatePr) {
                      dispatch(
                        producSubmit({
                          title,
                          categoryI,
                          description,
                          price: parseFloat(priceI).toFixed(2),
                          amount: +amL,
                          unit,
                          img,
                          catPlh,
                        })
                      );
                    } else if (updatePr) {
                      dispatch(
                        producUpdate({
                          title,
                          categoryI,
                          description,
                          price: parseFloat(priceI).toFixed(2),
                          amount: +amL,
                          unit,
                          img,
                          catPlh,
                          id: upId,
                        })
                      );
                    }
                    setErrors({
                      title: false,
                      categoryI: false,
                      description: false,
                      priceI: false,
                      amL: false,
                      unit: false,
                    });
                    pSekill.current.src = "";
                  } else {
                    // console.log(typeof img, "img nin typesi");
                    if (title.length < 1) {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, title: "field is required" };
                      });
                    } else if (title.length > 100) {
                      setErrors((prevErrors) => {
                        return {
                          ...prevErrors,
                          title: "field must be less than 100 character",
                        };
                      });
                    } else {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, title: false };
                      });
                    }
                    if (isNaN(parseFloat(priceI).toFixed(2))) {
                      setErrors((prevErrors) => {
                        return {
                          ...prevErrors,
                          priceI: "enter normal price amount",
                        };
                      });
                    } else {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, priceI: false };
                      });
                    }
                    if (categoryI.length < 1) {
                      setErrors((prevErrors) => {
                        return {
                          ...prevErrors,
                          categoryI: "U must select one category",
                        };
                      });
                    } else {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, categoryI: false };
                      });
                    }
                    if (amL.length < 1) {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, amL: "field is required" };
                      });
                    } else if (!Number.isInteger(+amL)) {
                      setErrors((prevErrors) => {
                        return {
                          ...prevErrors,
                          amL: "field must be integer",
                        };
                      });
                    } else {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, amL: false };
                      });
                    }
                    if (unit.length < 1) {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, unit: "field is required" };
                      });
                    } else if (unit.length > 30) {
                      setErrors((prevErrors) => {
                        return {
                          ...prevErrors,
                          unit: "field must be less than 100 character",
                        };
                      });
                    } else {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, unit: false };
                      });
                    }

                    if (description.length < 1) {
                      setErrors((prevErrors) => {
                        return {
                          ...prevErrors,
                          description: "field is required",
                        };
                      });
                    } else {
                      setErrors((prevErrors) => {
                        return { ...prevErrors, description: false };
                      });
                    }
                  }
                }}
              >
                {!updatePr&&'Create Product'}
                {updatePr&&'Update Product'}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Profile;
