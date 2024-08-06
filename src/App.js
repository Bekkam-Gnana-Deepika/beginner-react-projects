import { Fragment } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/counter/Counter";
import Pnf from "./components/Pnf";
import Todo from "./components/todo/Todo";

function App() {
  return (
   <Fragment>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path={`/counter`} element={<Counter />} />
        <Route path={`/todo`} element={<Todo />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   </Fragment>
  );
}

export default App;
 