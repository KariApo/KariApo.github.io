class FoodList {
  foodListJson;
  foodListSelectElement;

  constructor(foodListSelectElement, foodListJson) {
    this.foodListSelectElement = foodListSelectElement;
    this.foodListJson = foodListJson;
  };

  createSelectOption(id, name, price) {
    let newOption = document.createElement("option");
    newOption.setAttribute("value", id);
    newOption.setAttribute("price", price);
    newOption.innerHTML = name+" ("+price+".-ft)";
    return newOption;
  }

  createFormSelect(id, name, price) {
    let newSelect = document.createElement("select")
    newSelect.setAttribute("class", "form-control priceRecalc");
    newSelect.setAttribute("onChange","OrderData.recalculatePrice(this);");

    return newSelect;
  }

  buildFoodList() {
    this.foodListSelectElement.innerHTML = "";
    for (let i = 0; i < this.foodListJson.length; i++) {
      let newOption = this.createSelectOption(this.foodListJson[i]["id"], this.foodListJson[i]["name"], this.foodListJson[i]["price"]);
      this.foodListSelectElement.appendChild(newOption);
    }
    this.foodListSelectElement.setAttribute("onChange","OrderData.recalculatePrice(this);");
  }
}

