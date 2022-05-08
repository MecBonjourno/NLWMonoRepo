import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

//State is the data our component is responsible for displaying

export function Widget() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group ">
        <ChatTeardropDots className="chatDrops" />
        <span className="spanDiv">
          <span className="spanTag"></span>
          FeedBack
        </span>
      </Popover.Button>
    </Popover>
  );
}
