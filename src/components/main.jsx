import React, { useEffect, useState, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
// import { producSubmit } from "../../actions/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 import { Typography } from "@material-ui/core";
import Modal2 from "./profil/modal2";
import { sebetIncrease, sebetDecrease, productTaker } from "../actions/actions";
import Yanverici from "./hs/yanverici";
import Navbar from "./nav/navbar";
import "rodal/lib/rodal.css";
import Sidebar from "./nav/sidebar";
import p1 from "../files/p1.png";
import p2 from "../files/p2.png";
import p3 from "../files/p3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-particles-js";
import particles from "../components/hs/const";
import Searchtop from "./nav/searchtop";
const yasil = "rgb(0, 158, 127)";
const tundyasil = "rgb(4, 119, 96)";
const aciqYasil = "rgb(0, 197, 141)";
const backBoz = "rgb(245, 245, 245)";
 const side = React.createRef();
const input = React.createRef();
const input2 = React.createRef();
const animRef = React.createRef();
const gris = React.createRef();
const filterRef = React.createRef();
const useStyles = makeStyles({
  main: {
    // height: "100vh",
    backgroundColor: backBoz,
    paddingBottom: "100px",
    backgroundImage:'url("https://shop-redq.vercel.app/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png")',

    ["@media (max-width:1000px)"]: {
      height: "fit-content !important",
      justifyContent: "flex-start",
      marginLeft: "15px",
      backgroundColor: "white",
      paddingBottom: "20px",
      backgroundImage:'url()',
    },
  },

  mainText: {
    color: "rgb(119, 121, 140)",
    fontFamily: "Lato, sans-serif",
    fontWeight: "400",
    marginBottom: "60px",
    fontSize: "19px",
    ["@media (max-width:1000px)"]: {
      display: "none",
    },
  },
  mainHeader: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "45px",
    marginBottom: "15px",
    fontWeight: "900",
    ["@media (max-width:1000px)"]: {
      // eslint-disable-line no-useless-computed-key
      fontSize: "20px",
      color: "rgb(119, 121, 140)",
      fontWeight: "400",
    },
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    ontSize: "14px",
    fontWeight: "700",
    fontFamily: "Lato, sans-serif",
    ["@media (max-width:1000px)"]: {
      display: "none",
    },
  },

  inputWrapper2: {
    position: "relative",
    width: "-webkit-fill-available",
    // paddingLeft: "30px",
    paddingRight: "30px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgb(247, 247, 247)",
    width: "100%",
    borderRadius: "8px",

    ["@media (min-width:1000px)"]: {
      display: "none",
    },
  },

  searchInput: {
    outline: "none",
    border: "0",
    width: "600px",
    height: "50px",
    paddingLeft: "100px",
    borderBottomLeftRadius: "7px",
    borderTopLeftRadius: "3px",
    fontSize: "16px",
    color: "gray",
  },

  searchInput2: {
    outline: "none",
    border: "0",
    width: "100%",
    height: "50px",
    paddingLeft: "20px",
    borderBottomLeftRadius: "7px",
    borderTopLeftRadius: "3px",
    fontSize: "16px",
    color: "gray",
    backgroundColor: "rgb(247, 247, 247)",
  },
  searchButton: {
    cursor: "pointer",
    color: "white",
    backgroundColor: aciqYasil,
    height: "50px",
    display: "flex",
    alignItems: "center",
    paddingRight: "40px",
    paddingLeft: "40px",
    borderBottomRightRadius: "7px",
    borderTopRightRadius: "7px",
    "&:hover": {
      backgroundColor: yasil,
    },
  },
  grocery: {
    position: "absolute",
    color: aciqYasil,
    backgroundColor: backBoz,
    padding: "10px",
    marginLeft: "5px",
    borderRadius: "7px",
  },
  carusel: {
    paddingRight: "20px",
    paddingLeft: "20px",
    borderRadius: "15px",
  },
  borSek: {
    borderRadius: "8px",
    // backgroundColor: "black",
  },
  caruselWr: {
    backgroundColor: "white",
    paddingTop: "40px",
    paddingBottom: "40px",
    borderBottom: "1px solid rgb(241, 241, 241)",
  },
  sidebarWrapper: {
    width: "300px",
    backgroundColor: "white",
    height: "100vh",
  },
  side: {
    width: "300px",
    backgroundColor: "white",
    height: "100vh",
    top: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: "0",

    ["@media (max-width:1000px)"]: {
      display: "none",
    },
  },
  categories: {
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    color: "rgb(13, 17, 54)",
    cursor: "pointer",
    "&:hover": {
      color: aciqYasil,
    },
    "&:focus": {
      color: tundyasil,
    },
    width: "100px",
  },
  cardCont: {
    margin: "0",
    display: "flex",
    flexWrap: "wrap",
    height: "max-content",
    width: "-webkit-fill-available",
    minHeight:"100vh"
  },

  // alignItems:"flex-start"

  cards: {
    width: "20%",
    padding: "15px",
    // padding: "10px",
    height: "430px",
    ["@media (max-width:1500px)"]: {
      width: "25%",
    },
    ["@media (max-width:1300px)"]: {
      width: "33.3%",
    },
    ["@media (max-width:1000px)"]: {
      padding: "0",
      // border:"solid 0.5px rgb(224, 224, 224)"
    },
    ["@media (max-width:770px)"]: {
      width: "50%",
    },
  },
  cardss: {
    padding: "20px",
    backgroundColor: "white",
    cursor: "pointer",
    borderRadius: "7px",
    position: "relative",
    height: "100%",
    ["@media (max-width:1000px)"]: {
      border: "solid rgb(224, 224, 224) 0.5px",
    },
  },
  cardsPic: {
    width: "70%",
    alignSelf: "center",
    marginBottom: "20px",
    minWidth: "160px",
  },
  cardsTitle: {
    color: "rgb(13, 17, 54)",
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    fontWeight: "700",
  },
  ePrice: {
    color: "rgb(255, 179, 105)",
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    fontWeight: "400",
    textDecoration: "line-through",
    marginBottom: "2px",
  },
  price: {
    color: tundyasil,
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    fontWeight: "700",
  },

  lb: {
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    fontWeight: "400",
    color: "rgb(119, 121, 140)",
  },
  faiz: {
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    fontWeight: "700",
    color: "rgb(255, 255, 255)",
    lineHeight: "24px",
    backgroundColor: "rgb(255, 173, 94)",
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "inline-block",
    position: "absolute",
    top: "15px",
    right: "15px",
    borderRadius: "12px",
    zIndex: "2",
  },
  sebet: {
    backgroundColor: yasil,
    borderTopLeftRadius: "7px",
    borderBottomLeftRadius: "7px",
    fontFamily: "Lato, sans-serif",
    color: "white",
    padding: "10px 7px 7px 10px",
    position: "fixed",
    top: "49%",
    right: "0",
    zIndex: "5",
    fontWeight: "700",
    cursor: "pointer",
    ["@media (max-width:600px)"]: {
     display:"none"
    },
  },
  sebetSum: {
    backgroundColor: "white",
    color: tundyasil,
    borderRadius: "7px",
    padding: "8px 15px 11px 12px",
  },
  sebetYazi: {
    width: "100px",
  },
  badget: {
    backgroundColor: "rgb(0, 158, 127)",
    color: "rgb(255, 255, 255)",
    fontSize: "15px",
    fontWeight: "700",
    borderRadius: "200px",
    overflow: "hidden",
    width: "104px",
    height: "36px",
    alignItems: "center",
    paddingLeft: "5px",
    paddingRight: "5px",
    zIndex: "2",
  },
  cardBut: {
    border: "2px solid rgb(247, 247, 247)",
    borderRadius: "18px",
    height: "36px",
    paddingLeft: "17px",
    paddingRight: "17px",
    fontSize: "13px",
    fontWeight: "700",
    width: "90px",
    zIndex: "2",

    color: tundyasil,
    "&:hover": {
      color: "white",
      backgroundColor: tundyasil,
    },
  },
  yanvericiAction: {
    right: "-450px",
  },
  button: {
    backgroundColor: "white",
    color: yasil,
    "&:hover": {
      backgroundColor: yasil,
      color: "white",
    },
    ["@media (max-width:600)"]: {
      display: "none",
    },
  },
  particle: {
    width: "100%",
    position: "absolute",
    pointerEvents: "none",
    ["@media (max-width:1000px)"]: {
      display: "none",
    },
  },
  sekilAnim: {
    width: "100px",
    position: "fixed",
    zIndex: "2",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    // visibility: "hidden",
    // left: "50%",
    // top: "30px",
    borderRadius: "50%",
    opacity: "0",
  },
  marginLe300: {
    marginLeft: "300px",
  },
  flSt: {
    width: "100%",
    ["@media (max-width:1000px)"]: {
      alignItems: "flex-start",
    },
  },
  mainnn: {
    display: "flex",
  },
  catego: {
    fontSize: '13px',
    color: 'rgb(13, 17, 54)',
    fontWeight: '700',
    padding: '5px 10px',
    backgroundColor: 'rgb(241, 241, 241)',
    borderRadius: '6px',
    fontFamily: 'Lato, sans-serif',

  },
  fltrr: {
    padding: '0px 15px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease 0s',
    borderRadius: '6px',
   
    // height: '38px',
    fontFamily: 'Lato, sans-serif',

    border: '0px',
    color: 'rgb(0, 158, 127)',
    whiteSpace:"nowrap",
  },
  filterBot: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
   backgroundColor: 'rgba(20, 10, 10, 0.7)',
    overflow: 'hidden',
    zIndex: "10",
    top: "0",
    display: "none",
    alignItems: "flex-end",
    

    
  },
  filterBotContent: {
    backgroundColor: "white",
    position: "relative",

    height: "70vh",
    width: "100vw",
    
    borderTopLeftRadius:"20px",
    borderTopRightRadius: "20px",
    paddingLeft:"20px",
    top: "100vh",
    // zIndex: "11",
  //  bottom:"0"
    
  },
  filterBotAg: {
    
  },
  xWrapper: {
    backgroundColor: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    position: 'absolute',
    top: '-51px',
    left: '49%',
    transition: "1s",
   
    
  },
  topWh: {
  
    top:"0px !important"
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
    position: "fixed",
    bottom: "0",
    width:"80%",
    boxShadow: 'rgb(0 0 0 / 16%) 0px 21px 36px',
    ["@media (min-width:600px)"]: {
      display:"none"
    },
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
  nemm: {
    ["@media (min-width:1000px)"]: {
      display: "none",
    },
  }

});

function Main({sidebarOn, setSidebarOn}) {
  const [onn, setOn] = useState(true);

  const sekilAtan = (sekil) => {
    return [
      {
        original: sekil,
        thumbnail: sekil,
      },
      {
        original: sekil,
        thumbnail: sekil,
      },
      {
        original: sekil,
        thumbnail: sekil,
      },
      {
        original: sekil,
        thumbnail: sekil,
      },
    ];
  };

  const [searchValue, setSearchValue] = useState("");
  const [filterByWord, setFilterByWord] = useState("");
  const height = window.innerHeight - 100;
  let slickk;
  if (window.innerWidth > 1000) {
    slickk = 3;
  } else if (window.innerWidth < 1000) {
    slickk = 2;
  }
  if (window.innerWidth < 460) {
    slickk = 1;
  }
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slickk,
    slidesToScroll: 1,
    // customPaging:=><button>{i+4}</button>
  };

  const categories = useSelector((state) => state.dataManu.categories);
  const products = useSelector((state) => state.dataManu.products);
  const sebetG = useSelector((state) => state.sebet[1]);
  const badget = useSelector((state) => state.sebet[0]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categ, setCateg] = useState(true);
  const [navFixed, setNavFixed] = useState(false);
  const [modalOn, setModalOn] = useState(false);
  const [animSrc, setAnimSrc] = useState("");
  const [mindenBoyuk, setMindenBoyuk] = useState("");
  const [stylePos, setStylePos] = useState({ top: "", left: "" });
  const [searchOn, setSearchOn] = useState(false)
  const [fltrRes, setFltrRes] = useState("All items")
  const [filterOn, setFilterOn] = useState(false)
  let sum = +0;
  sebetG.forEach((element) => {
    sum = (parseFloat(sum) + parseFloat(element.sum)).toFixed(2);
  });
  const [mebleg, setMebleg] = useState(0);
  useEffect(() => {
    console.log(window.innerWidth, "width");

    window.addEventListener("scroll", () => {
      if (
        input?.current?.getBoundingClientRect()?.top <= -90 ||
        input2?.current?.getBoundingClientRect()?.top <= -90
      ) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    });
    AOS.init({
      duration: 700,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (gris?.current?.getBoundingClientRect()?.top < 100) {
        if (window.innerWidth > 1000) {
        
            side?.current?.classList?.add("sidebarFixed");
    
            gris?.current?.classList.add("marginleft300");
          
        }
      } else if(gris?.current?.getBoundingClientRect()?.top>100) {
        if (window.innerWidth > 1000) {
     
            side?.current?.classList?.remove("sidebarFixed");
            gris?.current?.classList.remove("marginleft300");
          // }
        }
      }


    });


    if (window.innerWidth > 1000) {
      setMindenBoyuk(true);
    } else {
      setMindenBoyuk(false);
    }
    sebetG.forEach(element => {
      sum=(
        parseFloat(sum) +
        parseFloat(element.sum)
      ).toFixed(2);
    });
    setMebleg(sum);


  });



  const [modalData, setModalData] = useState({
    title: "",
    unit: "",
    decription: "",
    category: "",
    price: "",
    discountPrice: "",
    sekil: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ],
    proId: "",
  });
  const dispatch = useDispatch();
  const button = useSelector((state) => state.dataManu.done);

  return (
    <>
      <Navbar
        setFilterByWord={setFilterByWord}
        searchValue={searchValue}
        sidebar={side}
        setSearchValue={setSearchValue}
        navFixed={navFixed}
        setSidebarOn={setSidebarOn}
        sidebarOn={sidebarOn}
       
        setSearchOn={setSearchOn}
      />
    <Sidebar setSidebarOn={setSidebarOn} sidebarOn={sidebarOn} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ height: height }}
        className={classes.main}
      >
        <Particles params={particles} className={classes.particle} />
       {  searchOn && < Searchtop  searchOn ={ searchOn } setSearchOn={setSearchOn} setFilterByWord={setFilterByWord} searchValue={searchValue} sidebar={gris} setSearchValue={setSearchValue}  />
}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className={classes.flSt}
        >
          <Typography
            className={classes.mainHeader}
            component="h1"
            align="center"
          >
            Groceries Delivered in 90 Minute
          </Typography>
          <div ref={input2} className={classes.inputWrapper2}>
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

                  window.scrollTo(0, gris.current.offsetTop);

                  setSearchValue("");
                }
              }}
              onChange={(event) => {
                setSearchValue(event.currentTarget.value);
              }}
              className={classes.searchInput2}
              value={searchValue}
              type="text"
            />
          </div>
          <Typography className={classes.mainText} component="p" align="center">
            Get your healthy foods and snacks delivered at your doorsteps all
            day everyday
          </Typography>

          <div ref={input} className={classes.inputWrapper}>
            <input
              placeholder="Search your product here"
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  setFilterByWord(searchValue);

                  window.scrollTo(0, side?.current?.offsetTop);

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

            <div
              onClick={() => {
                setFilterByWord(searchValue);

                window.scrollTo(0, side?.current?.offsetTop);

                setSearchValue("");
              }}
              className={classes.searchButton}
            >
              {" "}
              <span>Search</span>
            </div>
            <div className={classes.grocery}>Grocery</div>
          </div>
        </Box>
      </Box>
      <Box className={classes.caruselWr} display="flex" justifyContent="center">
        <div className="conta ">
          <Slider {...settings}>
            <div className={classes.borSek}>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p1}
                alt="ads"
              />
            </div>
            <div>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p2}
                alt="ads"
              />
            </div>
            <div>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p3}
                alt="ads"
              />
            </div>
            <div className={classes.borSek}>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p1}
                alt="ads"
              />
            </div>
            <div>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p2}
                alt="ads"
              />
            </div>
            <div>
              <img
                className={classes.carusel}
                // height="250"
                width="100%"
                src={p3}
                alt="ads"
              />
            </div>
          </Slider>
        </div>
      </Box>
      <Box className={classes.nemm} px={2} display="flex" justifyContent="space-between" alignItems="center" >
        <p className={classes.catego}>{fltrRes}</p>
        < div onClick={() => {
          // setFilterOn(true)
          filterRef.current.closest("."+classes.filterBot).style.display="flex"
          filterRef?.current?.classList.add("topWh")
          console.log(filterRef.current.classList);
        }} className={classes.fltrr}>
          Filter
        </div>
      </Box>
      <div className={classes.mainnn}>
        {/* <Box ref={sidebar} id="sidebar" className={classes.sidebarWrapper}> */}
        <div className={classes.side} ref={side}>
          {categories.map((cat) => (
            <Box
              key={cat.id}
              my={3}
              tabIndex="-1"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.categories}
              onClick={() => {
                setCategoryFilter(cat.id);
                setCateg(false);
              }}
            >
              {" "}
              <img src={`data:image/svg+xml;utf8,${cat.icon_svg}`} />
              <span>{cat.title}</span>
            </Box>
          ))}
          <Box
            my={3}
            tabIndex="-1"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.categories}
            onClick={() => {
              setCategoryFilter("");
              setCateg(true);
            }}
          >
            {" "}
            <img
              src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12.958" height="13" viewBox="0 0 12.958 13"><path data-name="Path 321" d="M1.015,10.3,1,4.388a.4.4,0,0,1,.564-.373l5.379,2.3a.4.4,0,0,1,.246.371L7.2,12.594a.4.4,0,0,1-.564.373l-5.379-2.3A.4.4,0,0,1,1.015,10.3Zm12.323-5.63L8.375,6.816l.013,5.468,4.963-2.15-.013-5.468m.2-.713a.405.405,0,0,1,.405.4l.014,5.908a.4.4,0,0,1-.244.372L8.347,12.963a.4.4,0,0,1-.565-.37L7.768,6.684a.4.4,0,0,1,.244-.372l5.368-2.325a.4.4,0,0,1,.16-.034ZM7.44.626l-5.149,2.3L7.451,5.2,12.6,2.9,7.44.626m0-.626A.4.4,0,0,1,7.6.034l5.659,2.495a.4.4,0,0,1,0,.74L7.617,5.79a.4.4,0,0,1-.328,0L1.63,3.3a.4.4,0,0,1,0-.74L7.275.035A.4.4,0,0,1,7.439,0Z" transform="translate(-1.001)" fill="currentColor"></path></svg>`}
            />
            <span>All</span>
          </Box>
        </div>
        {/* <p style={{ visibility: "hidden" }}>
            jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          </p>
       */}

        <Modal2
          modalOn={modalOn}
          setModalOn={setModalOn}
          obj={modalData}
          badget={badget}
          dispatch={dispatch}
          // tabIndex="-1"
          onBlur={() => {
            setModalOn(false);
          }}
        />
        <div ref={gris} className={classes.cardCont}>
          {products.map((pr) => {
            if (
              pr.title.toLowerCase().includes(filterByWord) &&
              (pr.category.id == categoryFilter || categ)
            ) {
              return (
                <div
                  key={pr.id}
                  className={classes.cards + " carddd"}
                  // item
                  // xs={12}
                  // md={6}
                  // lg={3}
                  // sm={12}
                >
                  <img
                    ref={animRef}
                    className={classes.sekilAnim + " cardImgg"}
                    src={animSrc}
                    style={{
                      top: `${stylePos.top}px`,
                      right: `${window.innerWidth - stylePos.left - 100}px`,
                    }}
                    onAnimationEnd={(e) => {
                      e.currentTarget.classList.remove("sebetAt");
                    }}
                  />
                  <Box
                    data-aos="fade-up"
                    onClick={(event) => {
                      setModalData({
                        title: pr.title,
                        unit: pr.amount_by_unit + " " + pr.unit,
                        decription: pr.description,
                        category: pr.category.title,
                        price: pr.price,
                        discountPrice: pr.discount_price,
                        sekil: sekilAtan(pr.main_image),
                        proId: pr.id,
                      });

                      setModalOn(!modalOn);
                    }}
                    className={classes.cardss}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                  >
                    {" "}
                    {pr.discount_price && (
                      <div className={classes.faiz}>
                        {(pr.price / pr.discount_price) * 100}%
                      </div>
                    )}
                    <img
                      className={classes.cardsPic}
                      src={pr.main_image}
                      alt=""
                    />
                    <Box>
                      <Box display="flex" flexDirection="column">
                        <p className={classes.cardsTitle + " mp0"}>
                          {pr.title}
                        </p>

                        <p className={classes.lb}>
                          {pr.amount_by_unit} {pr.unit}{" "}
                        </p>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="flex-end"
                        justifyContent="space-between"
                      >
                        <Box flexDirection="column" display="flex">
                          {pr.discount_price && (
                            <p className={classes.ePrice}>$30</p>
                          )}

                          <p className={classes.price + " mp0"}>${pr.price}</p>
                        </Box>

                        {!badget[pr.id] && (
                          <Box
                            onClick={(event) => {
                              event.stopPropagation();
                              dispatch(
                                sebetIncrease({
                                  id: pr.id,
                                  price: pr.price,
                                  unit: pr.unit,
                                  amL: pr.amount_by_unit,
                                  title: pr.title,
                                  sekil: pr.main_image,
                                })
                              );
                              // if (badget[pr.id] !== "undefined") {
                              // setAnimSrc(pr.main_image);
                              console.log(badget[pr.id]);
                              let card = event.currentTarget.closest(".carddd");

                              let sekil = card.querySelector(".cardImgg");

                              sekil.src = pr.main_image;
                              console.log(
                                card.getBoundingClientRect().top,
                                "offset top"
                              );
                              console.log(window.innerWidth, "widt of window");
                              setStylePos({
                                top: card.getBoundingClientRect().top,
                                left: card.getBoundingClientRect().left,
                              });
                              sekil.classList.add("sebetAt");
                              sekil.addEventListener("onAnimated", () => {
                                sekil.classList.remove("sebetAt");
                              });
                              // card.getBoundingClientRect().left;
                              // sekil.classList.add("sebetAt")
                              // }
                            }}
                            className={classes.cardBut}
                            alignItems="center"
                            display="flex"
                            justifyContent="space-between"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.4px"
                              height="12px"
                              viewBox="0 0 14.4 12"
                              fill="currentColor"
                              className="box__Box-sc-5533u7-0 vfnVS"
                            >
                              <g
                                data-name="Group 120"
                                transform="translate(-288 -413.89)"
                              >
                                <path
                                  data-name="Path 154"
                                  fill="currentColor"
                                  d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                                ></path>
                              </g>
                            </svg>

                            <span> Card</span>
                          </Box>
                        )}
                        {badget[pr.id] && (
                          <Box
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className={classes.badget}
                            display="flex"
                            justifyContent="space-between"
                          >
                            <div
                              onClick={(event) => {
                                event.stopPropagation();
                                dispatch(
                                  sebetDecrease({
                                    id: pr.id,
                                  })
                                );
                              }}
                              className="mb9"
                            >
                              <svg
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
                            </div>
                            <p className="mp0">{badget[pr.id]} </p>
                            <div
                              onClick={(event) => {
                                event.stopPropagation();
                                dispatch(
                                  sebetIncrease({
                                    id: pr.id,
                                    price: pr.price,
                                    unit: pr.unit,
                                    amL: pr.amount_by_unit,
                                    title: pr.title,
                                    sekil: pr.main_image,
                                  })
                                );
                              }}
                              className="mp0"
                            >
                              <svg
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
                            </div>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </div>
              );
            }
          })}
        </div>

        <Box
          className={classes.sebet}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            setOn(!onn);
          }}
        >
          <Box
            className={classes.sebetYazi}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.686"
              height="16"
              viewBox="0 0 12.686 16"
            >
              <g data-name="Group 2704" transform="translate(-27.023 -2)">
                <g data-name="Group 17" transform="translate(27.023 5.156)">
                  <g data-name="Group 16">
                    <path
                      data-name="Path 3"
                      d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
                      transform="translate(-53.023 -101.005)"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
                <g data-name="Group 19" transform="translate(30.274 2)">
                  <g data-name="Group 18">
                    <path
                      data-name="Path 4"
                      d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
                      transform="translate(-157.039)"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p className="mp0">{sebetG.length} items</p>
          </Box>
          <p className={classes.sebetSum}>${mebleg}</p>
        </Box>
        <Yanverici mebleg={mebleg} on={onn} seton={setOn} />
      </div>
      {!button.done && (
        <Box my={5} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              dispatch(productTaker(+button.previous + 2));
            }}
          >
            Load More
          </Button>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.foot}
            alignItems="center"
            onClick={() => {
              setOn(!onn);
            }}
          >
            <p className="ml-5">Checkout</p>
            <p className={classes.doxsan}>${mebleg}</p>
          </Box>




          <Box  className={classes.filterBot}>
            <Box  ref={filterRef} className={classes.filterBotContent}>
              <Box  onClick={() => {
                filterRef.current.classList.remove('topWh')
               
                  filterRef.current.closest("."+classes.filterBot).style.display="none"
               
                
              }} className={classes.xWrapper} display="flex" justifyContent="center" alignItems="center">
                <svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10" style={{width: '12px', height: '12px'}}><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
                
              </Box>
              {categories.map((cat) => (
            <Box
                  my={3}
              key={cat.title}
              tabIndex="-1"
                  display="flex"
                 
              alignItems="center"
            
              className={classes.categories}
              onClick={() => {
                setCategoryFilter(cat.id);
                setFltrRes(cat.title)

                filterRef.current.classList.remove('topWh')
              
                  filterRef.current.closest("."+classes.filterBot).style.display="none"
              
                setCateg(false);
              }}
            >
              {" "}
              <img className="mr-15" src={`data:image/svg+xml;utf8,${cat.icon_svg}`} />
              <span>{cat.title}</span>
                </Box>
                

              



              ))}
                <Box
                my={3}
                tabIndex="-1"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className={classes.categories}
                onClick={() => {
                  setCategoryFilter("");
                  setCateg(true);
                  setFltrRes('All Items')


                filterRef.current.classList.remove('topWh')
              
                filterRef.current.closest("."+classes.filterBot).style.display="none"
                }}
              >
                {" "}
                <img
                  src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12.958" height="13" viewBox="0 0 12.958 13"><path data-name="Path 321" d="M1.015,10.3,1,4.388a.4.4,0,0,1,.564-.373l5.379,2.3a.4.4,0,0,1,.246.371L7.2,12.594a.4.4,0,0,1-.564.373l-5.379-2.3A.4.4,0,0,1,1.015,10.3Zm12.323-5.63L8.375,6.816l.013,5.468,4.963-2.15-.013-5.468m.2-.713a.405.405,0,0,1,.405.4l.014,5.908a.4.4,0,0,1-.244.372L8.347,12.963a.4.4,0,0,1-.565-.37L7.768,6.684a.4.4,0,0,1,.244-.372l5.368-2.325a.4.4,0,0,1,.16-.034ZM7.44.626l-5.149,2.3L7.451,5.2,12.6,2.9,7.44.626m0-.626A.4.4,0,0,1,7.6.034l5.659,2.495a.4.4,0,0,1,0,.74L7.617,5.79a.4.4,0,0,1-.328,0L1.63,3.3a.4.4,0,0,1,0-.74L7.275.035A.4.4,0,0,1,7.439,0Z" transform="translate(-1.001)" fill="currentColor"></path></svg>`}
                />
                <span>All</span>
              </Box>

          </Box>
          </Box>





















        </Box>
       
      )}
   
    </>
  );
}

export default Main;
