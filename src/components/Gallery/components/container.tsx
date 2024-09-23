import { getPhotos } from "../api";
import { Component } from "./presenter";

export const Gallery = async () => {
  const photos = await getPhotos();

  return <Component photos={photos} />;
};
