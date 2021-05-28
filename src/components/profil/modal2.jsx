import React from "react";
import Rodal from "rodal";
import Image from "./image";
// https://reactjsexample.com/a-nice-react-modal-with-animations/           bunu goturduyum yer
import "rodal/lib/rodal.css";
import Box from "@material-ui/core/Box";
import {sebetIncrease, sebetDecrease} from "../../actions/actions"























export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = { visible: false };
    //   this.classes=
  }
    

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  pos = {
    width: 1000,
    height:550
  }
  
  componentDidMount() {
    // console.log(this.props.obj, "modaldakid atalar");
    // if (this.props.modalOn) {
    //   this.show()
    // } else {
    //   this.hide()
    // }
    if (window.innerWidth < 1000) {
      this.pos.width = (+window.innerWidth * 90) / 100
      this.pos.height = (+window.innerHeight * 80) / 100
      
    }
    console.log(this.pos, "pos");
  }
    render() {

    return (
      <div onClick={() => {
        this.props.setModalOn(false)
      }}>
        {/* <button className="buttonHidden" onClick={this.show.bind(this)}>show</button> */}

        <Rodal
          width={this.pos.width}
          height={this.pos.height}
          className="redal"
          animation="fade"
          showCloseButton={window.innerWidth>1000 ? false:true}
          visible={this.props.modalOn}
          onClose={this.props.setModalOn.bind(this)}
          
        >
          <Box onClick={(e)=>{e.stopPropagation()}}  className="mp0 modalRes" >
          
          <Box display="flex" className="main__image">
            <Image sekil={this.props.obj.sekil} />
          </Box>
            <div className="duzxet">
              
            </div>
            

          <Box className="main__data">
              <h2 className="main__title">{this.props.obj.title}</h2>
              <p className="main__miqdar">{this.props.obj.unit}</p>

              <p className="main__description">{this.props.obj.decription}</p>

              <p className="main__categoty">{this.props.obj.category}</p>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <span className="main__price">${this.props.obj.price}</span>
                {!this.props.badget[this.props.obj.proId] && <Box
                      onClick={(event) => {
                        // event.stopPropagation();
                        this.props.dispatch(
                          sebetIncrease({
                            id: this.props.obj.proId,
                            price: this.props.obj.price,
                            unit: this.props.obj.unit,
                            amL: this.props.obj.amount_by_unit,
                            title: this.props.obj.title,
                            sekil:this.props.obj.sekil[0].original,
                          })
                        );
                      }}
                    
                      alignItems="center"
                      display="flex"
                  justifyContent="space-between"
                  className="cardBut"
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
}
                   {this.props.badget[this.props.obj.proId] && <Box
                      className='badget'
                      display="flex"
                      justifyContent="space-between"
                    >
                      <div
                        onClick={(event) => {
                          // event.stopPropagation();
                          this.props.dispatch(
                            sebetDecrease({
                              id: this.props.obj.proId,
                            })
                          );
                      console.log(this.props.badget[94], 'problemli yer');
                      console.log(this.props.badget, 'badget');
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
                      <p className="mp0">{this.props.badget[this.props.obj.proId]} </p>
                      <div
                        onClick={(event) => {
                          // event.stopPropagation();
                          this.props.dispatch(
                            sebetIncrease({
                              id:this.props.obj.proId,
                              price: this.props.obj.price,
                              unit: this.props.obj.unit,
                              amL: this.props.obj.amount_by_unit,
                              title: this.props.obj.title,
                              sebet:this.props.obj.sekil[0].original,
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


}                 
              </Box>
          </Box>
        
            </Box>
        </Rodal >
      </div>
    );
  }
}
