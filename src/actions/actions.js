import axios from "axios";

export const logged = (token) => {
  return {
    type: "LOGGED",
    payload: token,
  };
};
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const signIn = (data) => {
  console.log(data);
  return (dispatch) => {
    axios
      .post("http://34.67.46.157/accounts/api/login/", {
        username: data.email,
        password: data.password,
      })
      .then((response) => {
        console.log(response.statusText === "OK");
        if (response.statusText === "OK") {
          dispatch(logged(response.data));
          dispatch(ownProductTaker());
        } else {
          dispatch({
            type: "SIGNINERROR",
          });
        }
      })
      .catch((err) => {
     
        console.log('err');
        dispatch({
          type: "SIGNINERROR",
        });
      });
  };
};

export const categoryTaker = () => {
  return (dispatch) => {
    axios
      .get("http://34.67.46.157/api/categories/")
      .then((response) => {
        if (response.statusText === "OK") {
          dispatch({
            type: "CATEGORIES",
            payload: response.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
export const productTaker = (data = 1) => {
  return (dispatch) => {
    axios
      .get(`http://34.67.46.157/api/products/?page=${data}`, {})
      .then((response) => {
        console.log(response, "productlari grt eden action");
        let done = false;
        if (response.data.next == null) {
          done = true;
        }
        let previous = response.data.previous;

        if (response.statusText === "OK") {
          dispatch({
            type: "PRODUCTS",
            payload: response.data.products,
            done: { done, previous },
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const ownProductTaker = () => {
  return (dispatch) => {
    axios
      .get("http://34.67.46.157/api/own-products/", {
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response, "ownproductlari grt eden action");
        if (response.statusText="OK") {
          dispatch({
            type: "OWNPRODUCTS",
            payload: response.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const producSubmit = (data) => {
  console.log(data.categoryI, "actionda category");
  const formdata = new FormData();
  formdata.append("title", data.title);
  formdata.append("category", data.categoryI);
  formdata.append("description", data.description);
  formdata.append("price", data.price);
  formdata.append("amount_by_unit", data.amount);
  formdata.append("unit", data.unit);
  formdata.append("main_image", data.img);

  return (dispatch) => {
    fetch("http://34.67.46.157/api/products/", {
      method: "POST", // or 'PUT'
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("product olan action", json);
        dispatch({
          type: "ADDPRODUCT",
          payload: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const producUpdate = (data) => {
  console.log(data, "product update");
  const formdata = new FormData();
  formdata.append("title", data.title);
  formdata.append("category", data.categoryI);
  formdata.append("description", data.description);
  formdata.append("price", data.price);
  formdata.append("amount_by_unit", data.amount);
  formdata.append("unit", data.unit);
  if (typeof data.img == "object") {
    formdata.append("main_image", data.img);
    console.log("beraberdi");
  }
  return (dispatch) => {
    fetch(`http://34.67.46.157/api/products/${data.id}/`, {
      method: "PUT", // or 'PUT'
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "UPDATEPRODUCT",
          payload: json,
        });
        console.log("update olan action", json);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const producDelete = (data) => {
  console.log(data, "product delete");

  return (dispatch) => {
    fetch(`http://34.67.46.157/api/products/${data.id}/`, {
      method: "DELETE",
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        dispatch({
          type: "DELETEPRODUCT",
          payload: data.id,
        });
        // console.log(response);
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

export const sebetIncrease = (data) => {
  let unit = data.amL + " " + data.unit;
  return {
    type: "INCREASE",
    payload: {
      id: data.id,
      price: data.price,
      unit,
      title: data.title,
      sekil: data.sekil,
    },
  };
};

export const sebetDecrease = (data) => {
  console.log(data);
  return {
    type: "DECREASE",
    payload: {
      id: data.id,
    },
  };
};

export const sebetInitialize = () => {
  let obj = JSON.parse(localStorage.getItem("badget"));
  let sebet = JSON.parse(localStorage.getItem("sebet"));
  return {
    type: "SEBETINITIALIZE",
    payload: [obj, sebet],
  };
};

export const deleteItem = (data) => {
  console.log(data, "actonda delete item");
  return {
    type: "DELETEITEM",
    payload: { id: data },
  };
};

export const buy = (data) => {
  console.log(data, "actionda buy");
  let body;
  if (data.costumer) {
    body = {
      product: data.id,
      customer: data.costumer,
      count: data.count,
    };
  } else {
    body = {
      product: data.product,

      count: data.count,
    };
  }
  // return (dispatch) => {
  fetch("http://34.67.46.157/api/orders/", {
    method: "POST",
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log("product olan action", json);
      // dispatch({
      //   type: "ADDPRODUCT",
      //   payload:json,
      // })
    })
    .catch((err) => {
      console.log(err);
    });
};
export const finishSebet = () => {
  return {
    type: "FINISHSEBET",
  };
};

export const signUpdate = (data) => {
  const formData = new FormData();
  formData.append("username", data.username);
  // formData.append("email", data.email);
  formData.append("first_name", data.firstName);
  formData.append("last_name", data.lastName);
  formData.append("image", data.sekil);
  formData.append("password", data.password);
  return (dispatch) => {
    fetch("http://34.67.46.157/accounts/api/user-profile/", {
      method: "PUT", // or 'PUT'
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        dispatch({
          type: "PROFIL",
          payload: res,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getProfile = () => {
  return (dispatch) => {
    fetch("http://34.67.46.157/accounts/api/user-profile/", {
      method: "GET", // or 'PUT'
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch({
          type: "PROFIL",
          payload: res,
        });
        console.log(res, "profil olanda gelen");
      })
      .catch((err) => console.log(err, "profil get eden yer errorr"));
  };
};

export const orderTaker = (data = 1) => {
  return (dispatch) => {
    axios
      .get(`http://34.67.46.157/api/orders/`, {
        method: "GET", // or 'PUT'
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response, "ordersler grt eden action");
        let done = false;
        if (response.data.next == null) {
          done = true;
        }
        let previous = response.data.previous;

        if (response.statusText === "OK") {
          dispatch({
            type: "ORDERTAKER",
            payload: response.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const addCategory = (data) => {
  console.log(data);
  return (dispatch) => {
    const formdata = new FormData();
    formdata.append("title", data.username);
    formdata.append("icon_svg", data.firstName);
    formdata.append("icon_png", data.sekil);

    fetch("http://34.67.46.157/api/categories/", {
      method: "POST", // or 'PUT'
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("catalog yaraddigim yer", json);
        dispatch({
          type: "ADDCATEGORY",
          payload: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const signUp = (data) => {
//   // console.log(data.sekil.name);
//   return (dispatch) => {
//     axios
//       .post("http://34.67.46.157/accounts/api/register/", {
//         username: data.username,
//         email: data.email,
//         password: data.password,
//         first_name: data.firstName,
//         last_name: data.lastName,
//         image: data.sekil.name,
//       })
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//   };
// };

export const signUp = (data) => {
  console.log(typeof data.sekil);

  return (dispatch) => {
    const formdata = new FormData();
    formdata.append("username", data.username);
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    formdata.append("first_name", data.firstName);
    formdata.append("last_name", data.lastName);
    if (typeof data.sekil == "object") {
      formdata.append("image", data.sekil);
    }
    fetch("http://34.67.46.157/accounts/api/register/", {
      method: "POST",

      body: formdata,
    })
      .then((response) => {
        if (response.ok) {
          dispatch({
            type: "SIGNUPSUCCES",
          });
        } else {
          dispatch({
            type: "SIGNUPERROR",
          });
        }
        return response.json();
      })
      .then((json) => {
        console.log("signup olan yer", json);
      })
      .catch((err) => {
        console.log(err, "sign updaki error");
        dispatch({
          type: "SIGNUPERROR",
        });
      });
  };
};
