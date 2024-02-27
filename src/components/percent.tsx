import React, { ComponentPropsWithoutRef } from 'react';

type Props = {
  value: number
} & ComponentPropsWithoutRef<'span'>

export const Percent = ({ value, ...rest }: Props) => {
  return (
    <span {...rest}>
      {Intl.NumberFormat("en-US", {
        style: "percent",
      }).format(value / 100)}
    </span>
  );
};
