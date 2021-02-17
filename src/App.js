import React, { useState } from "react";

// useInput("aas") : 입력값 aas 가 initialValue로 들어가서 useState에 의해 value 가 initialValue의 값으로 변경후 리턴됨.
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;

        //유효성 검사 함수

        //유효성 검사 인자변수 validator 로 들어오는 값이 함수인 경우 (유효성 검사는 함수 내에서 해야 하니깐)
        //해당 함수의 결과 true or false 를 willUpdate 에 할당.
        //유효성이 맞는 경우 willUpdate 는 자동으로 유효성함수에 의해 true 가 되고
        // 이는 값을 변경 함.
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

const App = () => {
    const maxLen = (value) => value.length < 10;
    // maxLen 은 문자열의 길이가 10 이하인 경우 true 를 반환한다.

    const check = (value) => !value.includes("@");
    //check 는 @ 를 포함하면 true, 없으면 false 를 반환
    //반대 논리를 가지기 때문에 @는 입력 할 수 없다.

    //이처럼 문자열 길이 이외에도 다른 형태의 검증 함수를 이용해도 상관없다.
    const name = useInput("Mr.", check);

    //실제 작동시 유효성 검사에 의해 문자열의 길이가 10이 넘어가면
    //더이상 입력 할 수 없다.
    return (
        <div className="App">
            <h1>Hello</h1>
            {/* <input placeholder="Name" value={name.value} onChange={name.onChange}/> 아래랑 똑같음*/}
            <input placeholder="Name" {...name} />
        </div>
    );
};

export default App;
