import React, { useState } from 'react';

//함수형, 클래스형 / 리액트 훅 의 차이

//함수형 + 리액트 훅(useState) 사용
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [email, setEmail] = useState("");
//   const updateEmail = e => {
//     const {
//       target: { value }
//     } = e;
//     setEmail(value);
//   }
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => setCount(count + 1)} >Increment</button>
//       <input placeholder="Email" value={email} onChange={updateEmail} />
//     </div>
//   )
// }

/*

리액트 훅(useState) 의 기능
첫번째는 value, 두번째는 변경 방법을 준다.
const [count, setCount] 에서 count 가 첫번째, setCount 가 두번째에 해당.
userState 에서 주는것은 배열 형태라서 배열 형태로 생성, 작업

기존 방식대로 state를 설정하고, state 변경 함수(setState 이용)를 만들 필요 없이
리액트 훅을 이용해서 코드가 간결화.

리액트 훅이 나오기 전에 state 를 사용하려면 class 형태로 작성 해야만 했다.
하지만 리액트 훅이 나오고 state를 함수 형태에서도 사용이 가능해 졌다.



정리.
코드 : const [count, setCount] = useState(0);
useState 는 array를 리턴한다.
그 array의 첫번째 요소는 value 이고 이는 0으로 시작.
두번째 요소는 setCount
이름은 아무거나 해도 상관 없다.(배열을 반환하기 때문에 그냥 이름만 잘 가져다가 쓰면 됨.)

만약 useState 에서 첫번째 인자만 사용 하고 싶은 경우
const item = useState(1)[0]; 이렇게 하면 됨.
*/



//리액트 훅 없는 형태 + 클래스 형태
// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   modify = n => {
//     this.setState({
//       count: n
//     });
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <div>{count}</div>
//         <button onClick={() => this.modify(count + 1)}>Increment</button>
//       </div>
//     );
//   }
// }

const App = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);

    return (
        <div className="App">
            <h1>Hello {item}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Drcement</button>
        </div>
    );
}



export default App;
