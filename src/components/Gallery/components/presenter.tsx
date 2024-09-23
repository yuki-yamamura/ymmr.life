import { Photo } from "../types";

import styles from "./index.module.scss";

type Props = {
  photos: Photo[];
};
export const Component = ({ photos }: Props) => (
  <div className={styles.module}>
    {photos.map((photo) => (
      <div key={photo.id}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.thumbnailUrl} alt={photo.title} />
        <span>{photo.title}</span>
      </div>
    ))}
  </div>
);
