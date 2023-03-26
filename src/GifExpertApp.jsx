import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* <button onClick={addCategory}>Agregar Categoria</button> */}

      {categories.map((category) => (
        <GifGrid 
              key={category} 
              category={category} />
      ))}
    </>
  );
};
