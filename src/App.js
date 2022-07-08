import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const ROOT = "/react-movie-app";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${ROOT}/movie/:id`} element={<Detail />} />
        <Route path={ROOT} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
