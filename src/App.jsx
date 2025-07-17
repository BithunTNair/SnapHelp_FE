import React from "react";
import Router from "./Components/Routing/Routing";
import { ToastContainer } from "react-toastify";
import Loader from "./Components/Reusable/Loader";
import { useSelector } from "react-redux";


export default function App() {
  const { loader } = useSelector(store => store.loader)
  return (
    <>
      {loader && <Loader />}
      <ToastContainer />
      <Router />
    </>
  );
}
