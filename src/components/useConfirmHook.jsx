// 전달이자의 의미 : 메세지, 확인이 되면 실행할 함수(callback 인자로 받는 함수), 취소하면 실행할 함수
const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const useConfirmHook = () => {
  const deleteWorld = () => console.log("Delete the World");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div>
      <h1>UseConfirm</h1>
      <h3>함수형 프로그래밍의 예시</h3>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default useConfirmHook;
