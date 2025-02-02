import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image"; // ✅ Import Next.js Image
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={500} // ✅ Add proper width & height
          height={200}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-purple">connect</span> with me?
        </h1>

        <a href="mailto:libermanreuven@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col items-center mt-16 md:flex-row justify-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.link}>
              {" "}
              {/* ✅ Moved key to <a> */}
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image src={info.img} alt="icons" width={20} height={20} />{" "}
                {/* ✅ Optimized */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
