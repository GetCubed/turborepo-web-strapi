export default function HomePage(): JSX.Element {
  return (
    <main className="outline flex flex-col justify-center items-center h-screen">
      <div className="outline flex flex-row gap-4">
        <h1>Hello, World!</h1>

        <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Button
        </button>

        <button className="btn btn-primary">Button</button>
        <button className="btn">Button</button>
      </div>

      <div className="outline flex flex-col gap-4">
        <h1>Hello, World!</h1>

        <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Button
        </button>

        <button className="btn btn-primary">Button</button>
        <button className="btn">Button</button>
      </div>
    </main>
  );
}
