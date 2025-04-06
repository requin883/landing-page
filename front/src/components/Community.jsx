import { ImageWText } from "./ImageWText";

export const Community = () => {
  return (
    <section className="community grid place-items-center text-center">
      <div className="max-w-[35rem]">
        <h2 className="text-dark-gray font-bold pb-2 text-4xl">Manage your entire community in a single system</h2>
        <p className="text-neutral-gray">Who is Nextcent suitable for?</p>
      </div>
      <div className="grid md:grid-flow-col py-10 place-items-center w-full">
        <ImageWText image='/three.png' title='Membership Organisations' paragraph='Our membership management software provides full automation of membership renewals and payments' />
        <ImageWText image='/building.png' title='National Associations' paragraph='Our membership management software provides full automation of membership renewals and payments' />
        <ImageWText image='/hands.png' title='Clubs And Groups' paragraph='Our membership management software provides full automation of membership renewals and payments' />
      </div>
    </section>
  );
}