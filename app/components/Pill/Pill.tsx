import css from "classnames";
import styles from "./Pill.module.css";

type Props = {
  color: string;
  children: JSX.Element;
  style?: {};
  className?: {};
};

const Pill = ({ color, children, style, className }: Props): JSX.Element => {
  return (
    <div style={{ backgroundColor: color, ...style }} className={css(styles['colored-pill'], className)}>
      {children}
    </div>
  )
};

export { Pill };
