import React, { useState } from 'react';
import tableStyles from '../common/styles/table.module.css';

//리액트의 컴포넌트 : 가지고 와서, 코딩해서 내보낸다. (아톰, 기본단위)

//export = public 이라 생각하면 됨
export default function Calculator() {
  //상태에 대해서 먼저 코딩
  // getter setter
  //useState 내부가 default값임
  const [result, setResult] = useState('');
  //이벤트에 대해서 코딩
  //내부 함수는 람다식으로 코딩함

  // getter setter
  //   const [inputs, setInputs] = useState({}); //input이 객체이므로 {}로 표기
  const [inputs, setInputs] = useState({ opcode: '+' }); //초기값은 +로 설정할 수 있음

  const { num1, num2, opcode } = inputs;

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    //input이 객체임({})
    setInputs({
      //...inputs 의 역할 : 오버로딩  -> 이전 껄 지우지 말고 keep
      ...inputs,
      [name]: value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    switch (opcode) {
      case '+':
        return setResult(Number(num1) + Number(num2));
      case '-':
        return setResult(Number(num1) - Number(num2));
      case '*':
        return setResult(Number(num1) * Number(num2));
      case '/':
        return setResult(Number(num1) / Number(num2));
      case '%':
        return setResult(Number(num1) % Number(num2));
      default:
        console.log('Default');
    }
  };

  return (
    <form>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>
              <h2>계산기</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="">num1</label>
              <input name="num1" type="text" onChange={onChange} />

              <label htmlFor="">연산자</label>
              <select name="opcode" onChange={onChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
              </select>

              <label htmlFor="">num2</label>
              <input name="num2" type="text" onChange={onChange} />
              <br />

              <button onClick={onClick}>계산하기</button>
            </td>
          </tr>
          <tr>
            {/* 상태*/}
            <td>결과 : {result}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
