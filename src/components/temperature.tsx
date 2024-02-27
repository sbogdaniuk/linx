import { ComponentPropsWithoutRef } from 'react';

type Props = {
  value: number
} & ComponentPropsWithoutRef<'span'>

export const Temperature = ({ value, ...rest }: Props) => {
  return (
    <span {...rest}>
      {new Intl.NumberFormat("en-US", {
        style: "unit",
        unit: "celsius",
      }).format(Math.round(value))}
    </span>
  );
};
