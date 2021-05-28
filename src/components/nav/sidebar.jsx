import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Sign from "./modal";
import {  makeStyles } from "@material-ui/core/styles";
   import { logout } from "../../actions/actions";
import CloseIcon from "@material-ui/icons/Close";
const yasil = "rgb(0, 158, 127)";
 
const useStyles = makeStyles({
  sidebar: {
    width: "316px",
    position: "fixed",
    height: "100vh",
    backgroundColor: "white",
    // left:"-320px"
    top: "0",
    left: "0",
    transition: "0.5s",
    zIndex: "16",
    // paddingLeft: "30px",
    paddingTop: "20px",
    overflowX: "hidden",
    overflowY: "scroll",
  },
  sdprofil: {
    backgroundColor: "rgb(248, 247, 247)",
    padding: "45px",
  },
  xBut: {
    margin: "30px",
    color: "gray",
  },
  prWrapper: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundImage:
      "url('https://www.clipartmax.com/png/middle/214-2143742_individuals-whatsapp-profile-picture-icon.png')",
    backgroundSize: "contain !important",
    backgroundRepeat:"no-repeat !important",
    cursor: "pointer",
    // position: "relative",
    // tabindex: "-1",
    marginRight: "15px",
    
  },
  prSekil: {
    width: "100%",
    height:"100%",
    borderRadius: "50%",
    
  },
  name: {
    fontSize:'15px',
    fontWeight: '700',
    color: 'rgb(13, 17, 54)',
    marginBottom: '10px',
    fontFamily: 'Poppins, sans-serif',
  },
  prLinks: {
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    fontWeight: "500",
    color: "rgb(13, 17, 54)",
    lineHeight: "1.2em",
    transition: "all 0.15s ease-in-out 0s",
    marginBottom: "20px",
    whiteSpace: "nowrap",
    marginLeft:"30px",
    "&:hover": {
      color: yasil,
    },
  },
  of: {
    left: "-350px",
    
  }
});

export default function Sidebar({setSidebarOn, sidebarOn}) {
  const dispatch = useDispatch()
  const logged = useSelector((state) => state.login.authen);
  const profil = useSelector((state) => state.login.profil);
  const classes = useStyles();
  return (
    <div  tabIndex="-1" onBlur={()=>{setSidebarOn(false)}} className={sidebarOn ?classes.sidebar+" sideBarMain": classes.sidebar+" sideBarMain "+classes.of}>
      <CloseIcon onClick={() => {
        setSidebarOn(false)
      }} className={classes.xBut} />
      <Box className={classes.sdprofil} display="flex" justifyContent="center">
        {!logged && <Sign />}
        {logged &&
          <Box display="flex" justifyContent="space-between">
          <Box className={classes.prWrapper} display="flex" justifyContent="center" alignItems="center">
          {profil.image &&
          <img className={classes.prSekil} src={profil.image} alt="profile" />}
     
          </Box >
          

          <Box className={classes.name} display="flex"  alignItems="center">
          <p>  {profil.first_name}  { profil.last_name}</p>
          </Box>
          </Box>
        }
      </Box>

<Box  display="flex" flexDirection="column" mt={3} >
      <Link
                      
                      className={"anchor " + classes.prLinks}
          to="/profile/product"
          onClick={() => {
          setSidebarOn(false)
          }}
                    >
                      Profil
                    </Link>
                    <Link
                        onClick={() => {
                          setSidebarOn(false)
                          }}
                      className={"anchor " + classes.prLinks}
                      to="/checkout"
                    >
                      Checkout
                    </Link>
                    <Link
                      
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Checkout Alternative
                    </Link>
                    <Link
                      
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Your Order
                    </Link>
                    <Link
                      
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Order Instance
                    </Link>
                    <Link
                      className={"anchor " + classes.prLinks}
                      to="#"
                    >
                      Terms and Services
                    </Link>
                    <Link
                  to='#'
                      className={"anchor " + classes.prLinks}
                      to="https://stackoverflow.com/questions/59820954/syntaxerror-unknown-namespace-tags-are-not-supported-by-default"
                    >
                      Privacy Services
                    </Link>
        <Link
          to="#"
                      onMouseDown={() => {
            dispatch(logout());
            
          
              setSidebarOn(false)
        
                       }}
                      className={"anchor " + classes.prLinks}
                    >
          Logout
                    </Link>
                    </Box>
    </div>
  );
}
