import { Header } from "./header";
export const Hero = () => {
  return (
    <>
      <section id="home" className="hero w-screen h-screen relative bg-[#F5F7FA] grid place-content-center place-items-center grid-cols-1 md:grid-cols-2 px-[144px] py-[96px] gap-4">
        <Header />
        <div>
          <h1 className="text-[64px] text-[#4D4D4D] leading-20 font-semibold pb-4">Lessons and insights <span className="text-primary">from 8 years</span></h1>
          <p className="text-[#717171] pb-8">Where to grow your business as a photographer: site or social media?</p>
          <button className="register py-3 px-8 bg-primary text-white rounded-sm">Register</button>
        </div>
        <div>
          <img src="./public/Illustration.png" alt="a computer and a scientist" />
        </div>
      </section >
    </>
  );
}