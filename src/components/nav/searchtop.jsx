import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import { Link, useLocation } from "react-router-dom";
import Sign from "./modal";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Flag from "./flaqs";
import { Typography } from "@material-ui/core";
import { logout } from "../../actions/actions";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import SearchIcon from "@material-ui/icons/Search";
const yasil = "rgb(0, 158, 127)";
const tundyasil = "rgb(4, 119, 96)";
const aciqYasil = "rgb(0, 197, 141)";
const backBoz = "rgb(245, 245, 245)";

const useStyles = makeStyles({
  // navCont: {
  //     ['@media (max-width:1000px)']: {

  //         backgroundColor: "white",

  //     }
  // },

  whole: {
    height: "100vh",
    width: "100vw",
    zIndex: "58",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "rgba(20, 10, 10, 0.7)",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    ontSize: "14px",
    fontWeight: "700",
    fontFamily: "Lato, sans-serif",
    width: "100%",

    // ['@media (max-width:1000px)']: {
    // display:"none",

    // }
  },

  searchInput: {
    outline: "none",
    border: "0",
    width: "100%",
    height: "50px",
    paddingLeft: "150px",
    borderBottomLeftRadius: "7px",
    borderTopLeftRadius: "3px",
    fontSize: "16px",
    color: "gray",
  },
  grocery: {
    color: aciqYasil,
    backgroundColor: backBoz,
    padding: "10px",
    marginLeft: "5px",
    borderRadius: "7px",
  },
  searchButton: {
    height: "50px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    paddingRight: "15px",
  },
  wr: {
    backgroundColor: "white",
    height: "90px",
  },
  grWrapper: {
    position: "absolute",
    left: "15px",
  },
  arrow: {
    height: "20px",
    width: "24px",
    marginRight: "13px",
  },
});
function Searchtop({
  setFilterByWord,
  searchValue,
  sidebar,
  setSearchValue,
  setSearchOn,
}) {
  const classes = useStyles();
  return (
    <div className={classes.whole}>
      <Box className={classes.wr} display="flex" alignItems="center">
        <div className={classes.inputWrapper}>
          <input
            placeholder="Search your product here"
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                setFilterByWord(searchValue);

                window.scrollTo(0, sidebar?.current?.offsetTop);
                setSearchValue("");
                setSearchOn(false);
              }
            }}
            onChange={(event) => {
              setSearchValue(event.currentTarget.value);
            }}
            className={classes.searchInput}
            value={searchValue}
            type="text"
          />

          <div
            onClick={() => {
              setFilterByWord(searchValue);

              window.scrollTo(0, sidebar.current.offsetTop);

              setSearchValue("");
              setSearchOn(false);
              console.log();
            }}
            className={classes.searchButton}
          >
            <SearchIcon />
          </div>
          <Box className={classes.grWrapper} display="flex" alignItems="center">
            
            <svg
              onClick={() => {
                setSearchOn(false);
              }}
              className={classes.arrow}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8.003"
              viewBox="0 0 12 8.003"
            >
              <path
                data-name="_ionicons_svg_ios-arrow-round-back (2)"
                d="M116.447,160.177a.545.545,0,0,1,0,.767l-2.53,2.538h9.641a.542.542,0,0,1,0,1.084h-9.641l2.534,2.538a.549.549,0,0,1,0,.767.54.54,0,0,1-.763,0l-3.435-3.46a.608.608,0,0,1-.113-.171.517.517,0,0,1-.042-.208.543.543,0,0,1,.154-.379l3.435-3.46A.531.531,0,0,1,116.447,160.177Z"
                transform="translate(-112.1 -160.023)"
                fill="currentColor"
              ></path>
            </svg>

            <div className={classes.grocery}>Grocery</div>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Searchtop;
