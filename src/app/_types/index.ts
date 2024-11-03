import type { BlogPost } from "../(posts)/(blog)/types";
import type { TechPost } from "../(posts)/tech/types";

export type Post = BlogPost | TechPost;
