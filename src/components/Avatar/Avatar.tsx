import { ComponentChildren, h } from 'preact';
import Styles from './Avatar.module.scss';
interface Props {
  children: ComponentChildren;
  url: string;
}

export default function Avatar({ children, url }: Props) {
  return (
    <div className={Styles.avatar}>
      <a href={url}>{url}</a>
      {children}
    </div>
  );
}
