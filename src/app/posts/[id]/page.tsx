import { MicroCMSClient } from "@/lib/microcms";
import { convertMarkdownIntoJSX } from "@/lib/unified";
import { Post } from "@/types/Post";
import { MicroCMSContentId } from "microcms-js-sdk";

import "prism-themes/themes/prism-duotone-light.min.css";

type Params = MicroCMSContentId;

type Props = {
  params: Params;
};

const client = new MicroCMSClient<Post>("posts");

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await client.fetchList();

  return posts.map(({ id }) => ({
    id,
  }));
}

const Page = async ({ params: { id } }: Props) => {
  const post = await client.fetchListDetailById({ id });

  return (
    <>
      <h1>{post.title}</h1>
      <main>{convertMarkdownIntoJSX(post.body)}</main>
    </>
  );
};

export default Page;
