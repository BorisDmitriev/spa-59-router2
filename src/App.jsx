import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import StarwarsCharacter from "./pages/StarwarsCharacter";
import NotFound from "./pages/404-NotFound-Page";
import SharedLayout from "./pages/SharedLayout";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
    return (
        <BrowserRouter>

            <div className="App">

                <Routes>
                    <Route path="/" element={<SharedLayout />}> 
                        <Route index element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/starwarsCharacter"
                            element={<StarwarsCharacter />}
                        />
                        <Route
                            path="/characterDetails/:characterId"
                            element={<CharacterDetails />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>

            </div>

        </BrowserRouter>    
    );
}

export default App;
