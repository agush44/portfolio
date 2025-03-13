import { useWindowSize } from "react-use";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const SECTION_HEIGHT = 1500;

export const CenterStackImage = () => {
  const { width } = useWindowSize();
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    width < 768 ? ["250%", "120%"] : ["170%", "100%"]
  );

  const backgroundPosition = width < 768 ? "center top" : "center";

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 1100],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        backgroundPosition,
        opacity,
        backgroundImage: "url(/JavaScript-logo.svg)",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
