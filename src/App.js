import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import ReciperDetails from "./pages/RecipeDetails";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";
import FavoriteProvider from "./context/FavoriteContext";
import Favorites from "./pages/Favorites";



function App() {
  return (
    <FavoriteProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element={<Homepage />} />
          <Route path = "/recipe-detail" element={<ReciperDetails />} />
          <Route path = "/favorites" element={<Favorites />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </FavoriteProvider>
  )
}

export default App