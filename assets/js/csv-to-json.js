"use strict";

const enterDivider = ",,,,,";
const dataDivider = /[\,/\r\n]+/;
const FOOD_LIST_KEY = "foodlist";

function addLocalStorage(jsonFile) {
  localStorage.setItem(FOOD_LIST_KEY, jsonFile);
}

function removeNull(rows) {
  const data = [];

  for (let i = 0; i < rows.length; i++) {
    let tempArr = rows[i] //
      .split(dataDivider)
      .map((row) => row.replace(/^[\s]+|[\s]+$/, ""))
      .filter((e) => e === 0 || e);

    if (tempArr.length !== 0) {
      if (tempArr.length === 3) {
        data.push(tempArr);
        continue;
      } else {
        const len = tempArr.length;
        for (let j = len; j < 3; j++) {
          tempArr.push("-");
        }
        data.push(tempArr);
      }
    }
  }
  return data;
}

// outputs the content of the text file
function csvToJson(csv_string) {
  let rows = csv_string.split(enterDivider);
  const foodListContObj = {
    YungjaRoad: {},
  };
  const foodListObjArr = [];
  const foodListObj = {
    Restaurant: "",
    Food: "",
    Address: "",
  };
  let foodListData = [];

  rows.shift();
  foodListData = removeNull(rows);

  for (let i = 0; i < foodListData.length; i++) {
    foodListObj["Restaurant"] = foodListData[i][0];
    foodListObj["Food"] = foodListData[i][1];
    foodListObj["Address"] = foodListData[i][2];
    foodListObjArr.push(Object.assign({}, foodListObj));
  }
  Object.assign(foodListContObj["YungjaRoad"], { ...foodListObjArr });
  addLocalStorage(JSON.stringify(foodListContObj));
}

// read food-list.csv file

if (localStorage.getItem(FOOD_LIST_KEY) === null) {
  /*
  fetch("/food-list.csv")
    .then((response) => response.text())
    .catch((error) => (foodText = "Error"))
    .then((text) => {
      csvToJson(text);
    });*/
  //web상에서는 web link로 읽어서 에러 발생!!

  fetch("../../food-list.csv")
    .then((response) => response.text())
    .catch((error) => (foodText = "Error"))
    .then((text) => {
      csvToJson(text);
    });
}
