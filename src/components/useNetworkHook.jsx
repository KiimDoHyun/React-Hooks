import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  // navigator 의 online 에는 네트워크가 연결되어있으면true, 아니면 false 의 값을 가짐.
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    console.log(navigator);
    window.addEventListener("onLine", handleChange);
    window.addEventListener("offLine", handleChange);

    return () => {
      window.removeEventListener("onLine", handleChange);
      window.removeEventListener("offLine", handleChange);
    };
  }, []);
  return status;
};

const useNetworkHook = () => {
  const handleNetworkChange = (online) =>
    console.log(online ? "onLine" : "offLine");
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>UseNetworkHook</h1>
      <h3>{onLine ? "Online" : "Offline"}</h3>
    </div>
  );
};

export default useNetworkHook;
