// import chooseJSON function files
import chickOne from "../json/chickOne.json";
import chickTwo from "../json/chickTwo.json";
import chickThree from "../json/chickThree.json";
import chickFour from "../json/chickFour.json";
import chickFive from "../json/chickFive.json";
import CompareItem from "./CompareItem";
import { useState } from "react";
import { Row, Col, Select } from "antd";
const { Option } = Select;



export default function CompareDetail() {

  const chooseJSON = (value) => {
    switch (value) {
      case "chickOne":
        return chickOne;
      case "chickTwo":
        return chickTwo;
      case "chickThree":
        return chickThree;
      case "chickFour":
        return chickFour;
      case "chickFive":
        return chickFive;
      default:
        return 0;
    }
  }

  const [chosenItem1, setChosenItem1] = useState(chickOne);
  const [ chosenItem2, setChosenItem2] = useState(chickTwo);
  const [ chosenItem3, setChosenItem3] = useState(chickThree);
  
  function selectOne(value) {
    console.log(`selected ${value}`);
    console.log(chooseJSON(value));
    setChosenItem1(chooseJSON(value));
  }

  function selectTwo(value) {
    console.log(`selected ${value}`);
    console.log(chooseJSON(value));
    setChosenItem2(chooseJSON(value));
  }

  function selectThree(value) {
    console.log(`selected ${value}`);
    console.log(chooseJSON(value));
    setChosenItem3(chooseJSON(value));
  }

  return (
    <>
      <Row>
        <h1 className="compare-title">
          比較麻將桌機型
        </h1>
      </Row>
      <Row>
        <p className="compare-little-text">
          機型比較讓你一目了然免煩惱
        </p>
      </Row>
      <hr className="compare-line"></hr>
      <Row>
        <Col>
          <Select
            id="selectOne"
            defaultValue="chickOne"
            onChange={selectOne}
          >
            <Option value="chickOne">一吉郎</Option>
            <Option value="chickTwo">二吉郎</Option>
            <Option value="chickThree">三吉郎</Option>
            <Option value="chickFour">四吉郎</Option>
            <Option value="chickFive">五吉郎</Option>
          </Select>
          <CompareItem chosenItem={chosenItem1} />
        </Col>
        <Col>
          <Select
            id="selectOne"
            onChange={selectTwo}
            defaultValue="chickTwo"
          >
            <Option value="chickOne">一吉郎</Option>
            <Option value="chickTwo">二吉郎</Option>
            <Option value="chickThree">三吉郎</Option>
            <Option value="chickFour">四吉郎</Option>
            <Option value="chickFive">五吉郎</Option>
          </Select>
          <CompareItem chosenItem={chosenItem2} />
        </Col>
        <Col>
          <Select 
          id="selectOne"
          onChange={selectThree}
          defaultValue="chickThree"
          >
            <Option value="chickOne">一吉郎</Option>
            <Option value="chickTwo">二吉郎</Option>
            <Option value="chickThree">三吉郎</Option>
            <Option value="chickFour">四吉郎</Option>
            <Option value="chickFive">五吉郎</Option>
          </Select>
          <CompareItem chosenItem={chosenItem3} />
        </Col>
      </Row>

    </>
  );
}
