import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Books from "./pages/Book/Book";
import BookDetails from "./pages/Detail/BookDetail";

const App=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/books" element={<Books/>}></Route>
                <Route path="/books-details/:id" element={<BookDetails/>}></Route>
            </Routes>
            </div>
    )
}

export default App;