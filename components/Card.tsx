import { PropsWithChildren } from "react";

interface CardProps {
  Icon: any;
}
function Card(props: PropsWithChildren<CardProps>) {
  const { Icon, children } = props;
  return (
    <article className="text-center items-center p-8 h-full flex flex-col gap-4 border-solid border-secondary-gray-medium border bg-white">
      <span>{Icon && <Icon className="text-terciary-orange w-16 h-16" />}</span>
      <p className="px-8 text-primary-gray-dark">{children}</p>
    </article>
  );
}

export { Card };
