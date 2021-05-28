import React from "react"
import { login } from "./login"
import { dataManu } from "./dataManu"
import { sebet } from "./sebet"
import { combineReducers } from 'redux'


export  const reducer=combineReducers({login,dataManu, sebet})