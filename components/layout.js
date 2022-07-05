
export default function Layout({ children }) {
  return (
    <>
      <div className="bg-black text-white py-8 min-w-full">
        <main>{children}</main>
      </div>
    </>
  );
}
