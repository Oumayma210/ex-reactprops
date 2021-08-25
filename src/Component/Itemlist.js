import React from 'react'
import Item from '../Component/Item'
import { Products } from '../Products'
const Itemlist = () => {
    return (
        <div id="cardlist">
            {Products.map((product)=>(
                <Item product={product}/>
            ))} 
        </div>
    )
}

export default Itemlist
