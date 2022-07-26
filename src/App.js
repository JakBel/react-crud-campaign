import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddCampaign from "./components/AddCampaign";
import UpdateCampaign from "./components/UpdateCampaign";
import { GlobalProvider } from "./context/Context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <GlobalProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path="/add" component={AddCampaign} />
                        <Route path="/update/:id" component={UpdateCampaign} />
                        <Route path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </GlobalProvider>
        </div>
    );
}

export default App;
