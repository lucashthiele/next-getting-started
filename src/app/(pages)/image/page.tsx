import Image from "next/image";
import yamahaImage from "@public/Yamaha-MT-03.jpg";

export default function ImagePage() {
  return <Image src={yamahaImage} alt="mt03-motorcycle"></Image>;
}
