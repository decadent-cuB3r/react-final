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
    <>
      <Row>
        <Col>
          
        </Col>
      </Row>
    </>
  );
}
