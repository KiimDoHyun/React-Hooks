import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (evnet) => {
    const { clientY } = evnet;
    // 마우스 가 위로 갔을 때만
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") return;
};

const useBeforeLeaveHook = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>useBeforeLeave</h1>
      <p>사용자의 커서가 브라우저 화면을 벗어나면 수행</p>
    </div>
  );
};

export default useBeforeLeaveHook;
