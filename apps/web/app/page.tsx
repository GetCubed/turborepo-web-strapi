import { Hero } from "@/components/dynamic-zone/hero";

export default function HomePage(): JSX.Element {
  return (
    <main className="border-4 border-white flex flex-col justify-center items-center h-screen w-full">
      <Hero
        heading="Hello, World!"
        sub_heading="Welcome to our website"
        CTAs={["Get Started", "Learn More"]}
        locale="en"
      />
    </main>
  );
}
