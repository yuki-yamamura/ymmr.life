import { http, HttpResponse } from "msw";
import { data } from "./data";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/photos", () => {
    return HttpResponse.json(data);
  }),
];
