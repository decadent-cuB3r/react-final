import products from "../json/products.json";
import tables from "../json/tables.json"
import mahjong from "../json/mahjong.json";
import tableAccessory from "../json/tableAccessory.json";
import other from "../json/other.json";

export const getJSON = (url) => {
  switch (url) {
    case "/product/tables":
      return tables;
    case "/product/mahjong":
      return mahjong;
    case "/product/tableAccessory":
      return tableAccessory;
    case "/product/other":
      return other;
    default:
      return products;
  }
};
