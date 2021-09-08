class OrderData {
  static jsonServerAddress = "http://localhost:3000/";
  static foodSelectDivID = "#foodSelect";
  static extraSelectDivID = "#extraSelectDiv";

  static foodListObject;
  static extraListObject;

  static recalculatePrice(item) {
    let fullPrice = 0;
    let foodSelect = document.querySelector("select.priceRecalc");
    let foodValue = foodSelect.value;
    let opts = foodSelect.children;
    for (let i = 0; i < foodSelect.childElementCount; i++) {
      if (opts[i].value == foodValue) {
        fullPrice += parseInt(opts[i].getAttribute("price"));
      }
    }
    let extraCBArray = document.querySelectorAll("input.priceRecalc");
    for (let i = 0; i < extraCBArray.length; i++) {
      if (extraCBArray[i].checked) {
        fullPrice += parseInt(extraCBArray[i].getAttribute("price"));
      }
    }
    let foodCount = parseInt(document.querySelector("#topamount").value);
    if (foodCount >= 1 || foodCount <= 10) {
      fullPrice *= foodCount;
    }
    else {
      alert("Hibás a megadott mennyiség, kérlek javítsd!");
      document.querySelector("#topamount").value = 1 ;
      return ;
    }
    document.querySelector("#topamount");
    document.querySelector("#showamount").innerHTML = fullPrice;
    return fullPrice;
  }
}


let getFoodListObject = new HambiData(OrderData.jsonServerAddress + "foodList");
let foodListSelectElement = document.querySelector(OrderData.foodSelectDivID);
let foodList;

function getFoodListCB(jsonData) {
  console.log(jsonData);
  foodList = new FoodList(foodListSelectElement, jsonData);
  foodList.buildFoodList();
}

getFoodListObject.getData(getFoodListCB);

let getExtraListObject = new HambiData(OrderData.jsonServerAddress + "extraList");
let extraListContainerDiv = document.querySelector(OrderData.extraSelectDivID);
let extraList;

function getExtraListCB(jsonData) {
  console.log(jsonData);
  extraList = new ExtraList(extraListContainerDiv, jsonData);
  extraList.buildExtrsList();
}

getExtraListObject.getData(getExtraListCB);
document.querySelector("#topamount").setAttribute("onChange","OrderData.recalculatePrice(this);");
