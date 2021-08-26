const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, options);
      } else {
        return;
      }
    });
  } else {
    console.log("뭐지");
    new Notification(title, options);
  }

  const fireNotif = () => {};
  return fireNotif;
};

const useNotificationHook = () => {
  const triggerNotif = useNotification("알림", { body: "이건 body다" });
  return (
    <div>
      <h1>UseNotification</h1>
      <button onClick={triggerNotif}>Notification</button>
    </div>
  );
};

export default useNotificationHook;
