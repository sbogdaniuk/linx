import { ComponentPropsWithoutRef } from "react";

type Props = {
  date: number;
} & ComponentPropsWithoutRef<"span">;

export function FormatDate({ date, ...rest }: Props) {
  return (
    <span {...rest}>
      {new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      }).format(date)}
    </span>
  );
}
