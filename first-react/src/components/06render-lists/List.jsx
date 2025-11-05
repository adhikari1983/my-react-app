import PropTypes from "prop-types";

function List(props) {

    // const fruits = ["{apple}", "{orange}", "{pear}", "{grape}", "kiwi"];
    // const listItems = fruits.map(friut => <li>fruit</li>)
    // return(<ul>{listItems}</ul>)

    /**    .....................sorting............................
      fruits.sort((a, b) => a.name.localeCompare(b.name)) // alphabetical    
      fruits.sort((a, b) => b.name.localeCompare(a.name)) reverse alphabetical   
      fruits.sort((a, b) => a.calories - b.calories) //  numirical
      fruits.sort((a, b) => b.calories - a.calories) // reverse numerical 

     const listItems = fruits.map(fruit =>  <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
     
     .....................filtering............................
     const lowCaloriesFruit = fruits.filter(fruit => fruit.calories < 100)
     const listItems = lowCaloriesFruit.map(lowCalFruit =>  <li key={lowCalFruit.id}>
                                                           {lowCalFruit.name}: &nbsp; 
                                                           <b>{lowCalFruit.calories}</b></li>)   
     const highCaloriesFruit = fruits.filter(fruit => fruit.calories > 100)
     const listItems = highCaloriesFruit.map(highCalFruit =>  <li key={highCalFruit.id}>
                                                           {highCalFruit.name}: &nbsp; 
                                                           <b>{highCalFruit.calories}</b></li>) 
     */
    const itemList = props.items;  
    const category = props.category;

    const listItems = itemList.map(item =>
        <li key={item.id}>
            {item.name}: &nbsp; <b>{item.calories}</b>
        </li>)
    return (
        <div className="list-group">
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">
                {listItems} {/* you can't wrap the already-generated list items in another <li> tag.
                               above online  31-33 the item is already displayed as list:
                            This comment addresses the common mistake of double-wrapping list items:
The itemList.map() function already returns an array of fully formed <li> elements.
Map: Creates an array of <li> elements: [<li>Item 1</li>, <li>Item 2</li>, <li>Item 3</li>]
Insertion: The {listItems} expression unpacks that array and inserts its contents directly into the 
parent <ol> element.
If you were to add an extra <li> around {listItems}, the resulting HTML would be invalid and look 
like this:
                        <ol class="list-items">
                            <li> 
                                <li>Item 1</li> 
                                <li>Item 2</li> 
                                <li>Item 3</li> 
                            </li> 
                        </ol>*/}
            </ol>
        </div>
    )

}

List.prototype = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
}

export default List