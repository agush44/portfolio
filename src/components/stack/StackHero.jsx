import { CenterStackImage } from "stack/centerStackImage";
import { ParallaxStackImages } from "./ParallaxStackImages";

const SECTION_HEIGHT = 1500;

export const StackHero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterStackImage />
      <ParallaxStackImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};
