import React from "react";
import { categoryInfos } from "./catagoryFullInfos";
import classes from "./Catagory.module.css";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos,i) => (
        <CategoryCard key={i} data={infos} />
      ))}
    </section>
  );
}

export default Category;
