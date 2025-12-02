import * as React from 'react';
import {
  LayoutGroup,
  motion,
  useAnimate,
  type Transition,
  type AnimationSequence,
} from 'framer-motion';

interface ComponentProps {
  orbitItems: OrbitItem[];
  stageSize?: number;
  imageSize?: number;
  onItemClick?: (item: OrbitItem) => void;
}

export type OrbitItem = {
  id: number;
  name: string;
  src: string;
};

const transition: Transition = {
  delay: 0,
  stiffness: 300,
  damping: 35,
  type: 'spring',
  restSpeed: 0.01,
  restDelta: 0.01,
};

const spinConfig = {
  duration: 30,
  ease: 'linear' as const,
  repeat: Infinity,
};

// Helper function to delay execution
const delay = (fn: () => void, ms: number) => {
  const timeoutId = setTimeout(fn, ms);
  return () => clearTimeout(timeoutId);
};

const qsa = (root: Element, sel: string) =>
  Array.from(root.querySelectorAll(sel));

const angleOf = (el: Element) => Number((el as HTMLElement).dataset.angle || 0);

const armOfImg = (img: Element) =>
  (img as HTMLElement).closest('[data-arm]') as HTMLElement | null;

export const RadialIntro = ({
  orbitItems,
  stageSize = 320,
  imageSize = 60,
  onItemClick,
}: ComponentProps) => {
  const step = 360 / orbitItems.length;
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const root = scope.current;
    if (!root) return;

    // get arm and image elements
    const arms = qsa(root, '[data-arm]');
    const imgs = qsa(root, '[data-arm-image]');
    const stops: Array<() => void> = [];

    // image/button lift-in
    delay(() => {
      imgs.forEach((img) => {
        animate(img as any, { top: 0 }, transition);
      });
    }, 250);

    // build sequence for orbit placement
    const orbitPlacementSequence: AnimationSequence = [
      ...arms.map((el): [Element, Record<string, any>, any] => [
        el,
        { rotate: angleOf(el) },
        { ...transition, at: 0 },
      ]),
      ...imgs.map((img): [Element, Record<string, any>, any] => [
        img,
        { rotate: -angleOf(armOfImg(img)!), opacity: 1 },
        { ...transition, at: 0 },
      ]),
    ];

    // play placement sequence
    delay(() => animate(orbitPlacementSequence), 700);

    // start continuous spin for arms and images
    delay(() => {
      // arms spin clockwise
      arms.forEach((el) => {
        const angle = angleOf(el);
        const ctrl = animate(el, { rotate: [angle, angle + 360] }, spinConfig);
        stops.push(() => {
          try {
            ctrl.stop();
          } catch (e) {
            // Animation already stopped
          }
        });
      });

      // images/buttons counter-spin to stay upright
      imgs.forEach((img) => {
        const arm = armOfImg(img);
        const angle = arm ? angleOf(arm) : 0;
        const ctrl = animate(
          img,
          { rotate: [-angle, -angle - 360] },
          spinConfig,
        );
        stops.push(() => {
          try {
            ctrl.stop();
          } catch (e) {
            // Animation already stopped
          }
        });
      });
    }, 1300);

    return () => stops.forEach((stop) => stop());
  }, [orbitItems.length, animate]);

  return (
    <LayoutGroup>
      <motion.div
        ref={scope}
        className="relative overflow-visible"
        style={{ width: stageSize, height: stageSize }}
        initial={false}
      >
        {orbitItems.map((item, i) => (
          <motion.div
            key={item.id}
            data-arm
            className="will-change-transform absolute inset-0"
            style={{ zIndex: orbitItems.length - i }}
            data-angle={i * step}
            layoutId={`arm-${item.id}`}
          >
            <motion.button
              data-arm-image
              className="rounded-full object-cover absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 cursor-pointer border-2 border-transparent hover:border-white transition-all duration-300 bg-transparent p-0 overflow-hidden"
              style={{
                width: imageSize,
                height: imageSize,
                marginTop: -imageSize / 2,
                marginLeft: -imageSize / 2,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => onItemClick?.(item)}
              draggable={false}
              layoutId={`arm-img-${item.id}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover rounded-full"
                draggable={false}
              />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </LayoutGroup>
  );
};

