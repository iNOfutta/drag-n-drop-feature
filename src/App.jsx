import TopMenu from "./Components/TopMenu";
import SideMenu from "./Components/SideMenu";
import CurricularPlanForm from "./Components/CurricularPlanForm";
import CurricularPlan from "./Components/CurricularPlan";

function App() {
  return (
    <div className={"bg-[#f7f5f5]"}>
      <TopMenu />
      <SideMenu>
        <CurricularPlanForm />
        <CurricularPlan />
      </SideMenu>
    </div>
  );
}

export default App;
