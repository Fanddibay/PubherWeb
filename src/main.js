const formLoan = document.getElementById("optionLoan");

formLoan.addEventListener("submit", function (e) {
  const number = document.getElementById("numberLoan").value;
  const amount = document.getElementById("numberAmount").value;
  const total = number * amount;
  const totalMessage = `Your total Loan ${total} $`;

  document.getElementById("messageLoan").innerText = totalMessage;

  e.preventDefault();
});
