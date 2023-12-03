import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DeleteIcon } from "./GeneralIcons";
import { useDroppable } from "@dnd-kit/core";

export function SortableItem({ id, styles, isDragDisabled }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: isDragDisabled });
  const [name] = id.split("*");

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // Change the color of the item being dragged
    backgroundColor: isDragging ? "#FFC107" : "#E9ECF5",
    color: isDragging ? "white" : "",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={styles}
    >
      {name}
    </div>
  );
}

export default function Subjects({
  id,
  index,
  isEditing,
  handleDelete,
  deleteField,
  styles = "flex p-4",
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={styles}
    >
      {id && (
        <>
          {isEditing && (
            <DeleteIcon
              styles="self-center"
              handleClick={(ev) => {
                ev.stopPropagation();
                setActive(null);
                handleDelete(index, deleteField);
              }}
            />
          )}
          <span className="ml-2">{id}</span>
        </>
      )}
    </div>
  );
}

export function DroppableContainer({ children, id }) {
  const { setNodeRef } = useDroppable({ id });

  return <div ref={setNodeRef}>{children}</div>;
}
