import React  from "react";

function CategoryFilter({ categories, handleCategoryClick, selectedCategory }) {
  const categoriesArray = categories.map(category => { 
    const className = (category === selectedCategory) ? 'selected' : null;
    return (
      <button 
        key={category}
        className={className}
        onClick={() => handleCategoryClick(category)}>{category}
      </button>
    )}
  );

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesArray}
    </div>
  );
}

export default CategoryFilter;
