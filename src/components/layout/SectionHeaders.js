
export default function SectionHeaders({subHeader, mainHeader}) {
  return (
    <div className="text-center pb-6">
    <h3 className="uppercase text-gray-600 text-sm font-semibold">
     {subHeader}
    </h3>
    <h2 className="text-primary text-bold text-4xl">
        {mainHeader}
    </h2>
  </div>
  )
}
