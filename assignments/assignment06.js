// --- global variables ---

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
];

// --- function: loadDoc() ---

// function loadDoc() {
$(document).ready(function () {
  /*every instance of JS interacting with the html dom has been replaced by jquery  */

  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;
  $("#loan_year0" + 1).val(defaultYear++);//sets the text of the loan year element
  //  document.getElementById("loan_year0" + 1).value = defaultYear++;
  var defaultLoanAmount = loans[0].loan_amount;
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2)); //sets the value of the loan amount element
  //  document.getElementById("loan_amt0" + 1).value = defaultLoanAmount.toFixed(2);
  var defaultInterestRate = loans[0].loan_int_rate;
  $("#loan_int0" + 1).val(defaultInterestRate); //sets the value of the loan interest element
  //document.getElementById("loan_int0" + 1).value = defaultInterestRate;
  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).text(toComma(loanWithInterest.toFixed(2)));//sets the text of the loan_bal10 element
  //document.getElementById("loan_bal0" + 1).innerHTML = toComma(loanWithInterest.toFixed(2));

  // pre-fill defaults for other loan years
  for (var i = 2; i < 6; i++) {
    $("#loan_year0" + i).val(defaultYear++);
    $("#loan_year0" + i).show();
    $("#loan_year0" + i).css("background-color", "gray");
    $("#loan_year0" + i).css("background-color", "white");
    $("#loan_amt0" + i).val(defaultLoanAmount.toFixed(2));
    $("#loan_int0" + i).val(defaultInterestRate);
    $("#loan_int0" + i).prop("disabled", true);
    $("#loan_int0" + i).css("background-color", "gray");
    $("#loan_int0" + i).css("background-color", "white");
    loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
    $("#loan_bal0" + i).val(toComma(loanWithInterest.toFixed(2)));
    //this should be the equivalent jquery to the previous javascript but it's not functioning. I have no idea what I'm supposed to be doing here.
  } // end: "for" loop

  // all input fields: select contents on fucus
  $("input[type=text]").focus(function () {
    $(this).select();
    $(this).css("background-color", "yellow");
  });
  $("input[type=text]").blur(function () {
    $(this).css("background-color", "white");
  });

  $("input[type=text]").focus(function (){
    let input = /[0-9]{0,15}/;//regex pattern should allow all inputs that are numerical

  });
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  $("#loan_year01").blur(function () {
    updateLoansArray();
  });

  //} // end: function loadDoc()
});

function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateLoansArray() {
  loans[0].loan_year = parseInt($("#loan_year01").val());
  for (var i = 1; i < 5; i++) {
    loans[i].loan_year = loans[0].loan_year + i;
    $("#loan_year0" + (i + 1)).val(loans[i].loan_year);
  }
}