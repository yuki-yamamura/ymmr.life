type Props = {
  albums: {
    userId: number;
    id: number;
    title: string;
  }[];
};

export default function Component({ albums }: Props) {
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  );
}
