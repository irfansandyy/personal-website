import Link from "next/link";

type buttonProps = {
  arrow: string;
  text: string;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
};


function svgArrow( direction: string ) {
  const iconClass = "w-6 h-6 md:w-8 md:h-8";
  if (direction === "down")  {
    return (
      <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none" >
        <path d="M14.87 28.83C15.495 29.455 16.51 29.455 17.135 28.83L25.135 20.83C25.76 20.205 25.76 19.19 25.135 18.565C24.51 17.94 23.495 17.94 22.87 18.565L17.6 23.835V5.30001C17.6 4.41501 16.885 3.70001 16 3.70001C15.115 3.70001 14.4 4.41501 14.4 5.30001V23.835L9.13 18.565C8.505 17.94 7.49 17.94 6.865 18.565C6.24 19.19 6.24 20.205 6.865 20.83L14.865 28.83H14.87Z" fill="currentColor"/>
      </svg>
    )
  } else if (direction === "up") {
    return (
      <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path d="M17.13 4.17005C16.505 3.54505 15.49 3.54505 14.865 4.17005L6.865 12.17C6.24 12.795 6.24 13.81 6.865 14.435C7.49 15.06 8.505 15.06 9.13 14.435L14.4 9.16505V27.7C14.4 28.585 15.115 29.3 16 29.3C16.885 29.3 17.6 28.585 17.6 27.7V9.16505L22.87 14.435C23.495 15.06 24.51 15.06 25.135 14.435C25.76 13.81 25.76 12.795 25.135 12.17L17.135 4.17005H17.13Z" fill="currentColor"/>
      </svg>    
    )
  } else if (direction === "right") {
    return (
      <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path d="M28.33 17.63C28.955 17.005 28.955 15.99 28.33 15.365L20.33 7.36501C19.705 6.74001 18.69 6.74001 18.065 7.36501C17.44 7.99001 17.44 9.00501 18.065 9.63001L23.335 14.9H4.8C3.915 14.9 3.2 15.615 3.2 16.5C3.2 17.385 3.915 18.1 4.8 18.1H23.335L18.065 23.37C17.44 23.995 17.44 25.01 18.065 25.635C18.69 26.26 19.705 26.26 20.33 25.635L28.33 17.635V17.63Z" fill="currentColor"/>
      </svg>
    )
  } else if (direction === "left") {
    return (
      <svg className={iconClass} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        <path d="M3.66999 15.37C3.04499 15.995 3.04499 17.01 3.66999 17.635L11.67 25.635C12.295 26.26 13.31 26.26 13.935 25.635C14.56 25.01 14.56 23.995 13.935 23.37L8.66499 18.1H27.2C28.085 18.1 28.8 17.385 28.8 16.5C28.8 15.615 28.085 14.9 27.2 14.9H8.66499L13.935 9.62999C14.56 9.00499 14.56 7.98999 13.935 7.36499C13.31 6.73999 12.295 6.73999 11.67 7.36499L3.66999 15.365V15.37Z" fill="currentColor"/>
      </svg>
    )
  }
}

export default function Button({ arrow, text, href, target, rel }: buttonProps) {
  const classes =
    "group inline-flex items-center justify-center gap-2 px-4 py-2 md:gap-6 md:py-3 md:px-8 rounded-xl border-2 border-solid border-primary bg-background text-primary hover:bg-primary transition-colors duration-300";

  const inner = (
    <>
      <span className="text-xl md:text-[1.75rem] font-bold text-center text-foreground group-hover:!text-background">
        {text}
      </span>
      <span className="text-foreground group-hover:!text-background">
        {svgArrow(arrow)}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {inner}
      </Link>
    );
  }

  return <button className={classes}>{inner}</button>;
}