export const ItemCounter = ({ amount, icon, subtitle }) => {
  return (
    <div className="grid grid-flow-col place-items-center gap-4 p-8 text-center max-w-[15rem]">
      <div>
        <img src={icon} alt="" />
      </div>
      <div className="grid place-items-start text-center max-w-[15rem]">
        <h3 className="text-xl font-bold">{amount}</h3>
        <p className="text-neutral-gray text-sm">{subtitle}</p>
      </div>
    </div>
  );
}