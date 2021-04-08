import React, { useState, useEffect } from 'react'


const EffectExample = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] =useState(true);

    if (visible){
        return (
            <div>
            <button onClick={()=>setValue((visible)=>visible+1)}>+</button>
            <button onClick={()=>setVisible(false)}>Hide</button>
            {/* <HookCounter value={value}/>
            <Notification/> */}
            <PlsnetInfo id={value}/>
            </div>
        )
    } else {
        return 
        <button onClick = {() => setVisible (true)}>Show</button>
    }
} 

// const HookCounter = ({value}) => {

//    useEffect(() => {
//        console.log('mount')
//        return () => console.log('unmount')
//     }, []);
//    useEffect(() => console.log('update'))
//     return <p>{value}</p>
// }

// const Notification = () => {
//     const [visible, setVisible] = useState (true)
//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setVisible(false)
//         }, 3000);
//         return ()=> clearTimeout(timeout)
//     })

//     return (
//         <div>
//         { visible && <p>Hello</p>}
//         </div>
//     )
// }

const PlsnetInfo = ({id}) => {
    
    const [name, setName] = useState(null)

    useEffect (() => {
        let canselled = false
        fetch(`https://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(data => !canselled && setName(data.name))
        return () => canselled = true // очищення результатів
    }, [id])

    

    
    
    return (
        <div> {id} - {name}</div>
    )
}

export default EffectExample;