import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Book";
import LoginForm from "./components/Login";
import Register from "./components/Register";
import MyTrees from "./components/MyTrees";
import PDFReader from "./components/PDFReader"
import AuthContextProvider from "./context/AuthContext"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/home" element={<App />}></Route>
        <Route path="/book/:id" element={<Book />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/MyTrees" element={<MyTrees/>}></Route>
        <Route path="/book/:id/:postfix" element={<PDFReader/>}></Route>
      </Routes>
      </AuthContextProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
