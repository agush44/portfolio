import { ParallaxStackImg } from "./ParallaxStackImg";

export const ParallaxStackImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[100px] flex flex-col gap-8 sm:gap-8">
      <ParallaxStackImg
        src="/react.png"
        alt="React Logo"
        start={-150}
        end={150}
        className="w-1/3"
      />
      <ParallaxStackImg
        src="/Node.js_logo.svg"
        alt="Node.js Logo"
        start={150}
        end={-200}
        className="mx-auto w-2/3"
      />
      <ParallaxStackImg
        src="/express.png"
        alt="Express Logo"
        start={-150}
        end={150}
        className="ml-auto w-7/10"
      />
      <ParallaxStackImg
        src="/mongo.png"
        alt="MongoDB Logo"
        start={0}
        end={-400}
        className="ml-24 w-5/12"
      />
    </div>
  );
};
