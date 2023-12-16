const RestaurantTable = ({list, heading}) => {
    
    console.log("RestaurantTable invoked");
    return (
        <div className="clickSort">
            <h3> {heading} </h3>

            <table>
                <thead>
                    <tr>
                        <th className="textAlignRight">User Id</th>
                        <th>Email</th>
                        <th className="textAlignCenter">user Image</th>
                        <th className="textAlignCenter">Restaurant Pic</th>
                        <th className="textAlignCenter">Busiest Day</th>
                        <th className="textAlignRight">Price Customer Would Pay</th>
                        <th className="textAlignRight">Customer Rating</th>
                        <th className="textAlignRight">Restaurant Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(listObj =>
                            <tr key={listObj.webUserId}>
                                <td className="textAlignRight">{listObj.webUserId}</td>
                                <td>{listObj.userEmail}</td>
                                <td className="shadowImage textAlignCenter"><img src={listObj.image} /></td>
                                <td className="shadowImage textAlignCenter"><img src={listObj.pic} /></td>
                                <td className="textAlignCenter">{listObj.busiest_day}</td>
                                <td className="textAlignRight">{listObj.customer_price_would_pay}</td>
                                <td className="textAlignRight">{listObj.rating}</td>
                                <td className="textAlignRight">{listObj.price}</td>
                                <td>{listObj.errorMsg}</td>
                            </tr>
                        )
                    } 
                </tbody>
            </table>
        </div>
    );
};

// Sample User from the JSON file.
/*
      "webUserId": "1",
      "userEmail": "sallyk",
      "userPassword": "p",
      "image": "http://cis-linux2.temple.edu/~sallyk/pics_/sk_2017.jpg",
      "birthday": "",
      "membershipFee": "$123.45",
      "userRoleId": "2",
      "userRoleType": "Edit",
      "errorMsg": ""
 */

//{
//    "customer_price_would_pay": "80",
//        "pic": "https://th.bing.com/th/id/OIP.qVKl_8fDoRF1n_ssU4S_xAHaE7?w=246&h=180&c=7&r=0&o=5&pid=1.7",
//            "image": "http://cis-linux2.temple.edu/~sallyk/_pics/sk_07_17.png",
//                "price": "100",
//                    "busiest_day": "monday",
//                        "rating": "5/10",
//                            "webUserId": "1",
//                                "userEmail": "sallyk"

//},