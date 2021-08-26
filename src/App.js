import React, { useState } from "react";
import UseEffect from "./components/useEffectreact";
import UseTitle from "./components/useTitlereact";
import UseInput from "./components/useInputHooks";
import UseClick from "./components/useClickHook";
import UseConfirm from "./components/useConfirmHook";
import UsePreventLeave from "./components/usePreventLeaveHook";
import UseBeforeLeave from "./components/useBeforeLeaveHook";
import UseFadeIn from "./components/useFadeInHook";
import UseNetwork from "./components/useNetworkHook";
import UseScroll from "./components/useScrollHook";
import UseFullScreen from "./components/useFullScreenHook";
import UseNotification from "./components/useNotificationHook";
import UseAxios from "./components/useAxiosHook";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

/*
두가지 값을 받는다 첫번째는 배열의 index, 두번째는 배열 자체
 
*/
const useTabs = (initialTab, allTabs) => {
  //두번째 인자가 없거나, 배열이 아니면 바로 종료
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  // 두번째 인자로 넘어오는 값이 없거나, 또는 배열이 아니면 실행 X
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  /*
    useState 가 사용되었다. 마찬가지로 배열로 두가지 값을 가지고
    currentIndex는 값, setCurrentIndex는 첫번째 인자 변경 방법이다.
    선언시 initialTab을 받아서 currentIndex에 할당한다.
    */

  /*
    currentItem 과 changeItem 두가지를 반한다.
    
    첫번째 값은 allTabs (입력으로 들어온 배열) 의 
    currentIndex (정상적으로 실행 되었다면 initialTab의 값이 currentIndex로 들어가있게된다.)
    에 대항하는 배열 값을 반환한다. 
    현재 allTabs 에 해당하는 것은 위에 선언한 content 배열이고
    currentIndex 는 초기값으로 들어온 0 이기 때문에
    currentItem 은 content[0]에 해당한다.
  
    두번쨰 값인 changeItem 은 setCurrentIndex 즉 변경 함수
    changeItem 을 useTabs 선언시 사용 할수 있게 선언해 주고
    onClick 에서 changeItem(index) 로 호출
    입력값인 index 는 useState에 의해서 기존 value 에 해당하는 
    currentIndex의 값을 변경함수 setCurrentIndex에 의해서 index 값으로 변경시킨다.
    */
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>각 컴포넌트는 각각의 훅을 가지는 예시임.</h1>
      <h1>UseTab</h1>
      <div>
        <h1>Hello</h1>
        {content.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>

      <UseInput />

      <UseEffect />

      <UseTitle />
      <UseClick />

      <UseConfirm />

      <UsePreventLeave />
      <UseBeforeLeave />
      <UseFadeIn />
      <UseNetwork />
      <UseScroll />
      <UseFullScreen />
      <UseNotification />
      <UseAxios />
    </div>
  );
};

export default App;
