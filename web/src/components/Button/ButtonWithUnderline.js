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
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";

  return (
    <Tag
      className={`group relative inline-flex font-body text-primary-900 hover:text-primary-400 text-sm font-bold tracking-widest uppercase pb-1 ${className}`}
      fade
      to={href}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      {text}
      <span className="absolute w-full bottom-0 left-0 right-auto bg-primary-400 h-0.5 group-hover:w-0 group-hover:right-0 group-hover:left-auto transition-all duration-500 ease-in-out"></span>
    </Tag>
  );
};

export default Button;
