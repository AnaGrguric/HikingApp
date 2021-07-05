import './App.css';
import Home from './pages/Home';
import RouteOne from './pages/RouteOne';
import RouteTwo from './pages/RouteTwo';
import RouteThree from './pages/RouteThree';
import RouteFour from './pages/RouteFour';
import Japetic from './pages/destinations/Japetic';
import Ostrc from './pages/destinations/Ostrc';
import Okic from './pages/destinations/Okic';
import Plesivica from './pages/destinations/Plesivica';
import VelikiLovnik from './pages/destinations/VelikiLovnik';
import PD_Zitnica from './pages/destinations/PD_Zitnica';
import PD_Zeljeznicar from './pages/destinations/PD_Zeljeznicar';
import PD_CerinskiVir from './pages/destinations/PD_CerinskiVir';
import PD_SvBernard from './pages/destinations/PD_SvBernard';
import PD_MaksPlotnikov from './pages/destinations/PD_MaksPlotnikov';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/soicevakuca-japetic" component={RouteOne} />
      <Route exact path="/zitnica-japetic" component={RouteTwo}  />
      <Route exact path="/soicevakuca-ostrc" component={RouteThree} />
      <Route exact path="/soicevakuca-velikavrata" component={RouteFour} />
      <Route exact path="/japetic" component={Japetic} />
      <Route exact path="/ostrc" component={Ostrc} />
      <Route exact path="/okic" component={Okic} />
      <Route exact path="/plesivica" component={Plesivica} />
      <Route exact path="/velikilovnik" component={VelikiLovnik} />
      <Route exact path="/zitnica" component={PD_Zitnica} />
      <Route exact path="/zeljeznicar" component={PD_Zeljeznicar} />
      <Route exact path="/cerinskivir" component={PD_CerinskiVir} />
      <Route exact path="/svBernard" component={PD_SvBernard} />
      <Route exact path="/maksplotnikov" component={PD_MaksPlotnikov} />
    </div>
  );
}

export default App;
