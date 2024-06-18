import Component from "../presenter";
import { fetchAlbums } from "./service";

export default async function Container() {
  const albums = await fetchAlbums();

  return <Component albums={albums} />;
}
