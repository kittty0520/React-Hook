import React, { memo } from 'react';

function Child({name, telMe}) {
    console.log('자녀도 렌더링이 되었습니다.')
    return (
        <div style={{border: '2px solid powerblue', padding: '10px'}}>
            <h3>자녀</h3>
            <p>성: {name.lastName}</p>
            <p>이름: {name.firstName}</p>
            <button onClick={telMe}>엄마 나 사랑해?</button>
        </div>
    );
}

export default memo(Child);