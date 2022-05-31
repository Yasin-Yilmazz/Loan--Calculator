const select = document.getElementById("select");
const due = document.getElementById("due");
const amount = document.getElementById("amount");
const calculateBtn = document.querySelector(".calc-btn");
let rate = 0;
let installment = 0;

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (select.value === "Housing Loan") {
    rate = 1.29;
  } else if (select.value === "Personal Loan") {
    rate = 1.99;
  } else if (select.value === "Car Loan") {
    rate = 1.79;
  }

  const interest = rate / 100;
  installment =
    (amount.value * (interest * (1 + interest) ** due.value)) /
    ((1 + interest) ** due.value - 1);

  if (!select.value || !due.value || !amount.value) {
    alert("Please enter Credit type, due and amount");
  } else {
    showResults();
  }
});

const showResults = () => {
  const results = document.querySelector(".results");
  results.innerHTML = `
   <h2 class="mt-3 text-warning">Credit Information</h2>
  <table class="table table-bordered border-warning  mt-4">
   <tbody>
    <tr>
      <th>Credit Amount</th>
      <td>${amount.value} ₺</td>
      <th>Credit Type</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Due Date</th>
      <td>${due.value}</td>
      <th>Interest Rate</th>
      <td>${rate}</td>
    </tr>
    <tr>
      <th>Total Amount</th>
      <td>${(installment * due.value).toFixed(2)} ₺</td>
      <th>Installment Amount</th>
      <td>${installment.toFixed(2)} ₺</td>
    </tr>
  </tbody>

</table>
`;
};
