import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://t.me/for_normies",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://x.com/for_normies",
    title: "x",
    icon: "X",
  },
  {
    link: "https://www.youtube.com/@for_normies",
    title: "Youtube",
    icon: "Youtube",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="hidden">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
