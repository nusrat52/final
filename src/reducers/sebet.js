import React from "react";

export const sebet = (state = [{}, []], action) => {
  switch (action.type) {
    case "INCREASE":
      let id = action.payload.id;
      let odu = -1;
      state[1].forEach((obj, index) => {
        obj.id === id ? (odu = index) : console.log("");
      });
      if (odu > -1) {
        state[1][odu].howmany += 1;
        state[1][odu].sum = (
          parseFloat(state[1][odu].sum) + parseFloat(state[1][odu].price)
        ).toFixed(2);
        let sebetObj = JSON.stringify(state[1]);
        localStorage.setItem("sebet", sebetObj);

        let obj = JSON.parse(localStorage.getItem("badget"));
        obj[id] = state[1][odu].howmany;
        state[0][id] = state[1][odu].howmany;

        obj = JSON.stringify(obj);
        localStorage.setItem("badget", obj);
      } else {
        state[1].push({
          title: action.payload.title,
          price: action.payload.price,
          unit: action.payload.unit,
          id: action.payload.id,
          howmany: 1,
          sum: action.payload.price,
          sekil: action.payload.sekil,
        });
        let newobj = JSON.parse(localStorage.getItem("badget"));
        newobj[id] = 1;

        localStorage.setItem("badget", JSON.stringify({ ...newobj }));
        let sebetObj = JSON.stringify(state[1]);
        localStorage.setItem("sebet", sebetObj);
        state[0][id] = 1;
      }
      return [{ ...state[0] }, [...state[1]]];

    case "DECREASE":
      let idi = action.payload.id;
      state[1].forEach((obj, index) => {
        if (obj.id === idi) {
          if (obj.howmany === 1) {
            state[1].splice(index, 1);
            let neobj = JSON.parse(localStorage.getItem("badget"));
            delete neobj[idi];
            let fin = JSON.stringify({ ...neobj });
            localStorage.setItem("badget", fin);
            let sebetObj = JSON.stringify(state[1]);
            localStorage.setItem("sebet", sebetObj);
            delete state[0][idi];
          } else {
            state[1][index].howmany -= 1;
            state[1][index].sum = (
              parseFloat(state[1][index].sum) -
              parseFloat(state[1][index].price)
            ).toFixed(2);
            let sebetObj = JSON.stringify(state[1]);
            localStorage.setItem("sebet", sebetObj);

            let obj = JSON.parse(localStorage.getItem("badget"));
            obj[idi] = state[1][index].howmany;
            state[0][idi] = state[1][index].howmany;
            obj = JSON.stringify(obj);
            localStorage.setItem("badget", obj);
          }
        }
      });

      return [{ ...state[0] }, [...state[1]]];

    case "DELETEITEM":
      let idd = action.payload.id;
      state[1].forEach((obj, index) => {
        if (obj.id === idd) {
          state[1].splice(index, 1);
          let neobj = JSON.parse(localStorage.getItem("badget"));
          delete neobj[idd];
          let fin = JSON.stringify({ ...neobj });
          localStorage.setItem("badget", fin);
          let sebetObj = JSON.stringify(state[1]);
          localStorage.setItem("sebet", sebetObj);
          delete state[0][idd];
        }
      });
      return [{...state[0]},[...state[1]]]
      case "FINISHSEBET":
       
         
            let fin = JSON.stringify({ });
            localStorage.setItem("badget", fin);
            let sebetObj = JSON.stringify([]);
            localStorage.setItem("sebet", sebetObj);
         
          

      return state=[{ }, []]

    case "SEBETINITIALIZE":
      return action.payload;

    default:
      return state;
  }
};
