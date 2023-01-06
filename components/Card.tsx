import { PropsWithChildren } from "react";

interface CardProps {
  Icon: any;
}
function Card(props: PropsWithChildren<CardProps>) {
  const { Icon, children } = props;
  return (
    <article className="card">
      <span>{Icon && <Icon className="text-terciary-orange w-14 h-14" />}</span>
      <p className="text-primary-gray-dark">{children}</p>
    </article>
  );
}

export { Card };
