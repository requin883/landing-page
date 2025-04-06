export const ImageWText = ({ image, title, paragraph }) => {
  return (
    <div className="grid place-items-center gap-4 p-8 text-center max-w-[15rem]">
      <img src={image} alt={title} className="w-10 h-10 object-cover" />
      <h3 className="text-[2rem] text-dark-gray font-bold">{title}</h3>
      <p className="text-neutral-gray">{paragraph}</p>
    </div>
  );
}