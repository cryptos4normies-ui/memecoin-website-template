import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
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
                was inspired by the popular 'For Dummies' instructional series.{" "}
              </p>
              <p className="indent-12 mt-3">
                Norm, the mascot of C4N, has been living in the cryptoverse for over a decade. He is passionate about crypto
                and decentralization applications because of the opportunities they present. He enjoys sharing his experiences
                and knowledge with the goal of onboarding more users by equipping them with the tools to safely and successfully
                navigate this wild space.
              </p>
              <p className="indent-12 mt-3">
                His streams will be live on pump.fun and later posted on Youtube and X. He offers a telegram channel for Q&A.
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
