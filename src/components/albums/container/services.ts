export async function fetchAlbums(): Promise<
  {
    userId: number;
    id: number;
    title: string;
  }[]
> {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");

  return res.json();
}
