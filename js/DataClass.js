class HambiData {
  dataURL = "";
  getOptions = { method: "GET", mode: "cors", contenttype: "application/json", cache: "no-cache" };
  deleteOptions = { method: "GET", mode: "cors", contenttype: "application/json", cache: "no-cache" };
  putOptions = { method: "GET", mode: "cors", contenttype: "application/json", cache: "no-cache" };
  pushOptions = { method: "GET", mode: "cors", contenttype: "application/json", cache: "no-cache" };

  constructor(dataURL) {
    this.dataURL = dataURL;
  }

  static onDataError(error) {
    console.log(error);
    alert("Hiba a bevitt adatokban. Számot kell megadni");
  };

  static onCommError(data) {
    console.log(data);
    alert("Az adatbázis elérése nem sikerült, kérem próbálkozzon egy későbbi időpontban!");
  };

  getData(callBackfunct,) {
    fetch(this.dataURL, this.getOptions)
      .then((response) => response.json())
      .then(function (data) {
        if (data.Error !== true) { callBackfunct(data) }
        else { this.onDataError(data); }
      })
      .catch(function (error) {
        HambiData.onCommError(error);
      });
  }
};

