"use client";

import { type AriaButtonOptions, useButton } from "@react-aria/button";
import { PropsWithChildren, useRef } from "react";

import styles from "./index.module.scss";

type Props = AriaButtonOptions<"button"> & PropsWithChildren;

export const Button = (props: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button {...buttonProps} ref={ref} className={styles.module}>
      {children}
    </button>
  );
};
