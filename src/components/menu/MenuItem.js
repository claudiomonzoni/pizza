import Image from "next/image"

export default function MenuItem() {
  return (
  
    <div className="bg-gray-200  p-4 rounded-lg text-center relative hover:bg-gray-100 hover:shadow-md hover:shadow-black/20  ">

      {/* <div className="text-center">
        <Image src={'/pizza-cover.webp'} fill={true} objectFit={'contain'}  className="max-h-auto max-h-44 block mx-auto" />
      </div> */}

        <img src="/pizza-cover.webp" alt="pizza" className="max-h-auto max-h-44 block mx-auto" />
        <h4 className="font-bold text-primary text-3xl my-2 mt-4 ">Pizza de pepperoni</h4>
        <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam excepturi nobis.
        </p>
        <button className="bg-primary text-white rounded-full px-4 py-2 mt-4">Agregar a carrito $120</button>
    </div>

  )
}
