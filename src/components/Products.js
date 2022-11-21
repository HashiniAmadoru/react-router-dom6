import React from "react";
import { Link, Outlet } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const buttons = [
  <Button key="one">
    <Link to="featured">Featured</Link>
  </Button>,
  <Button key="two">
    <Link to="new">New</Link>
  </Button>,
];

function Products() {
  return (
    <>
    <h1>All Products </h1>
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
      <Outlet />
    </>
  );
}

export default Products;
