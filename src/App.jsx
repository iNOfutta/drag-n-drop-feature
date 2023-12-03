import TopMenu from "./Components/TopMenu";
import SideMenu from "./Components/SideMenu";
import CurricularPlanForm from "./Components/CurricularPlanForm";
import CurricularPlan from "./Components/CurricularPlan";

function App() {
  return (
    <>
      <TopMenu />
      <SideMenu>
        <CurricularPlanForm />
        <CurricularPlan />
      </SideMenu>
    </>
  );
}

export default App;
