import useInput from "../hooks/useInputHook.js";

// input 관련 만든 hook을 외부로 빼고 import 해서 사용

const useInputHook = () => {
  // 임의의 검증함수 예시

  // 1. 길이
  const maxLen = (value) => value.length <= 10;

  // 특정 문자열 포함 여부 확인
  // "@" 입력 불가
  const checkChar = (value) => !value.includes("@");

  const name = useInput("Mr.", checkChar);
  const email = useInput("@");
  return (
    <div>
      <h1>useInput</h1>
      {/* value={}, onClick={} 이 과정을 전개 연산자를 이용해서 생략가능 */}
      <input placeholder="Name" {...name} />
      <input placeholder="E-mail" {...email} />
    </div>
  );
};

export default useInputHook;
