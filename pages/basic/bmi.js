import React, { useState } from 'react';
import axios from 'axios';
import tableStyles from '../common/styles/table.module.css';

export default function Bmi() {
  //   const [name, setName] = useState('');
  //   const [height, setHeight] = useState(0);
  //이것을 아래처럼 input로 모을 수 있음
  const [inputs, setInputs] = useState({});

  const proxy = 'http://localhost:5000';

  //handleSubmit 정의하기
  //e : event 의 약자

  const handleSubmit = (e) => {
    e.preventDefault();

    //request가 서버로 전달됨
    axios
      .post(proxy + '/api/basic/bmi', inputs)
      .then((res) => {
        const bmi = res.data;
        document.getElementById('result-span').innerHTML = `
            <h3>이름 : ${bmi.name}</h3>
            <h3>키 : ${bmi.height} cm</h3>
            <h3>몸무게 : ${bmi.weight}kg</h3>
            <h3>BMI결과 : ${bmi.bmi}</h3>
            `;
      })
      .catch((err) => alert(err));
  };

  //handleChange 정의하기
  const handleChange = (e) => {
    e.preventDefault();
    //e.target 이 response에 달려서 전달됨.
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th colSpan={2}>
              <h2>BMI</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="">이름</label>
            </td>
            <td>
              <input type="text" name="name" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">키</label>
            </td>
            <td>
              <input type="text" name="height" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <label htmlFor="">몸무게</label>
              </div>
            </td>
            <td>
              <input type="text" name="weight" onChange={handleChange} />
              <br />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input type="submit" value="BMI 체크" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              결과 : <span id="result-span"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
