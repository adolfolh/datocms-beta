export default function Intro({page}) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between pt-32 md:pt-40 pb-24 md:pb-32">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 font-accent">
        {page}.
      </h1>
    </section>
  );
}
