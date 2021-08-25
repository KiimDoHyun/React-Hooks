import { useEffect, useState } from "react";

const useEffectreact = () => {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [anumber, setANumber] = useState(0);

  useEffect(sayHello);
  /*
  ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate
  의존성 배열이 없는 경우
  컴포넌트 마운트 될때마다(맨 처음 포함), 어떤 값이든 상관없이 페이지가 업데이트 될때마다 실행

  의존성 배열에 값을 축하면 해당 값이 변할때만 수행
  */

  return (
    <div>
      <h1>Hi UseEffect</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

export default useEffectreact;
