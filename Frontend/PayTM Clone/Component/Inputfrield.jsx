const Inputfrield = ({ parameter, uppetext, lowertext}) => {
  return (
    <div>
        <label for={uppetext} class="block mb-2.5 text-sm font-medium text-heading">{uppetext}</label>
        <input type={parameter} id={uppetext} class=" required rounded-xl bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder={lowertext} required />
    </div>
  )
}

export default Inputfrield