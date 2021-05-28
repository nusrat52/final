import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useSelector, useDispatch } from "react-redux";
import { sebetIncrease, sebetDecrease, deleteItem } from "../../actions/actions";
import { Link } from "react-router-dom";

const yasil = "rgb(0, 158, 127)";
// const tundyasil = "rgb(4, 119, 96)";
// const aciqYasil = "rgb(0, 197, 141)";
// const backBoz = "rgb(245, 245, 245)";
const useStyles = makeStyles({
  yanvrici: {
    height: "100vh",
    backgroundColor: "white",
    width: "420px",
    boxShadow: "rgb(0 0 0 / 16%) 0px 21px 36px",
    transition: "all 0.35s ease-in-out 0s",
    position: "fixed",
    right: "0",
    zIndex: "16",
    bottom: "0",
    ["@media (max-width:600px)"]: {
      height: '80vh',
    
      width: "100%",
      // visibility:"hidden"
      
    },
  },
  yanvericiAction: {
    right: "-450px",
  },
  bas: {
    padding: "40px",
    borderBottom: "0.5px solid lightgray",

    ["@media (max-width:600px)"]: {
      justifyContent:"center"
      
    },

    
  },
  basYazi: {
    color: yasil,
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    fontWeight: "700",
    position: "relative",
    
  },
  xWrapper: {
    position: "absolute",
    backgroundColor: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    top: '-100px',
    left: "10px",
    
  
  },
  butto: {
    color: "gray",
    cursor: "pointer",

    "&:hover": {
      color: "red",
    },
  },
  plusMinus: {
    fontSize: "19px",
    fontWeight: "700",
    borderRadius: "200px",
    overflow: "hidden",
    width: "30px",
    height: "100px",
    backgroundColor: "rgb(247, 247, 247)",
    color: "rgb(13, 17, 54)",
    paddingTop: "7px",
    paddingBottom: "9px",
    color: "gray",
    cursor: "pointer",
  },
  sekil: {
    width: "60px",
    marginRight: "20px",
    marginLeft: "20px",
  },
  lemon: {
    fontSize: "15px",
    fontWeight: "700",
    color: "rgb(13, 17, 54)",
    whiteSpace: "nowrap",
    fontFamily: "Lato, sans-serif",
  },
  ikioniki: {
    fontSize: "15px",
    fontWeight: "400",
    color: "rgb(119, 121, 140)",
  },
  boxi: {
    padding: "40px",
  },
  footer: {
    color: yasil,

      cursor: "pointer",
      borderTop: "0.5px solid lightgray",

  },
  foot: {
    backgroundColor: yasil,
    color: "white",
    padding: "2px",
    marginRight: "10px",
    marginLeft: "10px",
    borderRadius: "48px",
    boxShadow: "rgb(0 0 0 / 16%) 0px 3px 6px",
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  
  doxsan: {
    color: yasil,
    backgroundColor: "white",
    width: "auto",
    height: "44px",
    padding: "0px 30px",
    overflow: "hidden",
    borderRadius: "28px",
    alignItems: "center",
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    fontWeight: "700",
    margin: "0 2px 0 0",
    display: "flex",
  },
  textSenter: {
    textAlign: "center",
    fontSize:"15px",
  },
  w100: {
    height: "100%",
  },
  mb: {
    marginBottom: "20px",
  },
  wr: {
    height: "-webkit-fill-available",
    overflowY: "scroll",
  },
  d600none: {
    ["@media (max-width:600px)"]: {
      display: "none",
      
      
    },
  }
});
function Yanverici({ on, seton, mebleg }) {
  const sebet = useSelector((state) => state.sebet[1]);

    
    
    
    
    
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <div
      className={
        on == true ? classes.yanvrici + " yanvericiAction " : classes.yanvrici
      }
    >
      <Box
        className={classes.w100}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.bas}
        >
          <Box className={classes.basYazi} display="flex" alignItems="center">
          <Box  onClick={() => {
                // filterRef.current.classList.remove('topWh')
               
                  // filterRef.current.closest("."+classes.filterBot).style.display="none"
               
                    seton(!on);
             
                
              }} className={classes.xWrapper} display="flex" justifyContent="center" alignItems="center">
                <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10" style={{width: '12px', height: '12px'}}><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
                
              </Box>
            <div className={"mr-5 "}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19px"
                height="24px"
                viewBox="0 0 23.786 30"
              >
                <g data-name="shopping-bag (3)" transform="translate(-53.023)">
                  <g data-name="Group 2704">
                    <g data-name="Group 17" transform="translate(53.023 5.918)">
                      <g data-name="Group 16">
                        <path
                          data-name="Path 3"
                          d="M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z"
                          transform="translate(-53.023 -101.005)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                    <g data-name="Group 19" transform="translate(59.118)">
                      <g data-name="Group 18">
                        <path
                          data-name="Path 4"
                          d="M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z"
                          transform="translate(-157.039)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {sebet.length} items
          </Box>
          <svg
            onClick={() => {
              seton(!on);
            }}
            className={"mr-5 " + " " + classes.butto+" "+classes.d600none}
            xmlns="http://www.w3.org/2000/svg"
            width="10.003"
            height="10"
            viewBox="0 0 10.003 10"
          >
            <path
              data-name="_ionicons_svg_ios-close (5)"
              d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z"
              transform="translate(-160.5 -160.55)"
              fill="currentColor"
            ></path>
          </svg>
        </Box>

        <Box
          className={classes.wr + " " + "wrr"}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          {sebet.map((obj) => (
            <Box
             key={obj.id}
              className={classes.boxi + " " + "boxi"}
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <Box
                  alignItems="center"
                  className={classes.plusMinus}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <svg
                    onClick={() => {
                      dispatch(
                        sebetIncrease({
                          id: obj.id,
                          price: 'pr.price',
                          unit: 'pr.unit',
                          amL: 'pr.amount_by_unit',
                          title: 'pr.title',
                          sekil: 'pr.main_image',
                        })
                      );
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="12px"
                    viewBox="0 0 12 12"
                  >
                    <g
                      id="Group_3351"
                      data-name="Group 3351"
                      transform="translate(-1367 -190)"
                    >
                      <rect
                        data-name="Rectangle 520"
                        width="12"
                        height="2"
                        rx="1"
                        transform="translate(1367 195)"
                        fill="currentColor"
                      ></rect>
                      <rect
                        data-name="Rectangle 521"
                        width="12"
                        height="2"
                        rx="1"
                        transform="translate(1374 190) rotate(90)"
                        fill="currentColor"
                      ></rect>
                    </g>
                  </svg>
                  {obj.howmany}
                  <svg
                    onClick={() => {
                      dispatch(sebetDecrease({
                        id: obj.id,
                  
                      }));
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12px"
                    height="2px"
                    viewBox="0 0 12 2"
                  >
                    <rect
                      data-name="Rectangle 522"
                      width="12"
                      height="2"
                      rx="1"
                      fill="currentColor"
                    ></rect>
                  </svg>
                </Box>
                <img className={classes.sekil} src={obj.sekil}></img>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <p className={classes.lemon}>{obj.title}</p>
                  <p className={classes.basYazi}>${obj.price}</p>
                  <p className={classes.ikioniki}>
                    {obj.howmany}x{obj.unit}
                  </p>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <p className={classes.lemon + " mr-5"}>$ {obj.sum}</p>
                <svg
                  onClick={() => {
                          dispatch(deleteItem(obj.id))
                            //   for (let i = 0; i < obj.howmany+100; i++){
                            //       dispatch(sebetDecrease({
                            //         id: obj.id,
                              
                            //       }))
                            //   }
                  }}
                  className={"mr-5 " + " " + classes.butto}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.003"
                  height="10"
                  viewBox="0 0 10.003 10"
                >
                  <path
                    data-name="_ionicons_svg_ios-close (5)"
                    d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z"
                    transform="translate(-160.5 -160.55)"
                    fill="currentColor"
                  ></path>
                </svg>
              </Box>
            </Box>
          ))}
        </Box>
<Link

className={"anchor " }
to="/checkout"
>


        <Box className={classes.footer}>
          <h1 className={classes.textSenter}>Do you have voucher</h1>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.foot}
            alignItems="center"
          >
            <p className="ml-5">Checkout</p>
            <p className={classes.doxsan}>${mebleg}</p>
          </Box>
          </Box>
          </Link>
      </Box>
    </div>
  );
}

export default Yanverici;
