import { useState } from "react";
import {
  ActiveSemesterIcon,
  ActiveYearIcon,
  AttachIcon,
  DeleteIcon,
  EditIcon,
  SearchIcon,
} from "./GeneralIcons";
import ButtonsDisplay from "./ButtonsDisplay";

import {
  DndContext,
  useSensor,
  useSensors,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { DroppableContainer, SortableItem } from "./Subjects";
import { v4 as uuidv4 } from "uuid";

const CurricularPlan = () => {
  const [toggleYear, setToggleYear] = useState(false);
  const [toggleSemester, setToggleSemester] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  const [firstSemester, setFirstSemester] = useState([
    {
      subject: "Mathematics",
      credits: 4,
      proceeding: "A",
      discarded: false,
      id: "1234",
    },
    {
      subject: "English",
      credits: 3,
      proceeding: "B",
      discarded: false,
      id: "5678",
    },
    {
      subject: "History",
      credits: 3,
      proceeding: "C",
      discarded: false,
      id: "91011",
    },
    {
      subject: "Science",
      credits: 4,
      proceeding: "A",
      discarded: false,
      id: "121314",
    },
    {
      subject: "Computer Science",
      credits: 3,
      proceeding: "B",
      discarded: false,
      id: "151617",
    },
  ]);

  const [inputControllers, setInputControllers] = useState(Array.from({ length: firstSemester.length }).fill(0).map((item, index) => firstSemester[index].credits));


  //Utils
  const generateSplittableID = (value) => `${value}*${uuidv4()}`;

  const truncateText = (str, length = 20) => str.length > length ? str.substring(0, length) + "..." : str;

  const handleToggleYear = () => {
    setToggleYear((prev) => !prev);
  };
  const handleToggleSemester = () => {
    setToggleSemester((prev) => !prev);
  };

  const toggleIsEditing = () => {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      setFirstSemester((prev) => {
        const newSemester = [...prev];
        newSemester.forEach((item, index) => {
          if (item.credits !== inputControllers[index]) {
            item.credits = inputControllers[index]
          }
        })
        return newSemester;
      });
    }
  };

  const handleChangeInput = (index) => (ev) => {
    setInputControllers(prev => {
      prev[index] = ev.target.value;
      return prev
    });
  };

  const handleDelete = (index, field) => {
    setFirstSemester((prev) => {
      const newSemester = [...prev];
      newSemester[index][field] = "";
      return newSemester;
    });
  };

  const handleCheck = (index) => (ev) => {
    if (!isEditing) return;
    setFirstSemester((prev) => {
      const newSemester = [...prev];
      newSemester[index]["discarded"] = ev.target.checked;
      return newSemester;
    });
  };

  const years = ["2º Ano", "3º Ano", "4º Ano", "5º Ano", "6º Ano"];

  const [subjects, setSubjects] = useState([
    "Lorem ipsum dolor sit amet",
    "Tempore inventore dignissimos",
    "is deleniti eius ad mollitia",
    "Medicina Geral",
    "Medicina Interna",
    "Medicina Nuclear",
    "Medicina Química",
    "Medicina Sanitária",
    "Bioquímica Estrutural",
    "Bioquímica Metabólica",
    "Biologia Celular",
    "Anatomia I",
    "Genética",
  ]);

  const bottomButtons = [
    { text: "Cancelar", styles: "foot-button mr-4" },
    { text: "Guardar", styles: "foot-button mr-4" },
    { text: "Registar", styles: "foot-button--variant" },
  ];

  //Drag and Drop Config
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    const [overName, overDroppable] = over.id.split("*");
    const [activeName, activeDroppable] = active.id.split("*");

    if (active.id !== over.id) {
      if (overDroppable === "subject") {
        setFirstSemester((items) => {
          const newItems = [...items];
          const targetIndex = newItems.findIndex(
            (item) => item.subject === overName
          );
          if (targetIndex !== -1) {
            newItems[targetIndex] = {
              ...newItems[targetIndex],
              subject: activeName,
            };
          }
          return newItems;
        });
      }

      if (overDroppable === "proceeding") {
        setFirstSemester((items) => {
          const newItems = [...items];
          const targetIndex = newItems.findIndex(
            (item) => item.proceeding === overName
          );
          if (targetIndex !== -1) {
            newItems[targetIndex] = {
              ...newItems[targetIndex],
              proceeding: activeName,
            };
          }
          return newItems;
        });
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="pt-8 font-medium flex justify-between bg-white pl-8 pr-6">
        <div className="mr-6">
          <div className="year-header ">
            {toggleYear ? (
              <ActiveYearIcon handleClick={handleToggleYear} />
            ) : (
              <ActiveSemesterIcon handleClick={handleToggleYear} />
            )}
            <h1 className="year-header--title">1º Ano</h1>
          </div>
          {/* Semesters */}
          {/* 2nd semester table */}
          <div>
            {toggleYear && (
              <div className="semester-header input bg-[#F7F9FC]">
                {toggleSemester ? (
                  <ActiveSemesterIcon handleClick={handleToggleSemester} />
                ) : (
                  <ActiveYearIcon handleClick={handleToggleSemester} />
                )}
                <h2 className="semester-header--title">1º Semestre</h2>
              </div>
            )}

            {toggleSemester && (
              <div className="flex justify-evenly w-full ml-6">
                <div className="flex flex-col justify-start">
                  <span className="semester-table-header">Disciplina</span>
                  {firstSemester.map((semester, index) => (
                    <DroppableContainer
                      key={generateSplittableID(`${semester.subject}*subject`)}
                      id={generateSplittableID(`${semester.subject}*subject`)}
                    >
                      {
                        <div className="flex p-4">
                          {semester.subject && (
                            <>
                              {isEditing && (
                                <DeleteIcon
                                  styles="self-center"
                                  handleClick={() => {
                                    handleDelete(index, "subject");
                                  }}
                                />
                              )}
                              <span className="ml-2">{truncateText(semester.subject)}</span>
                            </>
                          )}
                        </div>
                      }
                    </DroppableContainer>
                  ))}
                </div>

                <div className="flex flex-col text-center">
                  <span className="semester-table-header">Créditos</span>
                  {firstSemester.length > 0 &&
                    firstSemester.map((semester, index) => (
                      <span className="p-4 self-center" key={uuidv4()}>
                        {isEditing ? (
                          <input
                            type="number"
                            onChange={handleChangeInput(index)}
                            className="max-w-min w-12 focus:outline-none"
                            placeholder={parseInt(inputControllers[index]) ? inputControllers[index] : ""}
                          />
                        ) : (
                          <span className="p-4">{parseInt(semester?.credits) ? semester?.credits : ""}</span>
                        )}
                      </span>
                    ))}
                </div>

                <div className="flex flex-col text-center">
                  <span className="semester-table-header">Procedente</span>
                  {firstSemester.map((semester, index) => (
                    <DroppableContainer
                      key={generateSplittableID(
                        `${semester.proceeding}*proceeding`
                      )}
                      id={generateSplittableID(
                        `${semester.proceeding}*proceeding`
                      )}
                    >
                      <div className="flex p-4 self-center">
                        {semester.proceeding && (
                          <>
                            {isEditing && (
                              <DeleteIcon
                                styles="self-center"
                                handleClick={() => {
                                  handleDelete(index, "proceeding");
                                }}
                              />
                            )}
                            <span className="ml-2">{truncateText(semester.proceeding)}</span>
                          </>
                        )}
                      </div>
                    </DroppableContainer>
                  ))}
                </div>

                <div className="flex flex-col items-center">
                  <span className="semester-table-header">Dispensa</span>
                  {firstSemester.length > 0 &&
                    firstSemester.map((semester, index) => (
                      <input
                        type="checkbox"
                        className="m-4 w-[20px] h-[20px] checkbox hover:cursor-pointer"
                        key={uuidv4()}
                        checked={semester.discarded}
                        disabled={false}
                        onChange={handleCheck(index)}
                      />
                    ))}
                </div>

                <div className="flex flex-col">
                  <div className="border border-[#FFC107] border-solid p-2 my-2 m-4">
                    <EditIcon handleClick={toggleIsEditing} />
                  </div>

                  {firstSemester.length > 0 &&
                    firstSemester.map((_) => (
                      <div
                        className="bg-[#E4EBF5] p-2 m-4 my-[9.5px]"
                        key={uuidv4()}
                      >
                        <AttachIcon />
                      </div>
                    ))}
                </div>
              </div>
            )}
            {/*  */}
          </div>
          {toggleYear && (
            <div className="semester-header input bg-[#F7F9FC]">
              <ActiveYearIcon />
              <h2 className="semester-header--title">2º Semestre</h2>
            </div>
          )}

          {/* The rest of the years and semesters */}
          {years.map((year) => {
            return (
              <div className="year-header mt-4" key={year}>
                <ActiveSemesterIcon />
                <h2 className="year-header--title">{year}</h2>
              </div>
            );
          })}

          {/* Three bottom action buttons */}
          <ButtonsDisplay bottomButtons={bottomButtons} />
        </div>

        {/* Drag n Drop subjects */}
        {toggleSemester && (
          <div className="w-full relative">
            <div className="bg-[#E9ECF5] p-4">
              <span className="year-header--title">Adicionar disciplinas</span>
              <div className="relative flex ml-3 mt-4">
                <input
                  type="text"
                  className="input p-2 w-full"
                  placeholder="Pesquise uma disciplina"
                />
                <div className="absolute top-2 right-2">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <div className={"bg-[#F7F9FC] mt-[-2px] pb-4 pt-4 border border-solid border-[#E9ECF5]"}>
              <SortableContext
                items={subjects}
                strategy={verticalListSortingStrategy}
              >
                {subjects.map((subject, index) => (
                  <SortableItem
                    key={generateSplittableID(`${subject}*${index}`)}
                    id={generateSplittableID(`${subject}*${index}`)}
                    index={index}
                    styles={index === 0 ? "first-subject" : "subject"}
                    isDragDisabled={!isEditing}
                  />
                ))}
              </SortableContext>
            </div>
          </div>
        )}
      </div>
    </DndContext>
  );
};

export default CurricularPlan;
