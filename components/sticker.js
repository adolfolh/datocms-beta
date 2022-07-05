import Image from "next/image";
import sticker from 'assets/images/sticker-1.svg'

export default function Sticker() {
    return (
        <div className="max-w-10 max-w-screen-md mx-auto md:pt-0 hover:scale-110 transition-all">
            <Image 
                src={sticker}
                alt="A sticker"
                width={"500px"}
                height={"500px"}
            />
        </div>
    );
  }
  