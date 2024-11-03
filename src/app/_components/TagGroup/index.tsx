"use client";

import type { Post } from "@/app/_types";
import { Tag } from "@/components/Tag";
import { TagList } from "@/components/TagList";
import { TagGroup as ReactAriaTagGroup } from "react-aria-components";

type Props = Pick<Post, "tags">;

export const TagGroup = ({ tags }: Props) => (
  <ReactAriaTagGroup>
    <TagList>
      {tags.map((tag) => (
        <Tag key={tag.slug} id={tag.slug}>
          {tag.name}
        </Tag>
      ))}
    </TagList>
  </ReactAriaTagGroup>
);
