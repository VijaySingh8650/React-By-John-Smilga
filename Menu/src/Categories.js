import React from 'react';

const Categories = ({filterItems, allCategories}) => {
  return <div className='btn-container'>
    
    {
      allCategories.map((category,index) => {
        return <button onClick={() => filterItems(category)}
          
          type="button" key={index} className='filter-btn'>{category}</button>
      })
    }
    
  </div>;
};

export default Categories;
