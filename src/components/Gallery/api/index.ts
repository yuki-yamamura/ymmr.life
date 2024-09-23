import { Photo } from "../types";

export const getPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = (await res.json()) as Photo[];

  return photos;
};
