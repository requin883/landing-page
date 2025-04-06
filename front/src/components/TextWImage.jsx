export const TextWImage = ({ sectionNumber, img, title, paragraph, direction, btnText }) => {
  return (
    <section className={`textwithimage-${sectionNumber} grid grid-flow-col grid-cols-2 place-items-center w-screen`}>
      <div>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className={`max-w-xl grid ${direction ? 'text-right place-items-end order-first' : 'text-left place-items-start order-last'} gap-8 p-2 text-center`}>
        <h2 className="text-dark-gray font-bold text-4xl">{title}</h2>
        <p className="text-neutral-gray text-base">{paragraph}</p>
        <button className="text-white font-bold bg-primary px-8 py-4 rounded-md">{btnText}</button>
      </div>
    </section>
  )
}