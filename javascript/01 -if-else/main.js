let willing = confirm(
  "Welcome to D-Mart... You Want To Shop Anything In D-mart?"
);
if (willing) {
  alert("Now We Are Offering Only Chocolates");
  let chocolate = prompt(
    `Enter Any Chocolate Name Like "KitKat","Dairy Milk","Perk"`
  );
  let chocolateName = chocolate.trim().toLocaleLowerCase();
  if (
    chocolateName === "kitkat" ||
    chocolateName === "dairymilk" ||
    chocolateName === "perk"
  ) {
    console.log(`Your Cholate Name Is ${chocolateName}`);
    alert(`Your ${chocolateName} Chocolate Prize Is Rs:50`);
    perChocolatePrize = 50;
    let quantity = prompt(`Enter Your ${chocolateName} Quantity in No's`);

    if (quantity) {
      console.log(`Your ${chocolateName} Quantuty Is ${quantity}`);
      let finalPrize = perChocolatePrize * quantity;
      alert(`Your Buying Prize Is RS: ${finalPrize}`);
      console.log(`Your Buying Prize Is RS: ${finalPrize}`);
    } else {
      alert("You Entered Wroung Key Word ");
    }
  } else {
    alert("You Entered Wroung Key Word");
  }
} else {
  alert("See You In Next Time... Have A Good Day!");
}
