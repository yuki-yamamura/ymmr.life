import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import styles from "./index.module.scss";

const variants = cva(styles.module, {
  variants: {
    color: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
  },
});

type Props = ComponentPropsWithoutRef<"button"> &
  PropsWithChildren &
  VariantProps<typeof variants>;

export const Button = ({ color, children, ...props }: Props) => (
  <button className={variants({ color })} {...props}>
    {children}
  </button>
);
