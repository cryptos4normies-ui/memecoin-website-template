import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12 mt-2"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12 mt-2"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12 mt-2"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12 mt-2"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14">
            About C4N
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`(Cryptos for Normies)`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">C4N</span>, aka{" "}
                <span className="font-semibold italic">{'"Cryptos for Normies"'}</span>{" "}
                was inspired by the popular{" "}
                <a href="https://www.dummies.com" target="_blank" rel="noopener noreferrer" className="underline">
                  <em>For Dummies</em>
                </a>{" "}
                instructional series and{" "}
                <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer" className="underline">
                  <em>Khan Academy</em>
                </a>.{" "}
              </p>
              <p className="indent-12 mt-3">
                <span className="font-bold">Norm</span>, the mascot of <span className="font-bold">C4N</span>, has been living in the cryptoverse for over a decade. 
                He's passionate about crypto/dApps and enjoys sharing his knowledge/experience with the goal of onboarding <span className="font-bold">normies</span> while aiding them with building a mindset and toolset to safely and successfully
                navigate this ever-evolving space.
              </p>
              <p className="indent-12 mt-3">
                His streams will be live on{" "}
                 <a href="https://pump.fun/live" target="_blank" rel="noopener noreferrer" className="underline">
                  pump.fun
                </a>{" "}
                and later posted on{" "}
                <a href="https://www.youtube.com/@For_Normies" target="_blank" rel="noopener noreferrer" className="underline">
                  YouTube
                </a>{" "}
                and{" "}
                <a href="https://x.com/for_normies" target="_blank" rel="noopener noreferrer" className="underline">
                  X
                </a>. A{" "}
                <a href="https://t.me/+XvJ1bAwmsRphMzg1" target="_blank" rel="noopener noreferrer" className="underline">
                  Telegram
                </a>{" "}
                group chat is offered for Q&A.
                Topics such as safety practices, explorer analytics, liquidity providing, NFTs, leveraging money markets, airdrop farming,
                prediction markets, governance, and much more will be covered.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p className="text-4xl p-10">
            Norm is not a maxi of any blockchain but his project{" "}
            <span className="text-5xl font-bold underline decoration-duis">
              C4N
            </span>{" "}
            lives on{" "}
            <span className="text-5xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
