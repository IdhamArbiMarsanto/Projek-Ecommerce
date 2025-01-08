import Image from "next/image";

const Hero = () => {
    return (
        <div className="bg-[#E3EDF6] mt-4">
            <div className="container grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary"> <span className="font-bold">$111.00</span></p>
                        
                        <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
                            The best futuring collection 2045
                        </h1>

                        <h3 className="text-2xl font-['Oregano', cursive]">
                            Exclusive offer <span className="text-red-600">-10%</span> off this WEEK
                        </h3>

                        <a className="inline-block bg-white rounded-md px-6 py-3 hover:bg-accent hover:text-white" href="#">
                            SHOP NOW
                        </a>
                    </div>
                </div>
                <div className="ml-auto">
                <Image
  src="/hero.jpg"
  alt="hero"
  className="w-full h-[300px] object-cover"
  width={1920} // Tentukan lebar gambar
  height={300} // Tentukan tinggi gambar
/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
