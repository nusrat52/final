import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
 import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from '@material-ui/core/Button';

import { producDelete } from "../../actions/actions"
import DeleteIcon from '@material-ui/icons/Delete';
import AOS from 'aos';
import "aos/dist/aos.css";
const yasil = "rgb(0, 158, 127)";
const tundyasil = "rgb(4, 119, 96)";
const aciqYasil = "rgb(0, 197, 141)";
// const screen=(screen.availWidth-345)+"px"
const useStyles = makeStyles({
  main: {
    // width: screen,
    marginLeft: "345px",
    padding: "40px",
    marginTop: "100px",
    backgroundColor:"rgba(245, 245, 245, 0.493)",
    ["@media (max-width:1000px)"]: {
     
      flexDirection: "column",
      marginLeft: "0px",

    },
  },
  selectFielt: {
    backgroundColor: "white",
    padding: "30px",
    justifyContent: "space-between",
    ["@media (max-width:770px)"]: {
     
      flexDirection: "column",
      
    },
  },
  pro: {
    fontFamily: "Lato, sans-serif",
    fontSize: "18px",
    fontWeight: "700",
  },
  selects: {
    width: "80%",
    ["@media (max-width:770px)"]: {
     
      flexDirection: "column",
     
    },
  },
  select: {
    width: "25%",
    boxSizing: "content-box",
    backgroundColor: "rgb(245, 245, 245)",
    paddingLeft: "15px",
    paddingRight: "15px",
    border: "2px solid white",
    position: "relative",
    cursor: "pointer",
    ["@media (max-width:770px)"]: {
     
      width: "100%",
      height: "50px",
      
     
    },
  },
  selectActive: {
    borderColor: yasil,
  },
  categoriess: {
    position: "absolute",
    padding: "5px 0",
    backgroundColor: "white",
    width: "100%",
    zIndex: "2",
    top: "60px",
    boxShadow: "rgb(0 0 0 / 16%) 0px 4px 16px",
    right: "0",
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
  xicon: {
    fontSize: "12px !important",
  },
  input: {
    backgroundColor: "rgb(245, 245, 245)",
    width: "50%",
    border: "2px solid white",
    color: "black",
    fontSize: "18px",
    outlineColor: yasil,
    ["@media (max-width:770px)"]: {
     
      width: "100%",
      height:"50px"
     
    },

    // "&:focus": {
    //   borderColor: yasil+" !important",
    // },
  },
  flexCont: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  col: {
    width: "23%",
    backgroundColor: "white",
    position: "relative",
    paddingLeft: "20px",
    paddingBottom: "30px",
    marginBottom: "20px",
    cursor: "pointer",
    ["@media (max-width:1000px)"]: {
     width:"31%"
     
    },

    ["@media (max-width:770px)"]: {
      width:"48%"
      
    },
    ["@media (max-width:600px)"]: {
      width:"100%"
      
     },
  },
  sekil: {
    width: "93%",
  },
  product: {},

  amound: {
    color: "rgb(102, 109, 146)",
    fontSize: "14px",
  },
  priceEnd: {
    color: "rgb(102, 109, 146)",
    fontFamily: "Lato, sans-serif",
    fontSize: "11px",
    fontWeight: "400",
    textDecoration: "line-through",
  },
  price: {
    color: "rgb(0, 197, 141)",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    fontSize: "14px",
    marginRight: "15px",
  },
  button: {
    marginRight:"20px"
  }
});

function Product( {  setCatPlh, proAdd, setUpdatePr,  setImg, setProAdd,setUpId,   setUnit,  setAmL, setPriceI,  setDescription, setCategoryI, setTitle}) {
  const logged = useSelector((state) => state.login.authen);
  const classes = useStyles();
  const [catOn, setcatOn] = useState(false);
  const [category, setCategory] = useState("Category Type");
  const [xButCat, setXButCat] = useState(false);

  const [priOn, setpriOn] = useState(false);
  const [price, setPrice] = useState("Price");
  const [xButPri, setXButPri] = useState(false);
  const categories = useSelector((state) => state.dataManu.categories);
  const ownProducts = useSelector((state) => state.dataManu.ownProducts);
  const [input, setInput] = useState("")

  const [arr, setArr] = useState(ownProducts);
  const [catTranz, setCatTranz] = useState(true);

  const categoryData = useSelector((state) => state.dataManu.categories);

  const dispatch = useDispatch();
useEffect(() => {
  AOS.init({
    duration: 700,
    
  });
})
  return (
    <Box component="main" className={classes.main}>
      <Box display="flex" className={classes.selectFielt}>
        <h2 className={classes.pro}>Products</h2>
        <Box className={classes.selects} display="flex">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.select}
            tabIndex="-1"
            onFocus={(event) => {
              event.currentTarget.classList.add("select-active");
            }}
            onClick={() => {
              setcatOn(!catOn);
            }}
            onBlur={(event) => {
              //   if (!event.currentTarget.contains(event.relatedTarget)) {

              event.currentTarget.classList.remove("select-active");
              //   }
              setcatOn(false);
            }}
          >
            <span>{category}</span>{" "}
            <Box display="flex" alignItems="center">
              {xButCat && (
                <Box mr={1} display="flex" alignItems="center">
                  <CancelIcon
                    onMouseDown={() => {
                      setXButCat(false);
                      setCategory("Category Type");
                      setCatTranz(true);
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
            {catOn && (
              <Box className={classes.categoriess}>
                {categories.map((cat) => (
                  <div
                    onMouseDown={(event) => {
                      setCategory(cat.title);
                      setXButCat(true);
                      if (cat.title == "Category Type") {
                        setCatTranz(true);
                      } else {
                        setCatTranz(false);
                      }
                    }}
                    className={classes.categori}
                  >
                    {cat.title}
                  </div>
                ))}
              </Box>
            )}
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.select}
            tabIndex="-1"
            onFocus={(event) => {
              event.currentTarget.classList.add("select-active");
            }}
            onClick={() => {
              setpriOn(!priOn);
            }}
            onBlur={(event) => {
              //   if (!event.currentTarget.contains(event.relatedTarget)) {

              event.currentTarget.classList.remove("select-active");
              //   }
              setpriOn(false);
            }}
          >
            <span>{price}</span>{" "}
            <Box display="flex" alignItems="center">
              {xButPri && (
                <Box mr={1} display="flex" alignItems="center">
                  <CancelIcon
                    onMouseDown={() => {
                      setXButPri(false);
                      setPrice("Price");
                      setArr(ownProducts);
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
            {priOn && (
              <Box className={classes.categoriess}>
                <div
                  onMouseDown={(event) => {
                    setPrice(event.currentTarget.innerHTML);
                    setXButPri(true);
                    setArr(
                      ownProducts.sort(function (a, b) {
                        if (
                          Number.parseFloat(b.price) >
                          Number.parseFloat(a.price)
                        )
                          return 1;
                        if (
                          Number.parseFloat(b.price) <
                          Number.parseFloat(a.price)
                        )
                          return -1;
                        return 0;
                      })
                    );
                  }}
                  className={classes.categori}
                >
                  Azdan choxa
                </div>
                <div
                  onMouseDown={(event) => {
                    setPrice(event.currentTarget.innerHTML);
                    setXButPri(true);
                    setArr(
                      ownProducts.sort(function (a, b) {
                        if (
                          Number.parseFloat(a.price) >
                          Number.parseFloat(b.price)
                        )
                          return 1;
                        if (
                          Number.parseFloat(a.price) <
                          Number.parseFloat(b.price)
                        )
                          return -1;
                        return 0;
                      })
                    );
                  }}
                  className={classes.categori}
                >
                  Coxdan aza
                </div>
              </Box>
            )}
          </Box>

          <input
            value={input}
            onChange={(e) => {
              setInput(e.currentTarget.value);
            }}
            // onKeyUp={(e) => {
            //   if (e.keyCode == 13) {
                
            //   }
            // }}
            className={classes.input}
            placeholder="Ex: Search By Name"
          />
        </Box>
      </Box>
      <Box mt={3} className={classes.flexCont} display="flex">
        {ownProducts.map((pr) => {
          if ((catTranz || pr.category.title === category) && pr.title.toLowerCase().includes(input.toLowerCase())) {
            return (
              <Box
              data-aos="fade-up"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                className={classes.col}
                key={pr.id}
                onClick={() => {
                  setProAdd(true)
                  setUpdatePr(true)
                  setImg(pr.main_image)
                  setUpId(pr.id)
                  setUnit(pr.unit)
                  setPriceI(pr.price)
                  setDescription(pr.description)
                  setCategoryI(pr.category.id)
                  setTitle(pr.title)
                  setAmL(pr.amount_by_unit)
                  setTitle(pr.title)
                  setCatPlh(pr.category.title)
                }}
              >
                <img
                  className={classes.sekil}
                  src={pr.main_image}
                  alt="ur product"
                />
                <Box display="flex" flexDirection="column">

                  <p className={classes.product}>{pr.title}</p>

                  <p className={classes.amound}>
                  {pr.amount_by_unit}  {pr.unit} 
                  </p>
                  <Box display="flex" justifyContent="space-between">
                  <Box display="flex">
                    {" "}
                    <span className={classes.price}>${pr.price}</span>{" "}
                    {pr.discount_price && (
                      <span className={classes.priceEnd}>
                        ${pr.discount_price}
                      </span>
                    )}
                    </Box>
                    <Button
        variant="contained"
        color="secondary"
        className={classes.button+" mr-5"}
                      startIcon={<DeleteIcon />}
                      onClick={(e) => {
                          e.stopPropagation()
                     dispatch(producDelete({id:pr.id}))
                   }}  
      >
        Delete
      </Button>
                    </Box>


                  {pr.discount_price && (
                    <Box component="p" className="yanQiymet">
                      {(pr.price / pr.discount_price) * 100}% Off
                    </Box>
                  )}
                </Box>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
}

export default Product;
