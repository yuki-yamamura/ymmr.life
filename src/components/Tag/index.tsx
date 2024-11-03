"use client";

import { Tag as ReactAriaTag } from "react-aria-components";
import type { TagProps } from "react-aria-components";

import styles from "./index.module.scss";

export const Tag = (props: TagProps) => {
  return <ReactAriaTag {...props} className={styles.module} />;
};
