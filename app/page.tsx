import Image from "next/image";
import Type from "@components/Type";

export default function Home() {
  return (
    <section>
      <div className="flex flex-row items-center justify-between px-2 lg:px-[200px]">
        <div className="">
          <div className="home-header">
            <div>
              <h1 className="heading">Hi There! 👋🏻</h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">DARIO TURIN</strong>
              </h1>
              <div style={{ textAlign: "left" }}>
                <Type />
              </div>
            </div>
          </div>
        </div>
        <div className="py-7">
          <Image
            src="/DarioTurin.jpeg"
            alt="Landscape picture"
            width={250}
            height={250}
            className="home-image"
          />
        </div>
      </div>
    </section>
  );
}
