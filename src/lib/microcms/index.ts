import { createClient } from "microcms-js-sdk";
import { MICROCMS_DEFAULT_LIMIT, MICROCMS_DEFAULT_OFFSET } from "@/constants";

import type {
  GetListRequest,
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListContent,
} from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export class MicroCMSClient<T extends MicroCMSListContent> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  fetchList = async (
    { queries }: Pick<GetListRequest, "queries"> = {
      queries: {
        offset: MICROCMS_DEFAULT_OFFSET,
      },
    }
  ): Promise<T[]> => {
    const res = await client.getList<T>({
      endpoint: this.endpoint,
      queries,
    });

    const nextOffset = queries?.offset
      ? queries.offset + MICROCMS_DEFAULT_LIMIT
      : MICROCMS_DEFAULT_LIMIT;

    // base condition
    // stop recursive call, if offset reaches the end of the list data.
    if (res.totalCount < nextOffset) {
      return res.contents;
    }

    // recursive call
    const nextResponse = await this.fetchList({
      queries: {
        ...queries,
        offset: nextOffset,
      },
    });

    return res.contents.concat(nextResponse);
  };

  fetchListDetailById = ({ id }: MicroCMSContentId): Promise<T> => {
    return client.getListDetail<T>({
      endpoint: this.endpoint,
      contentId: id,
    });
  };
}
