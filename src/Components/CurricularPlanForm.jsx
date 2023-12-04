import arrowIcon from "../assets/Icon.png";

const CurricularPlanForm = () => {
  return (
    <div className="self-center mb-2 bg-white w-full p-32 pt-14 pb-10">
      <h1 className="font-semibold text-lg pb-5">Novo plano</h1>
      <form className="flex">
        <div className="flex flex-col">
          <label className="flex flex-col pb-5">
            <span className="font-semibold text-xs">Nome do Curso</span>
            <input
              type="text"
              value={"Medicina"}
              className="input w-[346px] p-2"
            />
          </label>
          <label className="flex flex-col  pb-5">
            <span className="font-semibold text-xs">Departamento</span>
            <select
              value={"Medicina"}
              className="input w-[346px] pl-2 appearance-none"
              style={{
                background: `url(${arrowIcon}) no-repeat`,
                backgroundPosition: "95% center",
              }}
            >
              <option value="medicine">Medicina</option>
            </select>
          </label>

          <div className="flex justify-evenly">
            <label className="flex flex-col">
              <span className="font-semibold text-xs">Ano</span>
              <input type="number" value={6} className="input p-2 w-[164px]" />
            </label>
            <button
              disabled="disabled"
              className="bg-[#E9ECF5] text-[#C3CAD9] border-[#C3CAD9] border-solid border-[1px] w-[168px] h-[40px] self-end ml-3 hover:cursor-not-allowed"
            >
              Adicionar disciplinas
            </button>
          </div>
        </div>

        <div className="flex flex-col ml-4">
          <label className="flex flex-col pb-5">
            <span className="font-semibold text-xs">Graduação</span>
            <select
              value={"Licenciatura"}
              className="input w-[346px] pl-2 appearance-none"
              style={{
                background: `url(${arrowIcon}) no-repeat`,
                backgroundPosition: "95% center",
              }}
            >
              <option value="bachelor">Licenciatura</option>
            </select>
          </label>

          <div className="flex">
            <label className="flex flex-col pb-5">
              <span className="font-semibold text-xs">Propina</span>
              <input
                type="text"
                value={"20.000"}
                className="input w-[164px] h-[40px] p-2"
              />
            </label>
            <label className="flex flex-col  ml-4">
              <span className="font-semibold text-xs">Carga horária</span>
              <input
                type="text"
                value={"5000 HORAS"}
                className="input w-[164px] h-[40px] p-2"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CurricularPlanForm;
