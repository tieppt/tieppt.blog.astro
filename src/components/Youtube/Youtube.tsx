import { h } from 'preact';
import Styles from './Youtube.module.scss';
interface Props {
  className?: string;
  id: string;
  title?: string;
  loading?: 'lazy' | 'eager';
}

export function Youtube({ className, title, id, loading = 'lazy' }: Props) {
  return (
    <div className={className ?? Styles['youtube-embed-16-9']}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;"
        allowFullScreen
        title={title}
        loading={loading}
      ></iframe>
    </div>
  );
}
