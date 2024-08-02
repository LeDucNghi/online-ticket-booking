import * as React from "react";

export interface IuseTitleProps {
  title: string;
}

export function useTitle({ title }: IuseTitleProps) {
  const documentDefined = typeof document !== "undefined";

  React.useEffect(() => {
    if (!documentDefined) return;

    document.title = title;
  }, []);
}
