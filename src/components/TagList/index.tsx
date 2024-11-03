"use client";

import React, { ComponentProps } from "react";
import { TagList as ReactAriaTagList } from "react-aria-components";

import styles from "./index.module.scss";

export const TagList = (props: ComponentProps<typeof ReactAriaTagList>) => {
  return <ReactAriaTagList {...props} className={styles.module} />;
};
