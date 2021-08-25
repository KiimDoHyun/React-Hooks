import { useState, useEffect } from "react";

const useTitle = (initialtitle) => {
  const [title, setTitle] = useState(initialtitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  // ComponentWillUpdate
  useEffect(updateTitle, [title]);
  return setTitle;
};

const useTitlereact = () => {
  const titleUpdater = useTitle("Loading...");
  // 5초뒤 Title 변경
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div>
      <h1>My UseTitle</h1>
      <p>Title will update automatically in 5sec</p>
      <p>from "...Loading" to "Home"</p>
    </div>
  );
};

export default useTitlereact;
