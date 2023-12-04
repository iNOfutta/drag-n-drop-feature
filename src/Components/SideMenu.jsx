import {
  ClassroomIcon,
  DepartamentIcon,
  EnrollmentsIcon,
  GraduationIcon,
  HRIcons,
  HomeIcon,
  PlanIcon,
  SettingsIcon,
  StatisticsIcon,
  SubjectsIcon,
  VolunteersIcons,
  YearIcon,
} from "./NavIcons";

const SideMenu = ({ children }) => {
  const mainMenuData = [
    {
      name: "Página inicial",
      icon: HomeIcon,
    },
    {
      name: "Matrículas",
      icon: EnrollmentsIcon,
    },
    {
      name: "RH",
      icon: HRIcons,
    },
    {
      name: "Candidatos",
      icon: VolunteersIcons,
    },
    { name: "Ano letivo", icon: YearIcon },
    {
      name: "Estatísticas e Relatórios",
      icon: StatisticsIcon,
    },
    {
      name: "Configurações",
      icon: SettingsIcon,
      subMenuData: [
        {
          name: "Graduação",
          icon: GraduationIcon,
        },
        {
          name: "Departamento",
          icon: DepartamentIcon,
        },
        {
          name: "Sala",
          icon: ClassroomIcon,
        },
        {
          name: "Plano curicular",
          icon: PlanIcon,
        },
        {
          name: "Disciplinas",
          icon: SubjectsIcon,
        },
      ],
    },
  ];

  const addStylesBeforeRender = (styles, Component) => {
    return <Component styles={styles} />;
  };

  return (
    <div className="mt-[-5px] flex">
      <div className="bg-white pt-4 pr-3">
        {mainMenuData.map((menu, index) => {
          const { subMenuData: subMenu } = menu;
          return (
            <div key={index + menu.name}>
              <div className="flex ml-4 mb-2 align-baseline">
                {addStylesBeforeRender("self-center", menu.icon)}
                <span className="self-center ml-1">{menu.name}</span>
              </div>

              {/* Render submenus, in case there are, in the current menu*/}
              {Array.isArray(subMenu) &&
                subMenu.map((subMenu, i) => {
                  return (
                    <div key={i + subMenu.name} className="flex flex-col ml-12">
                      <div className="flex mb-2 align-baseline">
                        {/* Hard coding to set Plano curricular as active link */}
                        {i === 3
                          ? addStylesBeforeRender(
                            "self-center text-tertiary",
                            subMenu.icon
                          )
                          : addStylesBeforeRender("self-center", subMenu.icon)}
                        <span className="self-center ml-1">{subMenu.name}</span>
                      </div>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>

      <div className="mx-8 mt-8 flex flex-col w-full ml-6">{children}</div>
    </div>
  );
};

export default SideMenu;
