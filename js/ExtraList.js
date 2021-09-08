class ExtraList {
  extraListJson;
  containerDiv;

  constructor(containerDiv, extraListJson) {
    this.containerDiv = containerDiv;
    this.extraListJson = extraListJson;
  };

  createCheckBox(id,price) {
    let newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");
    newCheckBox.setAttribute("class", "form-check-input priceRecalc");
    newCheckBox.setAttribute("id", "cbSelectExtra" + id);
    newCheckBox.setAttribute("price",price);
    newCheckBox.setAttribute("onChange","OrderData.recalculatePrice(this);");
    return newCheckBox;
  }

  createLabel(id,name,price) {
    let newLabel = document.createElement("label")
    newLabel.setAttribute("type", "checkbox");
    newLabel.setAttribute("class", "form-check-label");
    newLabel.setAttribute("for", "cbSelectExtra" + id);
    newLabel.appendChild(document.createTextNode(name + " (" + price + ".-ft)"));
    return newLabel;
  }

  createFormCheckDiv(id,name,price){
    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "form-check");
    newDiv.appendChild(this.createCheckBox(id,price));
    newDiv.appendChild(this.createLabel(id,name,price));
    return newDiv ;
  }

  buildExtrsList(){
    this.containerDiv.innerHTML = "" ;
    for (let i = 0; i < this.extraListJson.length; i++) {
      let newDiv = this.createFormCheckDiv(this.extraListJson[i]["id"],this.extraListJson[i]["name"],this.extraListJson[i]["price"]);
      this.containerDiv.appendChild(newDiv);
    }
  }

  static calculateExtrasPrice(containerDiv){
    console.log(containerDiv) ;
    let extrasPrice = 0 ;
    let extrasCheckBoxArray = document.querySelectorAll("#"+containerDiv+" input");
    console.log(extrasCheckBoxArray) ;
    return extrasPrice ;
  }
}
