import React from "react";

type CustomFilterProps = {
  title: string;
};



const CustomFilter: React.FC<CustomFilterProps> = ({title}) => {
  return <div>{title}</div>;
};

export default CustomFilter;
