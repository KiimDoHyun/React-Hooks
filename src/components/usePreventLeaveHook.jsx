const usePreventLeave = () => {
  // window 를 떠나기전 실행할 함수.
  // 사용자에게 의사를 물어봄.
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  // beforeunload 는 window 가 닫히기 전에 함수가 실행되는것을 허락함.
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

const usePreventLeaveHook = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <h1>UsePreventLeave</h1>
      <h3>함수형 프로그래밍의 예시</h3>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
      <p>Protect 가 눌리고 브라우저를 종료 하려 하면 확인 메세지가 출력된다.</p>
      <p>UnProtect 가 눌리면 보호가 해제된다.</p>
    </div>
  );
};

export default usePreventLeaveHook;
