import { motion } from 'framer-motion';

const DIRECTIONS = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Reveal
 * Generic scroll-triggered reveal animation used across every page.
 * Triggers once when the element enters the viewport.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  scale = false,
  as = 'div',
  className = '',
  once = true,
  amount = 0.2,
  ...rest
}) {
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{
        opacity: 0,
        ...offset,
        scale: scale ? 0.94 : 1,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * RevealStagger
 * Wraps a list of children and staggers their reveal.
 */
export function RevealStagger({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStaggerItem({ children, className = '', direction = 'up' }) {
  const offset = DIRECTIONS[direction] || DIRECTIONS.up;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
