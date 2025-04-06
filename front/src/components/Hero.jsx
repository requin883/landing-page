import { Header } from "./header";
export const Hero = () => {
  return (
    <>
      <section id="home" className="hero md:w-screen md:h-screen relative bg-neutral-silver grid place-content-center place-items-center grid-cols-1 md:grid-cols-2 px-[144px] py-[96px] gap-4">
        <Header />
        <div>
          <h1 className="text-[64px] text-dark-gray leading-20 font-semibold pb-4">Lessons and insights <span className="text-primary">from 8 years</span></h1>
          <p className="text-neutral-gray pb-8">Where to grow your business as a photographer: site or social media?</p>
          <button className="register py-3 px-8 bg-primary text-white rounded-sm">Register</button>
        </div>
        <div>
          <img src="/Illustration.png" alt="a computer and a scientist" />
        </div>
      </section >
    </>
  );
}