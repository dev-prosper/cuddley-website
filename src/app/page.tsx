import Hero from "@/components/landing-page/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-14 font-noto-serif">
      {/* Hero Section */}
        <Hero />

        
      {/* Featured Collections Section */}

      <section className="w-full max-w-150 h-250">
        <div className="w-89 h-25 mx-2 md:mx-27 space-y-2">
          <h2 className="w-89 h-10 text-[32px] font-bold text-white text-center">
            Featured Collections
          </h2>
          <p className="w-89 h-12 text-center text-[14px] text-[#ffffff]">
            Explore our curated collections, each designed to bring a unique
            aesthetic to your home.
          </p>
        </div>

        <div className="space-y-5">
          <div className="w-full max-w-150 h-63 flex flex-row space-x-5">
            <div className="w-44 h-63 space-y-3">
              <div className="w-44 h-25 rounded-[8px]">
                <Image
                  src="/Living-Room.png"
                  alt="Living Room Sofa"
                  width={173}
                  height={110}
                />
              </div>

              <div className="w-44 h-34 space-y-2">
                <h3 className="w-44 h-6 text-[17px] text-white">Living Room</h3>
                <p className="w-44 h-27 text-[14px] text-[#9EA3B8]">
                  Create a welcoming and stylish living space with our range of
                  sofas, armchairs, and coffee tables.
                </p>
              </div>
            </div>

            <div className="w-44 h-63 space-y-3">
              <div className="w-44 h-25 rounded-[8px]">
                <Image
                  src="/Dining-Room.png"
                  alt="Dining Room Set-up"
                  width={173}
                  height={110}
                />
              </div>

              <div className="w-44 h-34 space-y-2">
                <h3 className="w-44 h-6 text-[17px] text-white">Dining Room</h3>
                <p className="w-44 h-27 text-[14px] text-[#9EA3B8]">
                  Dine in style with our elegant dining tables, chairs, and
                  lighting options.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-150 h-63 flex flex-row space-x-5">
            <div className="w-44 h-63 space-y-3">
              <div className="w-44 h-25 rounded-[8px]">
                <Image
                  src="/Living-Room.png"
                  alt="Living Room Sofa"
                  width={173}
                  height={110}
                />
              </div>

              <div className="w-44 h-34 space-y-2">
                <h3 className="w-44 h-6 text-[17px] text-white">Living Room</h3>
                <p className="w-44 h-27 text-[14px] text-[#9EA3B8]">
                  Create a welcoming and stylish living space with our range of
                  sofas, armchairs, and coffee tables.
                </p>
              </div>
            </div>

            <div className="w-44 h-63 space-y-3">
              <div className="w-44 h-25 rounded-[8px]">
                <Image
                  src="/Dining-Room.png"
                  alt="Dining Room Set-up"
                  width={173}
                  height={110}
                />
              </div>

              <div className="w-44 h-35 space-y-2">
                <h3 className="w-44 h-6 text-[17px] text-white">Dining Room</h3>
                <p className="w-44 h-27 text-[14px] text-[#9EA3B8]">
                  Dine in style with our elegant dining tables, chairs, and
                  lighting options.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-78 space-y-5">
            <div className="w-full h-44 rounded-[12px]">
              <Image
                src="/Bedroom.png"
                alt="Bedroom Set-up and Decorations"
                width={368}
                height={175}
              />
            </div>

            <div className="w-49 h-27 mx-20">
              <h3 className="w-44 h-6 text-center text-white">Bedroom</h3>
              <p className="w-47 h-21 text-[#9EA3B8] text-[14px] text-center">
                Transform your bedroom into a cozy retreat with our luxurious
                beds, bedding, and decor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
