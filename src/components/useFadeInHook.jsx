import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") return;
  return { ref: element, style: { opacity: 0 } };
};

const useFadeInHook = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeinP = useFadeIn(5, 3);
  return (
    <div>
      <h1 {...fadeInH1}>useFadeIn</h1>
      <p {...fadeinP}>This is for FadeIn Hook</p>
    </div>
  );
};

export default useFadeInHook;
