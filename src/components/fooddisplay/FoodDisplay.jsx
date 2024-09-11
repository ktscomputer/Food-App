import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../fooditem/FoodItem'


    const FoodDisplay = ({category}) => { 
    const {food_list} = useContext(StoreContext)
    const filteredItems = food_list.filter(item =>
      category === 'All' || category === item.category
    )
    console.log('Selected Category:', category)
   
  return (
    <div className='food-display id=food-display' >
        <h2>
            Top Product for you
        </h2>
        <div className="food-display-list">
          {filteredItems.length >0?(
            filteredItems.map((item ,index)=>(

            

                 <FoodItem 
                key={index}
                 id={item._id} 
                 name={item.name}
                  description={item.description} 
                  price={item.price}
                   image={item.image} 
                   />
                  ))
                ):(<p>No items available for this category</p>)
              
                   }
        </div>
    </div>
  )
}

export default FoodDisplay