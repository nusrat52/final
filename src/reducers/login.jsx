import React from "react";

export const login = (
  state = {
    authen: false,
    inError: false,
    upError: false,
    errorMessage: "",
    profil: {},
  },
  action
) => {
  switch (action.type) {
    case "LOGGED":
      localStorage.setItem("token", action.payload.token);
      return {...state, 
        authen: true,
        inError: false,
        upError: false,
        errorMessage: "",
        profil: { ...action.payload },
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {...state,
        authen: false,
        inError: false,
        upError: false,
        errorMessage: "",
        profil: {},
      };
    case "PROFIL":
      return {
        ...state,
        profil: { ...action.payload },
      };

    
      case "SIGNUPSUCCES":
        return {
          ...state,
          upError: true,
          errorMessage:"You succesfully created profil!"
        };
    
        case "SIGNUPERROR":
          return {
            ...state,
            upError: true,
            errorMessage:"Something got wrong!"
          };
    
          case "SIGNINERROR":
            return {
              ...state,
              inError: true,
              errorMessage:"Something got wrong!"
            };
          case "ERRORCLEANER":
            return {
              ...state,
              upError: false,
              inError:false,
              errorMessage:""
            };
    
         
          
        
          
               
    default:
      return state;
  }
};
