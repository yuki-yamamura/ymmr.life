"use client";

import { Link as ReactAriaLink } from "react-aria-components";
import type { LinkProps } from "react-aria-components";

import styles from "./index.module.scss";

export const Link = (props: LinkProps) => {
  return <ReactAriaLink {...props} className={styles.module} />;
};
