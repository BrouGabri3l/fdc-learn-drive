import { PropsWithChildren } from "react";

interface ButtonProps {
  Icon?: any;
  className?: String;
  theme: "primary" | "secondary" | "outline";
}
function Button(props: PropsWithChildren<ButtonProps>) {
  const { children, Icon, className, theme } = props;
  const variant = `btn-${theme}`;

  return (
    <button className={`btn ${variant} ${className || ""}`}>
      <span className="py-3 flex-grow text-center leading-6 text-base" >{children}</span>
      {Icon && (
        <span
          className={`flex items-center justify-center p-3 ${
            theme == "primary" && "btn-icon-bg"
          }`}
        >
          <Icon />
        </span>
      )}
    </button>
  );
}

export default Button;
