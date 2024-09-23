import { cva, type VariantProps } from "class-variance-authority";

import styles from "./index.module.scss";
import { HTMLAttributes, PropsWithChildren } from "react";

const button = cva(styles.module, {
  variants: {
    color: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type Props = PropsWithChildren &
  HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button = ({ color, children, ...props }: Props) => {
  return (
    <button type="button" className={button({ color })} {...props}>
      {children}
    </button>
  );
};
