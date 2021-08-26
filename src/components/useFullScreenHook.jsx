import { elementType } from "prop-types";
import { useRef } from "react";
import img from "../asset/image_2.png";

const useFullscreen = (callback) => {
  const element = useRef();

  // 값이 넘어왔고, 함수형이 맞다면 전달 인자로 넘어온 함수를 수행한다.
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      // 브라우저 별 호환성 문제
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        // 파이어 폭스 브라우저는 명령어가 다르다.
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        // Opera 브라우저는 명령어가 다르다.
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        // Microsoft 브라우저는 명령어가 다르다.
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      // 브라우저 별 호환성 문제
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullscreen) {
        // 파이어 폭스 브라우저는 명령어가 다르다.
        document.mozCancelFullscreen();
      } else if (document.webkitExitFullscreen) {
        // Opera 브라우저는 명령어가 다르다.
        document.webkitExitFullscreen();
      } else if (document.msexitFullscreen) {
        // Microsoft 브라우저는 명령어가 다르다.
        document.msexitFullscreen();
      }

      runCb(false);
    }
  };

  return { element, triggerFull, exitFull };
};

const useFullScreenHook = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "Full" : "Small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div>
      <h1>UseFullScreen</h1>
      <div ref={element}>
        <img src={img} />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <div>
        <button onClick={triggerFull}>Make fullscreen</button>
      </div>
    </div>
  );
};

export default useFullScreenHook;
