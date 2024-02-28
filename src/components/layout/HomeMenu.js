import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full">
        <div className="w-48 h-48 absolute left-0 top-0">
          <Image
            src={"/salad-izq.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"Ensalada"}
            className="flex"
          />
        </div>
        <div className="w-48 h-48 absolute right-0 top-0">
          <Image
            src={"/salad-der.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"Ensalada"}
            className="flex"
          />
        </div>
      </div>
   
<SectionHeaders mainHeader={'menu'} subHeader={'checa nuestro menu'} />

      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
