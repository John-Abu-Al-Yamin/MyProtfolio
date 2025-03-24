import React from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

interface ToolboxItem {
  title: string;
  iconType: React.ElementType;
}

interface ToolboxItemsProps {
  items: ToolboxItem[];
  className?: string;
  itemsWrapperClassName?: string;
}

const ToolboxItems: React.FC<ToolboxItemsProps> = ({
  items,
  className,
  itemsWrapperClassName,
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,rgba(0,0,0,1)10%,rgba(0,0,0,1)90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2).fill(0)].map((_, idx) => (
          <React.Fragment key={idx}>
            {items.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;