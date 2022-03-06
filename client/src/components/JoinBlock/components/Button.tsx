import { ButtonHTMLAttributes } from "react";

interface IProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {}

export const Button = ({ onClick }: IProps) => {
  return (
    <button className="btn btn-success" onClick={onClick}>
      Войти
    </button>
  );
};
