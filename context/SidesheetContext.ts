import { createContext, useState, useMemo, useCallback } from "react";

type SidesheetProps = {
  open: boolean;
  component: JSX.Element | null;
  show: (component: JSX.Element) => void;
  hide: () => void;
};

const initialSidesheetContext = {
  open: false,
  component: null,
  show: () => undefined,
  hide: () => undefined,
};

const SidesheetContext = createContext<SidesheetProps>(initialSidesheetContext);

export const useSidesheetProvider = (): SidesheetProps => {
  const [component, setComponent] = useState<JSX.Element | null>(
    initialSidesheetContext.component
  );

  const open = useMemo(() => {
    return Boolean(component);
  }, [component]);

  const hide = useCallback(() => {
    setComponent(null);
  }, [setComponent]);

  const show: SidesheetProps["show"] = useCallback(
    (newComponent) => {
      if (open) {
        hide();
        return;
      }
      setComponent(newComponent);
    },
    [open, hide]
  );

  return {
    open,
    component,
    show,
    hide,
  };
};

export default SidesheetContext;
