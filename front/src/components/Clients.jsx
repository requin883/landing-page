export const Clients = () => {
  return (
    <>
      <section className="py-12 clients grid place-items-center w-screen">
        <h2 className="text-[2rem] font-bold">Our Clients</h2>
        <p className="text-neutral-gray text-[1rem]">We have been working with some Fortune 500+ clients</p>
        <div className="grid md:grid-flow-col py-10 place-items-center w-full">
          <img src="/Logo.jpg" alt="" />
          <img src="/Logo1.png" alt="" />
          <img src="/Logo2.png" alt="" />
          <img src="/Logo4.png" alt="" />
          <img src="/Logo5.png" alt="" />
          <img src="/Logo6.png" alt="" />
        </div>
      </section>
    </>
  );
}