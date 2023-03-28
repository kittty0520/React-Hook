import React, { useCallback, useMemo, useState } from 'react';
import Child from './components/Child';

export default function ReactMemo() {
    const [parentAge, setParentAge] = useState(0);


    const incrementParentAge = ()=>{
        setParentAge(parentAge+1)
    }
    
    // name을 일반 객체로 반환할 때는 렌더링될때마다 다른 메모리 주소를 갖기 때문에 Child의 props도 변한다. 따라서 Child도 리렌더링된다.
    // const name = {
    //     lastName:'홍', firstName: '길동'
    // }
    
    //useMemo를 사용할떄
    const name = useMemo(()=>{
        return {
            lastName:'홍', firstName: '길동'
        }
    },[])

    //useCallback을 사용할 때
    const telMe = useCallback(()=>{
        console.log('길동아 사랑해');
    },[])

    console.log('부모 컴포넌트가 렌더링 되었어요')
    return (
        <div style={{border: '2px solid navy', padding:'10px'}}>
            <p>age : {parentAge}</p>
            <button onClick={incrementParentAge}>부모 나이 증가</button>
            <Child name={name} telMe={telMe}/>
        </div>
    );
}

