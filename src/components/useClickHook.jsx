import { useRef } from "react";

const useClickHook = () => {
  const input = useRef();
  return (
    <div>
      <h1>UseClick</h1>
      <p>useRef 사용</p>
      <input ref={input} placeholder="la" />
    </div>
  );
};

export default useClickHook;
