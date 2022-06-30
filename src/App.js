import "./App.css";
// import Headers from "../components/Headers";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Timer from "./components/Timer";
import Timer7 from "./components/Timer7";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Timer15 from "./components/Time15";
import { Container } from "@material-ui/core";
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Auth from "./components/auth/Auth";
import Main from "./Main";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/done" />)}
          />
          <Route path="/auth" exact component={Auth} />
          <Route path="/done" exact component={Main} />
        </Switch>
      </Container>
    </BrowserRouter>
    // <div>
    //   <Navbar />

    //   <div className="container">
    //     <Headers toggleadd={toggleadd} showadd={showadd} />

    //     {showadd ? <AddTask addTask={addTask} /> : ""}

    //     {tasks.length > 0 ? (
    //       <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
    //     ) : (
    //       <h1>"You Are Done For The Day :)"</h1>
    //     )}
    //   </div>
    // </div>
  );
}

export default App;
