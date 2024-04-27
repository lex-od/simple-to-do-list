import { FC } from "react";
import css from "./IconButton.module.scss";

type Props = JSX.IntrinsicElements["button"];

const IconButton: FC<Props> = (props) => {
  return <button className={css.iconButton} {...props} />;
};

export default IconButton;
