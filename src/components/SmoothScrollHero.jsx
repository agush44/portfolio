import { ReactLenis } from "lenis/dist/lenis-react";
import { StackHero } from "./stack/StackHero";

import { Projects } from "./projects/Projects";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <StackHero />
        <Projects />
      </ReactLenis>
    </div>
  );
};
