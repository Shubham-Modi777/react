const CategoriesItemList = ({ categories }) => {
  console.log("categories", categories);
  return (
    <div>
      {categories.map((cat) => {
        return (
          <div key={cat?.categoryId}>
            <div>
              <span>
                {cat?.title} ({cat?.itemCards.length})
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesItemList;
