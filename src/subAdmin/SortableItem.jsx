import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { Link } from "react-router-dom";

const SortableItem = ({ section }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-gray-200 flex items-center justify-between p-2 border-b"
    >
      <div className="flex items-center gap-2">
        {/* 👇 drag handle */}
        <div {...attributes} {...listeners}>
          <GripVertical className="size-5 cursor-grab opacity-50" />
        </div>

        <Link className="text-sm font-medium text-black">
          {section.name}
        </Link>
      </div>

      {/* your buttons unchanged */}
    </div>
  );
};
export default SortableItem;