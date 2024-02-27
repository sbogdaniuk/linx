import { ComponentPropsWithoutRef } from 'react';

type Props = {
  value: number
} & ComponentPropsWithoutRef<'span'>

export const Distance = ({ value, ...rest }: Props) => {
  return (
    <span {...rest}>
      {new Intl.NumberFormat("en-US", {
        style: "unit",
        unit: "kilometer",
      }).format(Math.round(value))}
    </span>
  );
};
