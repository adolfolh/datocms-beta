export default function PostTitle({ children }) {
  return (
    <div className="screen-70 pt-24 flex items-center justify-center md:justify-start">
      <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left md:ml-24 md:mr-24 font-accent">
        {children}.
      </h1>
    </div>
  );
}
