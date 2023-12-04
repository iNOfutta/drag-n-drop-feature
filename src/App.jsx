import TopMenu from "./Components/TopMenu";
import SideMenu from "./Components/SideMenu";
import CurricularPlanForm from "./Components/CurricularPlanForm";
import CurricularPlan from "./Components/CurricularPlan";

function App() {
  return (
    <div className={"bg-[#E9ECF5]"}>
      <TopMenu />
      <SideMenu>
        <CurricularPlanForm />
        <CurricularPlan />
      </SideMenu>
    </div>
  );
}

export default App;
