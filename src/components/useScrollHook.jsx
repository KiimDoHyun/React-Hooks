import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
    // console.log("y ", window.scrollY, "x ", window.scrollX);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const useScrollHook = () => {
  const { y } = useScroll();
  return (
    <h1
      style={{
        position: "fixed",
        top: "500px",
        color: y > 200 ? "red" : "blue",
      }}
    >
      useScroll
    </h1>
  );
};

export default useScrollHook;
