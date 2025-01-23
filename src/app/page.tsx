"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="text-center mt-16 px-4">
        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-serif">The New</h1>
        <h2 className="text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2 font-serif">
          SKin Care
        </h2>
        <h3 className="text-black text-4xl sm:text-5xl md:text-6xl font-serif mt-4">Essentials</h3>
      </div>

      {/* Images Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 px-4 mt-8 sm:mt-12">
        <div className="flex justify-center">
          <Image
            src="/skin.jpg"
            alt="Skin Care"
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="flex justify-center sm:mt-0 mt-8">
          <Image
            src="/facewash.jpg"
            alt="Face Wash"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Best Selling Section */}
      <div className="text-center mt-16 px-4">
        <h4 className="text-black text-3xl sm:text-4xl md:text-5xl font-serif">Best Selling Product</h4>
        <p className="text-black text-lg sm:text-xl md:text-2xl mt-4 font-normal">
          Our Best Selling products are popular for their ability to <br className="hidden sm:block" />
          deeply nourish and cleanse the skin.
        </p>
      </div>

      {/* Product Images Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 px-4">
        <Image
          src="/serum.jpg"
          alt="Serum"
          width={250}
          height={250}
          className="rounded-md"
        />
        <Image
          src="/cleansing.jpg"
          alt="Cleansing"
          width={250}
          height={250}
          className="rounded-md"
        />
      </div>
      <div className="flex justify-center mt-12">
        <Image
          src="/bundles.jpg"
          alt="Bundles"
          width={400}
          height={350}
          className="rounded-md"
        />
      </div>

      {/* Expert Opinions Section */}
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-36 mt-24 px-4">
        <div>
          <h5 className="text-black text-3xl sm:text-4xl font-serif text-center lg:text-left">
            The Council <br />
            Has Spoken
          </h5>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-black text-lg sm:text-xl md:text-2xl font-normal">
            We asked for their opinions, and our top <br className="hidden sm:block" />
            dermatologists are enthusiastic about these <br className="hidden sm:block" />
            powerful skincare products. Each of them <br className="hidden sm:block" />
            is formulated to address your specific skin <br className="hidden sm:block" />
            needs and ensure you achieve radiant, <br className="hidden sm:block" />
            healthy-looking skin.
          </p>
        </div>
        <Image
          src="/picture.jpg"
          alt="Expert Opinion"
          width={300}
          height={300}
          className="rounded-md"
        />
      </div>

      {/* Shop Now Button */}
      <div className="flex justify-center mt-12 mb-16 px-4">
        <button className="bg-black text-white font-serif rounded-full px-6 py-3 text-lg sm:text-xl hover:bg-gray-800 transition">
          <Link href="/products">Shop Now</Link>
        </button>
      </div>
    </main>
  );
}
