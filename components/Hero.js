import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/images/home-bg.jpg" layout="fill" objectFit="cover" />
    </div>
  );
}

export default Hero;
