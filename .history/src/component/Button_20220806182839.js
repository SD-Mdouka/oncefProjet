export default Button = ({
  title,
  href = "https://www.oncf2255.ma/",
  classStyle,
}) => {
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
