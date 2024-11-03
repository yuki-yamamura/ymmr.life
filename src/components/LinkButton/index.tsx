"use client";

import { Link as ReactAriaLink } from "react-aria-components";
import type { LinkProps } from "react-aria-components";
import type { ReactNode } from "react";

import styles from "./index.module.scss";

type Props = {
  rightIcon?: ReactNode;
} & LinkProps;

export const LinkButton = ({ rightIcon, ...props }: Props) => {
  return (
    <ReactAriaLink className={styles.module} {...props}>
      {() => (
        <>
          {props.children}
          <span className={styles.icon}>{rightIcon && rightIcon}</span>
        </>
      )}
    </ReactAriaLink>
  );
};
