export default function Container({ children, classes }) {
  return <div className={`container mx-auto px-5 ${classes}`}>{children}</div>;
}
