import { Motion } from "@motionone/solid";
import { spring } from "motion";

const SunIcon = () => {
  const transition = {
    easing: spring(),
    stiffness: 200,
    damping: 10,
    duration: 0.1
  };

  const animation = {
    initial: { scale: 0.8, rotate: 45, duration: 0.1 },
    animate: { scale: 1, rotate: 0, transition },
    press: { scale: 0.95, rotate: 15, duration: 0.1 },
    exit: { opacity: 0, rotate: 45, scale: 0.3, duration: 0.2 },
  };

  return (
    <>
      <Motion.svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={animation.initial}
        animate={animation.animate}
        press={animation.press}
        exit={animation.exit}
        class="absolute top-0 left-0"
      >
        <circle cx="11.9998" cy="11.9998" r="5.75375" fill="currentColor" />
        <g>
          <circle
            cx="3.08982"
            cy="6.85502"
            r="1.71143"
            transform="rotate(-60 3.08982 6.85502)"
            fill="currentColor"
          />
          <circle
            cx="3.0903"
            cy="17.1436"
            r="1.71143"
            transform="rotate(-120 3.0903 17.1436)"
            fill="currentColor"
          />
          <circle cx="12" cy="22.2881" r="1.71143" fill="currentColor" />
          <circle
            cx="20.9101"
            cy="17.1436"
            r="1.71143"
            transform="rotate(-60 20.9101 17.1436)"
            fill="currentColor"
          />
          <circle
            cx="20.9101"
            cy="6.8555"
            r="1.71143"
            transform="rotate(-120 20.9101 6.8555)"
            fill="currentColor"
          />
          <circle cx="12" cy="1.71143" r="1.71143" fill="currentColor" />
        </g>
      </Motion.svg>
    </>
  );
};

export default SunIcon;
