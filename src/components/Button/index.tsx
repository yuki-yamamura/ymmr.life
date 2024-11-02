import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { Button as ReactAriaButton } from "react-aria-components";
import type { ButtonProps } from "react-aria-components";

import styles from "./index.module.scss";

const variants = cva(styles.module, {
  variants: {
    color: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
  },
});

type Props = ButtonProps & VariantProps<typeof variants>;

export const Button = ({ color, children, ...props }: Props) => (
  <ReactAriaButton className={variants({ color })} {...props}>
    {children}
  </ReactAriaButton>
);
