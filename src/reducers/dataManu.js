import React from "react";

export const dataManu = (
  state = {
    categories: [],
    products: [],
    ownProducts: [],
    done: {},
    orders:[]
  },
  action
) => {
  switch (action.type) {
    case "CATEGORIES":
      return {
        ...state,
        categories: [...action.payload],
      };
    case "PRODUCTS":
      return {
        ...state,
        products: [...state.products, ...action.payload],
        done: action.done,
      };

    case "OWNPRODUCTS":
      return {
        ...state,
        ownProducts: [...action.payload],
      };
    case "DELETEPRODUCT":
      let nearr =state.ownProducts
      nearr = nearr.filter((pr) => {
        return pr.id !== action.payload;
      })
      let neka=state.products
      neka = neka.filter((pr) => {
        return pr.id !== action.payload;
      })
      return {...state,  products: [...neka], ownProducts: [...nearr], categories: [...state.categories], done: { ...state.done } }
      case "UPDATEPRODUCT":
        let nearr2 =state.ownProducts
        nearr2 = nearr2.filter((pr) => {
          return pr.id !== action.payload.id;
        })
        let neka2=state.products
        neka2 = neka2.filter((pr) => {
          return pr.id !== action.payload.id;
        })
      return {...state,  products: [...neka2, action.payload], ownProducts: [...nearr2, action.payload], categories: [...state.categories], done: { ...state.done } }
    
      case "ADDPRODUCT":
       
        
        return {...state,  products: [...state.products, action.payload], ownProducts: [...state.ownProducts, action.payload], categories: [...state.categories], done: { ...state.done } }
        case "ORDERTAKER":
          return {
            ...state,
       orders: [... action.payload]
          };
          case "ADDCATEGORY":
       
        
            return {...state,  categories: [...state.categories, action.payload] }
          //   case "ORDERTAKER":
          //     return {
          //       ...state,
          //  orders: [... action.payload]
          //     };
    default:
      return state;
  }
}
