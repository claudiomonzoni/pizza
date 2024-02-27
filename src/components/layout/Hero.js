import Image from "next/image";
import IcoDer from "../icons/IcoDer";
export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-6xl font-semibold">Todo es mejor <br/> con una <span className="text-primary">pizza</span></h1>
        <p className="my-4 text-gray-500">Aqui cualuier texto de colocación para dar el gatazo.</p>
        <div className='flex gap-4 text-sm'>
            <button className="bg-primary text-white px-4 py-2 rounded-full flex gap-2 uppercase items-center">Ordenar pizza <IcoDer /></button>
            <button className="py-2 px-4 font-semibold flex gap-2 text-gray-600">Saber más <IcoDer /></button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/pizza-cover.webp"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
