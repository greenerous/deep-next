import React, { useState } from 'react';
import tableStyles from '../common/styles/table.module.css';

//props가 들어감
export default function Counter() {
  //getter setter로 이해하면 편함
  const [count, setCount] = useState(0);

  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th>
            <h2>카운터</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button style={{ width: 100 }} onClick={() => setCount(count + 1)}>
              {' '}
              {/*setter*/} +{' '}
            </button>
            <button style={{ width: 100 }} onClick={() => setCount(count - 1)}>
              {' '}
              -{' '}
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <h3>결과: {count}</h3> {/*getter*/}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
