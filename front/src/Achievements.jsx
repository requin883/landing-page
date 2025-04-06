import { ItemCounter } from "./ItemCounter"

export const Achievements = () => {
  return (
    <section className="achievements grid place-items-center grid-flow-col py-12 w-screen">
      <div className="max-w-sm grid place-items-start">
        <h2 className="text-[2rem] font-bold">Helping a local <span className="text-primary"> business reinvent itself </span></h2>
        <p className="text-neutral-gray text-[1rem]">We reached here with our hard work and dedication</p>
      </div>
      <div className="grid auto-cols-max grid-rows-2 grid-cols-2 gap-10">
        <ItemCounter icon='/two.png' amount='2,245,341' subtitle='Members' />
        <ItemCounter icon='/hands.png' amount='46,328' subtitle='Clubs' />
        <ItemCounter icon='/click.png' amount='828,867' subtitle='Event Bookings' />
        <ItemCounter icon='/payments.png' amount='1,926,436' subtitle='Payments' />
      </div>
    </section>
  )
}