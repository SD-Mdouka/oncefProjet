export default Button = ({ title, href, classStyle }) => {
  return (
    <a
      buttonstyle="fill"
      buttoncolor="green"
      className={classStyle}
      href={href}
      target="_blank"
    >
      {title}
    </a>
  );
};
