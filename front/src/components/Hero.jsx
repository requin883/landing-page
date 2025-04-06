
export const Hero = () => {
  return (
    <>
      <section className="hero screen-full relative bg-[#F5F7FA] grid place-content-center place-items-center grid-cols-1 md:grid-cols-2 px-[144px] py-[96px] gap-4">
        <div>
          <h1 className="text-[64px] text-[#4D4D4D] leading-20 font-semibold pb-4">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h1>
          <p className="text-[#717171] pb-8">Where to grow your business as a photographer: site or social media?</p>
          <button className="register py-3 px-8 bg-[#4CAF4F] text-white rounded-sm">Register</button>
        </div>
        <div>
          <img src="./public/Illustration.png" alt="a computer and a scientist" />
        </div>
      </section >
    </>
  );
}