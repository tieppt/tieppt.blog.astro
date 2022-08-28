import { h } from "preact";
interface Props {
  className?: string;
  id: string;
  title?: string;
  loading?: 'lazy' | 'eager';
}

export default function Youtube({ className, title, id, loading = 'lazy' }: Props) {
  return (
    <div
      className={className}
      style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}` }
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;"
        allowFullScreen
        title={title}
        loading={loading}
      ></iframe>
    </div>
  );
}
