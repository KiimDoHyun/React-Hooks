import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();

  //   컴포넌트가 마운트 되면 이벤트를 붙여줌
  //   의존성이 없기 때문에 초기 마운트 되었을 때만 실행
  // 클릭 뿐만 아니라 다른 이벤트에 대해서도 적용 가능함.
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // ComponentWillUnMount
    return () => {
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
  }, []);

  //  전달 인자의 유효성 검사가 최상단에 존재하면 에러 발생.
  // hook은 어떠한 값이 return 되기 전에 정의 되어야 하기 때문.
  if (typeof onClick !== "function") {
    return;
  }
  return element;
};

const useClickHook = () => {
  const sayHello = () => console.log("sayhello");
  const input = useRef();
  const title = useClick(sayHello);
  setTimeout(() => input.current?.focus(), 5000);
  return (
    <div>
      <h1 ref={title}>UseClick</h1>
      <p>⬆ UseClick 텍스트에 이벤트 리스너 부여</p>
      <p>useRef 사용, 5초 뒤 "la" input 자동 선택</p>
      <input ref={input} placeholder="la" />
    </div>
  );
};

export default useClickHook;
