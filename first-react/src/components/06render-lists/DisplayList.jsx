import List from './List.jsx'

function DisplayList() {

    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 100 },
        { id: 3, name: "grape", calories: 150 },
        { id: 4, name: "kiwi", calories: 20 },
        { id: 2, name: "mango", calories: 180 }
    ];

    const vegegatbles = [
        { id: 6, name: "potato", calories: 195 },
        { id: 7, name: "tomato", calories: 110 },
        { id: 8, name: "onion", calories: 50 },
        { id: 9, name: "pepper", calories: 20 },
        { id: 10, name: "beans", calories: 80 }
    ];
    // return (
    //     <>
    //         {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
    //         {vegegatbles.length > 0 ? <List items={vegegatbles} category="Vegetables" /> : null}
    //     </>
    // little less code alternative for ternary operater
    return (
        <>
           <h1 style={{backgroundColor:"gray"}}>session 6 begins - Rendering List</h1>
            {fruits.length > 0 && <List items={fruits} category="Fruits" />}
            {vegegatbles.length > 0 && <List items={vegegatbles} category="Vegetables" />}
        </>
    )
}

export default DisplayList