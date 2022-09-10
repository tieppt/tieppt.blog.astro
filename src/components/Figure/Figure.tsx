import { h } from 'preact';

interface FigureProps {
  className?: string;
  link?: string;
  target?: string;
  rel?: string;
  alt?: string;
  title?: string;
  caption?: string;
  src: string;
}

export function Figure(props: FigureProps) {
  const { className = '', link, target, rel, src, alt, title, caption } = props;
  const imgEL = <img src={src} alt={alt || caption} />;
  const withCaption = !!(caption || title);

  return (
    <figure className={'figure-container ' + className}>
      {link != null ? (
        <a href={link} target={target} rel={rel}>
          {imgEL}
        </a>
      ) : (
        imgEL
      )}

      {withCaption && (
        <figcaption>
          {title != null && <h4>{title}</h4>}

          {caption != null && <p>{caption}</p>}
        </figcaption>
      )}
    </figure>
  );
}
