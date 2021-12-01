import ActionPlansComponent from "./components/actionPlans/ActionPlans";
import ActionPlanGraph1 from "./components/actPlanGraph/ActPG1";
import ActionPlanGraph2 from "./components/actPlanGraph/ActPG2";
import ActionPlanGraph3 from "./components/actPlanGraph/ActPG3";
import BarGraph from "./components/actPlanGraph/ActPG4";
import InspeAgendComponent from "./components/inspAgen/InspeAgend";
import Navbar from "./components/NavBar";
import { GridContainer} from "./styles";



function App() {
  return (
      <GridContainer>
        <div style={{gridArea:'nav'}}>
          <Navbar/>
        </div>
        <div style={{gridArea:'barGraph'}}>
            <BarGraph/>
        </div>

        <div style={{gridArea:'apg1'}}>
          <ActionPlanGraph1/>
        </div>

        <div style={{gridArea:'apg2'}}>
          <ActionPlanGraph2/>
        </div>

 <div style={{gridArea:'apg3'}}>
          <ActionPlanGraph3/>
        </div>

           <div style={{gridArea:'apComp'}}>
          <ActionPlansComponent/>
        </div>  


        <div style={{gridArea:'inspAgendaComp'}}>
          <InspeAgendComponent/>
        </div> 
      </GridContainer>
  );
}

export default App;
