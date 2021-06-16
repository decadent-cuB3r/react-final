import { Row, Col, Select } from "antd";
import { useState } from "react";
import { compareItemAdd, compareItemRemove } from "../actions";

const { Option } = Select;

export default function CompareDetail({ products }) {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const [selectItem, setSelectItem] = useState(products[0]["name"]);
  return (
    <div>
      <h1 className="compareDetail-title">比較商品</h1>
      <Select
        className=""
        onChange={handleChange}
      >
        <Option val={products[0][["id"]]}>{products[0]["name"]}</Option>
        <Option val={products[1][["id"]]}>{products[1]["name"]}</Option>
        <Option val={products[2][["id"]]}>{products[2]["name"]}</Option>
        <Option val={products[3][["id"]]}>{products[3]["name"]}</Option>
        <Option val={products[4][["id"]]}>{products[4]["name"]}</Option>
        <Option val={products[5][["id"]]}>{products[5]["name"]}</Option>
        <Option val={products[6][["id"]]}>{products[6]["name"]}</Option>
        <Option val={products[7][["id"]]}>{products[7]["name"]}</Option>
        <Option val={products[8][["id"]]}>{products[8]["name"]}</Option>
        <Option val={products[9][["id"]]}>{products[9]["name"]}</Option>
        <Option val={products[10][["id"]]}>{products[10]["name"]}</Option>
        <Option val={products[11][["id"]]}>{products[11]["name"]}</Option>
        <Option val={products[12][["id"]]}>{products[12]["name"]}</Option>
        <Option val={products[13][["id"]]}>{products[13]["name"]}</Option>
        <Option val={products[14][["id"]]}>{products[14]["name"]}</Option>
        <Option val={products[15][["id"]]}>{products[15]["name"]}</Option>
      </Select>
      <img src={products[0]["image"]} />
    </div>
  );
}
