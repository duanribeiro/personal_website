import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainView } from "../views";

const browserHistory = createBrowserHistory();

const MainRoutes = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Routes>
        <Route exact path="/" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
