import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  icon,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:", "mailto:"));

  return (
    <Tag
      className={`group px-5 py-3 min-w-[160px] h-[50px] rounded-4xl inline-flex items-center justify-center text-center font-heading font-semibold no-underline whitespace-nowrap ${
        altStyle
          ? ""
          : "bg-primary-900 hover:bg-primary-700 text-white hover:text-white"
      } ${className || ""}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      altStyle={altStyle}
    >
      {icon && (
        <i
          className={`mr-2 ${
            altStyle ? "text-primary-900" : "text-white"
          } ${icon}`}
        ></i>
      )}
      {text}
    </Tag>
  );
};

export default Button;
