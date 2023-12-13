import { useState } from "react";
import { uselocalStorage } from "./localStorageKullan";

export const useGeceModu = (initialValue) => {
  const [val, setVal] = uselocalStorage("geceModu", initialValue);

  /* const inputChangeHandler = (event) => {
    setVal(!val);
    localStorage.setItem("val", !val);
  }; */

  return [val, setVal];
};
