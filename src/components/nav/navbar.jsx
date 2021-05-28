import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import { Link, useLocation } from "react-router-dom";
import Sign from "./modal";
import {  makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Flag from "./flaqs";
import { Typography } from "@material-ui/core";
import { logout } from "../../actions/actions";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";

const yasil = "rgb(0, 158, 127)";
 const aciqYasil = "rgb(0, 197, 141)";

const useStyles = makeStyles({
  navCont: {
    ["@media (max-width:1000px)"]: {
      backgroundColor: "white",
    },
  },

  nav: {
    height: "100px",
    ["@media (max-width:1000px)"]: {
      // display: "none",
      backgroundColor: "white",
    },
  },
  dropButton: {
    backgroundColor: "white",
    borderRadius: "6px",
    color: yasil,
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    border: "1px solid rgb(241, 241, 241)",
    cursor: "pointer",
    position: "relative",
    ["@media (max-width:1000px)"]: {
      // display: "none",
      padding: "0",
    },
  },
  profile: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    // backgroundImage:
    //   "url('https://www.clipartmax.com/png/middle/214-2143742_individuals-whatsapp-profile-picture-icon.png')",
    // backgroundSize: "contain !important",
    // backgroundRepeat:"no-repeat !important",
    cursor: "pointer",
    position: "relative",
    tabIndex: "-1",
    // overflow:"hidden",
  },

  profile2: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundImage:
      "url('https://www.clipartmax.com/png/middle/214-2143742_individuals-whatsapp-profile-picture-icon.png')",
    backgroundSize: "contain !important",
    backgroundRepeat: "no-repeat !important",
    cursor: "pointer",
    position: "relative",
    tabIndex: "-1",
    overflow: "hidden",
  },
  prSekil: {
    width: "100%",
    // height:"100%",
    borderRadius: "50%",
  },
  profilAlt: {
    position: "absolute",
    backgroundColor: "white",
    padding: "40px 35px",
    top: "58px",
    borderRadius: "5px",
    right: "10px",
  },
  bayraqAlt: {
    position: "absolute",
    backgroundColor: "white",
    padding: "20px 15px",
    top: "58px",
    borderRadius: "5px",
    right: "10px",
  },
  prLinks: {
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    fontWeight: "700",
    color: "rgb(13, 17, 54)",
    lineHeight: "1.2em",
    transition: "all 0.15s ease-in-out 0s",
    marginBottom: "20px",
    whiteSpace: "nowrap",
    "&:hover": {
      color: yasil,
    },
  },
  bef: {
    content: "",
    position: "absolute",
    width: "0px",
    height: "0px",
    borderStyle: "solid",
    borderWidth: "0px 8px 9px",
    borderColor: "transparent transparent rgb(255, 255, 255)",
    top: "-8px",
    left: "188px",
    boxShadow: "rgb(142 142 142 / 14%) -4px -4px 8px -3px",
    pointerEvents: "none",
  },
  bef2: {
    content: "",
    position: "absolute",
    width: "0px",
    height: "0px",
    borderStyle: "solid",
    borderWidth: "0px 8px 9px",
    borderColor: "transparent transparent rgb(255, 255, 255)",
    top: "-8px",
    left: "130px",
    boxShadow: "rgb(142 142 142 / 14%) -4px -4px 8px -3px",
    pointerEvents: "none",
  },
  bef3: {
    content: "",
    position: "absolute",
    width: "0px",
    height: "0px",
    borderStyle: "solid",
    borderWidth: "0px 8px 9px",
    borderColor: "transparent transparent rgb(255, 255, 255)",
    top: "-8px",
    left: "100px",
    boxShadow: "rgb(142 142 142 / 14%) -4px -4px 8px -3px",
    pointerEvents: "none",
  },
  grocery: {
    marginLeft: "4px",
    marginRight: "13px",
    fontWeight: "700",
    fontFamily: "Lato, sans-serif",
  },
  logo: {
    marginRight: "40px",
    height: "fit-content",
  },
  navwrapper: {
    width: "100%",
    height: "100px",
    ["@media (max-width:1000px)"]: {
      backgroundColor: "white",
    },
  },

  offer: {
    color: "black",
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    whiteSpace: "nowrap",

    fontWeight: "700",
    "&:hover": {
      color: yasil,
    },
  },
  svg: {
    marginRight: "8px",
  },
  contri: {
    fontSize: "15px",
    fontWeight: "700",
    color: "rgb(13, 17, 54)",
    fontFamily: "Lato, sans-serif",
    marginLeft: "10px",
  },
  addProButton: {
    backgroundColor: aciqYasil,
    color: "white",
    fontFamily: "Lato, sans-serif",
    fontSize: "14px",
    whiteSpace: "nowrap",

    fontWeight: "700",
    padding: "15px",
    "&:hover": {
      backgroundColor: yasil,
    },
  },
  proNavbar: {
    position: "fixed",
    width: "100%",
    zIndex: "2",
    background: "white",
    top: "0",
    boxShadow: "rgb(0 0 0 / 6%) 0px 1px 2px",
  },
  inputWrapper: {
    position: "relative",
    width: "-webkit-fill-available",
    paddingLeft: "30px",
    paddingRight: "30px",
    display: "flex",
    alignItems: "center",
    ["@media (max-width:1000px)"]: {
      display: "none",
    },
  },
  searchInput: {
    width: "100%",
    outline: "none",
    border: "0",
    height: "50px",
    paddingLeft: "50px",
    borderRadius: "7px",
    color: "rgb(119, 121, 140)",
    fontSize: "15px",
    backgroundColor: "rgb(245, 245, 245)",
  },
  inputLogo: {
    position: "absolute",
  },
  navCont: {
    height: "100px",
  },
  hamb: {
    fontSize: "40px",
    marginRight: "15px",
  },
  sidebar: {
    width: "316px",
    position: "fixed",
    height: "100vh",
    backgroundColor: "white",
    // left:"-320px"
    top: "0",
    left: "0",
    transition: "0.5s",
  },
  dNoneMin: {
    ["@media (max-width:1000px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },
  dNonedoqquz: {
    ["@media (min-width:1001px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "none",
    },
  },

  pranimation: {
    // left:"0 !important",
    animation: `$sideba 500ms forwards`,
  },
  "@keyframes sideba": {
    "0%": {
      left: "-345px ",
    },

    "100%": {
      left: "0px ",
    },
  },
});

function Nav({
  proAdd,
  setProAdd,
  setFilterByWord,
  searchValue,
  sidebar,
  setSearchValue,
  navFixed,
  setUpdatePr,
  setSidebarOn,
  sidebarOn,
  setSearchOn,
  prSideRef,
}) {
  const logged = useSelector((state) => state.login.authen);
  const profil = useSelector((state) => state.login.profil);
  const categories = useSelector((state) => state.dataManu.categories);
  const classes = useStyles();
  const [prAlti, setprAlti] = useState(false);
  const [flgAlti, setflgAlti] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const [mindenBoyuk, setMindenBoyuk] = useState("");

  // console.log(, 'side bar profildeki links');

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setMindenBoyuk(true);
    } else {
      setMindenBoyuk(false);
    }
  });

  return (
    <Box
      component="nav"
      display="flex"
      className={
        !location.includes("/profile") ? classes.navCont : classes.proNavbar
      }
    >
      <Box
        className={
          navFixed ? classes.navwrapper + " navbar-fixed" : classes.navwrapper
        }
      >
        <Box
          display="flex"
          justifyContent="space-between"
          component="nav"
          className={classes.nav + " conta"}
        >
          {/* <img src={categories[2].icon_svg}/> */}
          <Box display="flex" alignItems="center">
            <MenuOpenRoundedIcon
              onClick={() => {
                if (location.includes("/profile")) {
                  console.log(
                    prSideRef?.current?.classList[3] == undefined,
                    "sidebarin class lisst uzunlugu"
                  );
                  if (prSideRef?.current?.classList[3] == undefined) {
                    prSideRef?.current?.classList.add(classes.pranimation);
                  } else {
                    prSideRef?.current?.classList.remove(classes.pranimation);
                  }
                }

                setSidebarOn(true);
              }}
              className={classes.hamb + " " + classes.dNonedoqquz}
            />
            <Link onClick={() => setSidebarOn(false)} className="anchor" to="/">
              <img
                className={classes.logo}
                alt="Logo"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDkuMTI0IiBoZWlnaHQ9IjE4Ij48ZyBkYXRhLW5hbWU9Ikdyb3VwIDI4MjkiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkwIiBkPSJNMCAuNjUybDIuMDcyLjAyNkMzLjgxNC42OTkgNS41NjMuNjI3IDcuMjk2Ljc2M2E1LjIgNS4yIDAgMDE0LjggNC4xNjEgNS4yMjIgNS4yMjIgMCAwMS00LjQyMyA2LjQ4NCAyMS42NjIgMjEuNjYyIDAgMDEtMy40MjIuMTE3Yy0uMzkzIDAtLjQ4Ni4xMjQtLjQ4Mi41LjAxOSAxLjcuMDA4IDMuNDA2LjAwOCA1LjEwOXYuNTM0SDB6bTMuODMyIDcuNjY5Yy40NyAwIC45LjAxNyAxLjMxOCAwYTEwLjQ0OSAxMC40NDkgMCAwMDEuNzgxLS4xNTMgMS45NDQgMS45NDQgMCAwMDEuNTI3LTEuOTUgMS45NzQgMS45NzQgMCAwMC0xLjI5My0yLjA0IDEwLjc0OCAxMC43NDggMCAwMC0zLjMzMi0uMjI5eiIgZmlsbD0iIzBkMTEzNiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkxIiBkPSJNMTA5LjEyNCA5LjM2YTQuMjY5IDQuMjY5IDAgMDAtMi4wMTMtLjAxOSAyLjUyMSAyLjUyMSAwIDAwLTEuOSAyLjQzMWMtLjA2OSAxLjc0MS0uMDQ3IDMuNDg1LS4wNjMgNS4yMjd2LjYyN2gtMy41ODFWNS44MDRoMy40NjZ2MS40MjVhMy4yNjYgMy4yNjYgMCAwMTIuMzQ5LTEuNDc3IDEwLjk0NiAxMC45NDYgMCAwMTEuNzQuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkyIiBkPSJNNDguODIzLjY3OGguNTE2YzIuMjM2LjAyIDQuNDc4LS4wNjQgNi43LjA4OWE0LjQxMiA0LjQxMiAwIDAxNC4yODMgMy41ODUgMy44NzYgMy44NzYgMCAwMS0yLjE4MiA0LjQyNS40LjQgMCAwMC0uMDg5LjA2IDExLjAyOCAxMS4wMjggMCAwMTEuNTE1LjkyOSA0LjMzOSA0LjMzOSAwIDAxLjc2NCA1LjQzMSA0Ljc2MSA0Ljc2MSAwIDAxLTQuMTk1IDIuNDI1Yy0yLjM5My4wODQtNC43OTEuMDI3LTcuMTg3LjAzYS41NDYuNTQ2IDAgMDEtLjEzLS4wMzh6bTMuNjYzIDEzLjloMi4xYTcuMDgzIDcuMDgzIDAgMDAuOC0uMDMzIDEuOTMyIDEuOTMyIDAgMDAxLjgxLTEuOCAxLjgxNiAxLjgxNiAwIDAwLTEuNDA2LTJjLTEuMDc4LS4xNjQtMi4xODQtLjE1NS0zLjMwNS0uMjIyem0wLTcuMWMuNzU5IDAgMS40ODguMDE5IDIuMjE2LS4wMDlhMy4xMTkgMy4xMTkgMCAwMC45My0uMTkzIDEuNjUgMS42NSAwIDAwMS4wOTItMS42ODUgMS41NjcgMS41NjcgMCAwMC0xLjIxLTEuNjM0Yy0uOTg3LS4xNi0yLS4xNTktMy4wMjgtLjIyOXoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5MyIgZD0iTTM4LjQ1OCA5LjY4NmMuODQ4LS45MzUgMS43NjEtMS44MiAyLjUyNS0yLjgxOWEyLjU0OCAyLjU0OCAwIDAxMi41LTEuMTE0YzEuMDI1LjEgMi4wNjYuMDIxIDMuMjA4LjAyMWwtNC42MzQgNC45ODIgNC43MzQgNi45Yy0xLjMgMC0yLjUxOS0uMDMtMy43MzcuMDE0YTEuMDY5IDEuMDY5IDAgMDEtMS4wOC0uNTc3Yy0uNzY0LTEuMjE0LTEuNTgzLTIuMzkzLTIuNDE2LTMuNjM5LS40LjQzNi0uNzgxLjgzNi0xLjEzOCAxLjI1OC0uMDcxLjA4NC0uMDU4LjI1Mi0uMDU5LjM4MnYyLjUzNmgtMy41NjdWLjM1OGgzLjU1NHY5LjN6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTQiIGQ9Ik03My40OTMgMTcuNjQ0aC0zLjE5NWwtLjEyNi0xLjE3NGExMi40MyAxMi40MyAwIDAxLTEuMTg1Ljk2OGMtMS40MS45LTQuNDU5Ljg3My01Ljc1Ny0xLjIzNWEzLjQ0NSAzLjQ0NSAwIDAxMi4zMjktNS4yMjhjMS4wNjktLjI1OCAyLjE3MS0uMzg0IDMuMjU3LS41Ny4wOTItLjAxNi4xODMtLjAzMy4yNzUtLjA0N2EuODA5LjgwOSAwIDAwLjc3MS0uNTg3IDEuMDE4IDEuMDE4IDAgMDAtLjI5NS0xLjAyMyAyLjA3MyAyLjA3MyAwIDAwLTIuMDg1LS40MjggMS44MTEgMS44MTEgMCAwMC0xLjMzOCAxLjM0NWMtLjAxNi4wNS0uMDEzLjEwNi0uMDI2LjE1N2ExLjE0MiAxLjE0MiAwIDAxLS4wNjMuMTQzbC0xLjU0Ny0uM2MtLjUxNy0uMS0xLjAxMS0uMjA5LTEuNTQ2LS4zMjFhMy42OSAzLjY5IDAgMDEuODU5LTIuMDc1IDQuNzg5IDQuNzg5IDAgMDEyLjgyMy0xLjY3OCA3LjIzIDcuMjMgMCAwMTQuMTIyLjI2NCAzLjkgMy45IDAgMDEyLjYyOSAzLjc4MWMuMDU5IDEuNjQ4LjAxIDMuMy4wMjQgNC45NS4wMSAxLjAwNy4wNDggMi4wMTYuMDc0IDMuMDU4em0tMy42MS01LjE3NmMtLjQyMy4wNjMtLjgyLjEtMS4yMDcuMTg1YTE0LjY4OCAxNC42ODggMCAwMC0xLjgzNy40NjhjLS40NDkuMTYxLS41NTcuNi0uNTQ4IDEuMDU5YTEuMTMxIDEuMTMxIDAgMDAuNTg1IDEuMDIxIDIuMjM1IDIuMjM1IDAgMDAyLjY1OC0uNzE5IDMuMTc4IDMuMTc4IDAgMDAuMzQ5LTIuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk1IiBkPSJNOTguNTA5IDE3LjYzOWgtMy4ybC0uMTI1LTEuMjI4YS44NjIuODYyIDAgMDAtLjE1NC4xMjljLTEuMzQ1IDEuOTM0LTQuOTE4IDEuODY5LTYuNDE3LjE1OGEzLjQyMyAzLjQyMyAwIDAxMS40NTctNS41NTQgMjkuNzI0IDI5LjcyNCAwIDAxMy4yMzYtLjY1NmMuMjc0LS4wNTMuNTUzLS4wODEuODI2LS4xMzhhLjg4OC44ODggMCAwMC40OS0xLjU2MyAyLjAyNiAyLjAyNiAwIDAwLTIuMDMxLS40ODYgMS44IDEuOCAwIDAwLTEuNDExIDEuMzE2Yy0uMDM0LjEtLjA1LjItLjA4Ni4zNTlsLTMuMTIzLS42MjlhMy45MzEgMy45MzEgMCAwMTEuOTU0LTMuMDM1IDYuNTI3IDYuNTI3IDAgMDE2LjM0My0uMjI0QTMuNjc1IDMuNjc1IDAgMDE5OC40IDkuNDk3Yy4wNjQgMS41ODEuMDIxIDMuMTY3LjAzNyA0Ljc1MS4wMTYgMS4xMTIuMDQ4IDIuMjMuMDcyIDMuMzkxem0tMy41NDUtNS4xODJjLS44LjEyNS0xLjUuMjEzLTIuMTg3LjM0OWEzLjU2MSAzLjU2MSAwIDAwLS45NjYuMzQgMS4wNDcgMS4wNDcgMCAwMC0uNSAxLjA5MiAxLjExNCAxLjExNCAwIDAwLjYzNS45OSAyLjEgMi4xIDAgMDAyLjg1My0xLjMgMTAuNzgyIDEwLjc4MiAwIDAwLjE2NS0xLjQ2OHoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5NiIgZD0iTTMyLjM2NyA5LjU0NGwtMy4wNTguOTE4YTcuMDIzIDcuMDIzIDAgMDAtMS4wMDctMS4yMjcgMi42NTMgMi42NTMgMCAwMC00LjE0NyAxLjU3OCA0LjY0OSA0LjY0OSAwIDAwLS4wMDYgMS43NzMgMi41NjEgMi41NjEgMCAwMDIuMjIyIDIuMDUyIDIuNSAyLjUgMCAwMDIuODMtMS40NDRjLjA1My0uMS4yNDMtLjIyNi4zMy0uMi45NjkuMjc2IDEuOTMxLjU3OSAyLjk1Ni44OTRhNy43NzMgNy43NzMgMCAwMS0uMjguNzkyQTUuNTc2IDUuNTc2IDAgMDEyNi45NTQgMThhNi4yODcgNi4yODcgMCAxMS0uMTYzLTEyLjU2OSA1Ljc1MyA1Ljc1MyAwIDAxNC42MzggMi4wODUgNC42MjUgNC42MjUgMCAwMS45MzggMi4wMjh6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTciIGQ9Ik03NS45NDcgNS43OTJoOS42NzRjLjAwNi4xMjYuMDE4LjI1Mi4wMTguMzc5IDAgLjYzOS0uMDM4IDEuMjgxLjAxMyAxLjkxNmExLjQyNCAxLjQyNCAwIDAxLS40ODMgMS4xODVjLTEuNTcyIDEuNjI3LTMuMTIzIDMuMjc0LTQuNjgxIDQuOTE0LS4wODguMDkzLS4xNjkuMTkyLS4zMDcuMzUxSDg1Ljd2My4xaC05LjljLS4wMS0uMTUtLjAyNi0uMjkxLS4wMjYtLjQzMiAwLS43MzIuMDIyLTEuNDY1LS4wMS0yLjJhMS4yNDEgMS4yNDEgMCAwMS40LS45ODNjMS41MjYtMS42IDMuMDM2LTMuMjA5IDQuNTUxLTQuODE3LjA4LS4wODUuMTU1LS4xNzUuMjc5LS4zMTdoLTUuMDUzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk4IiBkPSJNMTQuNDg1IDE3LjYyNlY1LjgwNWgzLjU2N3YxMS44MjF6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTkiIGQ9Ik0xOC4zODYgMi4xMzhhMi4xIDIuMSAwIDAxLTIuMTQ4IDIuMSAyLjEzOSAyLjEzOSAwIDAxLTIuMDc4LTIuMTRBMi4xNDEgMi4xNDEgMCAwMTE2LjI4Ni4wMDVhMi4wODIgMi4wODIgMCAwMTIuMSAyLjEzM3oiIGZpbGw9IiMwMDhkNzEiLz48L2c+PC9zdmc+"
              />
            </Link>
          </Box>

          {navFixed && (
            <div className={classes.inputWrapper}>
              <svg
                className={classes.inputLogo}
                xmlns="http://www.w3.org/2000/svg"
                width="17px"
                height="18px"
                viewBox="0 0 17.048 18"
                style={{
                  marginLeft: "16px",
                  marginRight: "16px",
                  color: "#212121",
                }}
              >
                <path
                  id="Path_142"
                  data-name="Path 142"
                  d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                  transform="translate(-367.297 -371.285)"
                  fill="currentColor"
                ></path>
              </svg>

              <input
                placeholder="Search your product here"
                onKeyUp={(event) => {
                  if (event.keyCode === 13) {
                    setFilterByWord(searchValue);

                    window.scrollTo(0, sidebar.current.offsetTop);

                    setSearchValue("");
                  }
                }}
                onChange={(event) => {
                  setSearchValue(event.currentTarget.value);
                }}
                className={classes.searchInput}
                value={searchValue}
                type="text"
              />
            </div>
          )}
          <Box display="flex" alignItems="center">
            {!location.includes("/profile") && (
              <>
                <>
                  {" "}
                  <Link
                    className={
                      classes.offer + " anchor mr-25 " + classes.dNoneMin
                    }
                    to="#"
                  >
                    Offer
                  </Link>
                  <Link
                    className={classes.offer + " anchor " + classes.dNoneMin}
                    display="flex"
                    to="#"
                    alignitems="center"
                  >
                    <svg
                      className={classes.svg}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14px"
                      height="14px"
                      viewBox="0 0 14 14"
                    >
                      <path
                        id="Path_111"
                        data-name="Path 111"
                        d="M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0"
                        transform="translate(-262.442 -404.312)"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Need Help</span>
                  </Link>
                </>

                <Box
                  mx={3}
                  onClick={() => {
                    setflgAlti(!flgAlti);
                  }}
                  onBlur={() => setflgAlti(false)}
                  tabIndex="-1"
                  className={classes.dropButton}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-us"
                    viewBox="0 0 640 480"
                    width="25px"
                    height="20px"
                  >
                    <g fillRule="evenodd">
                      <g strokeWidth="1pt">
                        <path
                          fill="#bd3d44"
                          d="M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z"
                          transform="scale(.9375)"
                        ></path>
                        <path
                          fill="#fff"
                          d="M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z"
                          transform="scale(.9375)"
                        ></path>
                      </g>
                      <path
                        fill="#192f5d"
                        d="M0 0h389.1v275.7H0z"
                        transform="scale(.9375)"
                      ></path>
                      <path
                        fill="#fff"
                        d="M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z"
                        transform="scale(.9375)"
                      ></path>
                    </g>
                  </svg>
                  <span className={classes.grocery + " " + classes.dNoneMin}>
                    English
                  </span>

                  {flgAlti && (
                    <Box
                      onClick={(e) => e.stopPropagation()}
                      display="flex"
                      flexDirection="column"
                      className={classes.bayraqAlt}
                    >
                      <Box display="flex" alignItems="center" mb={2}>
                        <Flag />
                        <Typography className={classes.contri}>
                          Chinese
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Flag />
                        <Typography className={classes.contri}>
                          Russia
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Flag />
                        <Typography className={classes.contri}>
                          Azerbaijan
                        </Typography>
                      </Box>
                      <div className={classes.bef3}> </div>
                    </Box>
                  )}
                </Box>
                <Box
                  onClick={() => {
                    setSearchOn(true);
                  }}
                >
                  <svg
                    className={classes.dNonedoqquz}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17px"
                    height="18px"
                    viewBox="0 0 17.048 18"
                  >
                    <path
                      id="Path_142"
                      data-name="Path 142"
                      d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                      transform="translate(-367.297 -371.285)"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Box>
              </>
            )}

            {location.includes("/profile") && (
              <>
                <Button
                  onClick={() => {
                    setProAdd(true);
                    setUpdatePr(false);
                  }}
                  className={classes.addProButton}
                >
                  Add Products
                </Button>
                <Box
                  mx={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.898"
                    height="18"
                    viewBox="0 0 15.898 18"
                  >
                    <path
                      data-name="Path 2062"
                      d="M3756.814,4042.745c-.321,1.887-1.279,2.844-2.816,2.832-1.495-.011-2.448-.987-2.74-2.8-.834-.14-1.684-.218-2.494-.44a7.131,7.131,0,0,1-1.956-.838,1.354,1.354,0,0,1-.333-2.139,7.716,7.716,0,0,0,1.7-4.647,16.446,16.446,0,0,1,.793-3.939,4.785,4.785,0,0,1,4.625-3.188,8.258,8.258,0,0,1,2.4.256,4.649,4.649,0,0,1,3.432,3.795c.3,1.292.441,2.62.646,3.934a7.247,7.247,0,0,0,.836,2.789,6.2,6.2,0,0,0,.573.74,1.577,1.577,0,0,1-.41,2.6,7.794,7.794,0,0,1-2.977.89C3757.661,4042.654,3757.234,4042.695,3756.814,4042.745Zm3.407-2.482a8.64,8.64,0,0,1-1.888-5.015c-.139-1.1-.309-2.195-.547-3.274a3.019,3.019,0,0,0-2.075-2.482,5.458,5.458,0,0,0-1.612-.264c-2.086.031-3.318.688-3.815,2.928-.259,1.167-.388,2.365-.561,3.55a7.6,7.6,0,0,1-1.781,4.458c-.022.023-.019.071-.026.1C3749.689,4041.453,3758.313,4041.456,3760.221,4040.263Zm-4.717,2.583h-2.94a1.47,1.47,0,1,0,2.94,0Z"
                      transform="translate(-3746.087 -4027.577)"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Box>
              </>
            )}
            {!logged && <Sign />}

            {logged && (
              <Box
                tabIndex="-1"
                // style={{background:`url(${profil.image})`,backgroundSize: 'cover'}}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setprAlti(false);
                  }

                  // e.stopPropagation()
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setprAlti(!prAlti);
                  console.log("clicked");
                }}
                className={classes.profile + " " + classes.dNoneMin}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {profil.image && (
                  <Box className={classes.profile2}>
                    <img
                      className={classes.prSekil}
                      src={profil.image}
                      alt="profil"
                    />
                  </Box>
                )}
                {prAlti && (
                  <Box
                    onClick={(e) => e.stopPropagation()}
                    display="flex"
                    flexDirection="column"
                    className={classes.profilAlt}
                  >
                    <Link
                      onClick={() => setprAlti(false)}
                      className={"anchor " + classes.prLinks}
                      to="/profile/product"
                    >
                      Profil
                    </Link>
                    <Link
                      onClick={() => setprAlti(false)}
                      className={"anchor " + classes.prLinks}
                      to="/checkout"
                    >
                      Checkout
                    </Link>
                    <Link
                      onClick={() => setprAlti(false)}
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Checkout Alternative
                    </Link>
                    <Link
                      onClick={() => setprAlti(false)}
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Your Order
                    </Link>
                    <Link
                      onClick={() => setprAlti(false)}
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Order Instance
                    </Link>
                    <Link
                      onClick={() => setprAlti(false)}
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Terms and Services
                    </Link>
                    <Link
                      onClick={() => setprAlti(false)}
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Privacy Services
                    </Link>
                    <Link
                      onMouseDown={() => {
                        dispatch(logout());
                        setprAlti(false);
                      }}
                      to="#"
                      className={"anchor " + classes.prLinks}
                    >
                      Logout
                    </Link>
                    <div className={classes.bef}></div>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Nav;
