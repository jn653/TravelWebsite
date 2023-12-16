const RestaurantFilterTable = ({ list, heading}) => {

    console.log("RestaurantFilterTable running!!");

    // Tell React that 'isFirstRender' (boolean) is something that
    // (when changed) should redisplay this component.
    // Set its initial value to true.
    const [isFirstRender, setIsFirstRender] = React.useState(true);

    // on first rendering, build the user table directly from list (input param)
    // after the user clicks the search button, build the user table from 
    // the list that's been run through a filter operation. Otherwise, the 
    // list shows up empty intially.

    // Tell React that 'items' (array) is something that
    // (when changed) should redisplay this component.
    // Set items initial value to [], an empty array.
    const [items, setItems] = React.useState(list);
    console.log("Initial UserFilterTable value of list on next line");
    console.log(list);

    // Tell React that 'filterInput' is something that
    // (when changed) should cause this component to be 
    // redisplayed. Set initial value of filterInput to "".
    const [filterInput, setFilterInput] = React.useState("");

    const doFilter = () => {
        setIsFirstRender(false);
        let newList = filterObjList(list, filterInput);
        console.log("RestaurantFilterTable Search clicked. See filtered list on next line:");
        console.log(newList);
        setItems(newList);
    };


    return (
            <div className="clickSort">
                <input value={filterInput} onChange={(e) => setFilterInput(e.target.value)} /> 
                &nbsp; <button onClick={ doFilter }>Search</button>
            
            {isFirstRender ? <RestaurantTable list={list} heading ="My Restaurant Filter List" /> : <RestaurantTable list={items} heading ="My Restaurant Filter List" /> }
            </div>
            );
};