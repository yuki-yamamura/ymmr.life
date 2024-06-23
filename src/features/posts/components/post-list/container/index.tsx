import { MicroCMSClient } from "@/lib/microcms";
import Component from "../presenter";

import type { Post } from "@/types/Post";

const Container = async () => {
  const client = new MicroCMSClient<Post>("posts");
  const posts = await client.fetchList();

  return <Component posts={posts} />;
};

export default Container;
