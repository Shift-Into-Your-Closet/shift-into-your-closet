import { useContext } from "react";
import SidesheetContext from "../../context/SidesheetContext";
import { Dialog } from "@headlessui/react";
import { HiX } from "react-icons/hi";

export const Sidesheet = () => {
  const { open, show, hide, component } = useContext(SidesheetContext);

  return (
    <Dialog open={open} onClose={hide} className="fixed inset-0 z-10">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed right-0 top-0 w-full sm:max-w-md h-full shadow-zinc-900 shadow-md">
        <Dialog.Panel className="bg-zinc-900 h-full flex flex-col">
          <div
            className="flex cursor-pointer px-4 items-center h-14"
            onClick={hide}
          >
            <div className="flex flex-1 items-center">
              <HiX className="w-4 h-4 text-white" />
              <div className="ml-1 text-sm text-white">Close</div>
            </div>
          </div>
          <section className="flex flex-col flex-1 overflow-y-auto px-4">
            {component}
          </section>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
