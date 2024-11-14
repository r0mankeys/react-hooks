export default function Layout({ children }) {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white ps-[5vw] py-4">
        <h1 className="text-4xl font-bold w-fit">React Hooks</h1>
      </header>
      <main className="max-w-[60ch] w-full mx-auto p-4 my-10">
        <HeroText />
        {children}
      </main>
    </div>
  );
}

function HeroText() {
  return (
      <h2 className="text-wrap text-3xl italic font-bold text-center select-none">
        Mastering React Hooks by making a website
      </h2>
  );
}
