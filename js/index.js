let dataTable = document.querySelector(".dataTable");
let inpName = document.querySelector(".inpName");
let btnName = document.querySelector(".btnName");
let inpQuantity = document.querySelector(".inpQuantity");
let inpCosts = document.querySelector(".inpCosts");
let costsElem = document.querySelector(".costs");
let dataElem = document.querySelector(".dataElem");

let elemItem = document.querySelector(".elem");

let data = [];

if (JSON.parse(localStorage.getItem("dataKlad"))) {
  data = JSON.parse(localStorage.getItem("dataKlad"));
}
dataTable.innerHTML = data
  .map(
    (el, ind) => ` <tr class="dataElem" data-itemid=${ind}>
         <td>${ind + 1}</td>
         <td>${el.title}</td>
         <td class="quantityTbl" data-itemid=${ind} >${el.quantity}</td>
         <td class="costsTbl" data-itemid=${ind}>${el.costs}</td>
         <td  class="deleteItem" data-itemid=${ind}>*</td>
         </tr>`
  )
  .join("");
sumCosts(data);
function sumCosts(data) {
  let sum = 0;
  let elem = 0;
  let arrCosts = [];
  let arrElem = [];

  data.forEach((el) => {
    arrCosts.push(el.costs * el.quantity);
  });
  data.forEach((el) => {
    arrElem.push(el.quantity);
  });

  if (data.length > 0) {
    sum = arrCosts.reduce((a, b) => +a + +b);
  }
  if (data.length > 0) {
    elem = arrElem.reduce((a, b) => +a + +b);
  }
  costsElem.innerHTML = sum;
  elemItem.innerHTML = elem;
  return sum;
}

btnName.addEventListener("click", () => {
  if (inpName.value) {
    dataItem = {
      title: inpName.value,
      quantity: inpQuantity.value,
      costs: inpCosts.value,
    };

    console.log(data);

    data.push(dataItem);
    localStorage.setItem("dataKlad", JSON.stringify(data));
    dataTable.innerHTML = data
      .map(
        (el, ind) => ` <tr  class="dataElem"  data-itemid=${ind}>
         <td >${ind + 1}</td>
         <td>${el.title}</td>
         <td class="quantityTbl" data-itemid=${ind}>${el.quantity}</td>
         <td class="costsTbl" data-itemid=${ind}>${el.costs} </td>
       <td class="deleteItem" data-itemid=${ind}>*</td>
       </tr>`
      )
      .join("");
  }
  inpName.value = "";
  inpQuantity.value = "";
  inpCosts.value = "";
  sumCosts(data);

  //   costs.innerHTML=
});

dataTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("costsTbl") && !isOut) {
    isOut = true;
    let costsTable = event.target;
    console.log(costsTable);
    let indBlock = event.target.dataset.itemid;
    costsTable.innerHTML = `<input class=costTblInp value=${data[indBlock].costs}> <button class="constTblBtn">Редакт </button>`;

    console.log(costsTable);
    let costTblInp = document.querySelector(".costTblInp");
    costTblInp.style.width = "30px";
    console.log(costTblInp.value);

    let costTblBtn = document.querySelector(".constTblBtn");

    costTblBtn.addEventListener("click", () => {
      costsTable.innerHTML = costTblInp.value;
      data[indBlock].costs = costTblInp.value;
      localStorage.setItem("dataKlad", JSON.stringify(data));
      isOut = false;
    });
  }
  sumCosts(data);
});
let isOut = false;
dataTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("quantityTbl") && !isOut) {
    isOut = true;
    let quantityTbl = event.target;

    let indBlock = event.target.dataset.itemid;
    quantityTbl.innerHTML = `<input class=costTblInp value=${data[indBlock].quantity}> <button class="constTblBtn">Редакт </button>`;

    let costTblInp = document.querySelector(".costTblInp");
    costTblInp.style.width = "30px";
    console.log(costTblInp.value);

    let costTblBtn = document.querySelector(".constTblBtn");

    costTblBtn.addEventListener("click", () => {
      quantityTbl.innerHTML = costTblInp.value;
      data[indBlock].quantity = costTblInp.value;
      localStorage.setItem("dataKlad", JSON.stringify(data));
      isOut = false;
    });
  }
  sumCosts(data);
});

dataTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("quantityTbl") && !isOut) {
    isOut = true;
    let quantityTbl = event.target;

    let indBlock = event.target.dataset.itemid;
    quantityTbl.innerHTML = `<input class=costTblInp value=${data[indBlock].quantity}> <button class="constTblBtn">Редакт </button>`;

    let costTblInp = document.querySelector(".costTblInp");
    costTblInp.style.width = "30px";
    console.log(costTblInp.value);

    let costTblBtn = document.querySelector(".constTblBtn");

    costTblBtn.addEventListener("click", () => {
      quantityTbl.innerHTML = costTblInp.value;
      data[indBlock].quantity = costTblInp.value;
      localStorage.setItem("dataKlad", JSON.stringify(data));
      isOut = false;
    });
  }
  sumCosts(data);
});

dataTable.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteItem")) {
    let del = event.target.dataset.itemid;

    data.splice(del, 1);
    data = localStorage.setItem("dataKlad", JSON.stringify(data));
    location.reload();
    console.log(del);
  }
  sumCosts(data);
});

dataElem;
// dataTable.addEventListener('click', function({ target }) {
//     let index = [...this.children].indexOf(target);
// console.log(...this.children)

//   })
