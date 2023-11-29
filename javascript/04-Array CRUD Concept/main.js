//Task : Build Any Application Using If-Else , Switch-Statement , CRUD-Operation

//CRUD-Operations Using Our Internship Members Name Array
//C-Create
//R-Read
//U-Update
//D-Delete

//Internship Members Name
const internList = [
  "Esakki M",
  "Vasanthkumar S",
  "Suriya K",
  "Riyaz",
  "Hema Devi V",
  "Yogha Raj Dhayal N",
  "Mohamed Mushkir",
  "Bearcin Sweety",
  "Dinesh S",
  "Jeya Rosini. H",
  "Swetha Ramesh",
  "Muhammed Shajid Shafee",
  "Muthu Akalya A",
  "Vijayavedhasekaran",
  "Sudharsan (S)",
  "Khaja Sharif",
  "Gayathri H G",
  "KishoreKumar K",
  "Sathesh P C (S)",
  "Muthukumari M",
];

//toConvertLowerCase
let lowercaseInternList = internList.map((lowerCase) =>
  lowerCase.toLowerCase()
);

//shortcut string-"thanks"
const thanks = "Thanks For Comming Better Luck Next Time";
const conform = confirm("Shall We See About CURD-Operation In JS");

//if-condition
if (conform === true) {
  operation = prompt(
    `Enter Your CURD Operation Keyword Like "C", "U", "R","D"`
  ).toLowerCase();
  console.log(`Your Operation is ${operation}`);

  //if-condition
  if (
    operation === "c" ||
    operation === "u" ||
    operation === "r" ||
    operation === "d"
  ) {
    //switch-Case
    switch (operation) {
      case "c":
        {
          let intern_Name = prompt(`Enter CyberDude  Intern Name:
Make Sure Enter Your Name in The Below Formet
"Esakki M"  (White Space & Insell)`).toLowerCase();

          console.log(`You Entered Intern Name is:${intern_Name}`);
          //Create Opeartion
          lowercaseInternList.push(intern_Name);
          console.log(lowercaseInternList);
        }
        break;
      case "u":
        //Update -Operation
        let update_intern_Name = prompt(`Enter CyberDude  Intern Name:
Make Sure Enter Your Name in The Below Formet
"Esakki M"  (White Space & Insell)`).toLowerCase();

        console.log(`You Entered Intern Name is:${update_intern_Name}`);

        if (lowercaseInternList.includes(update_intern_Name)) {
          console.log(
            `${update_intern_Name} is in the internList so you can update your internList..`
          );

          let updateInternIndex =
            lowercaseInternList.indexOf(update_intern_Name);

          console.log(`your Updated Index_No is:${updateInternIndex} `);
          let updateName = prompt(`Enter Your Update Name (New Name)`);
          lowercaseInternList[updateInternIndex] = updateName;
          console.log(lowercaseInternList);
        } else {
          alert(` Hello ${intern_Name} , Sorry your not in the internList  (or) 
   You did typing mistake in your name...`);
          console.log(`${intern_Name} is not in the internList...`);
        }
        break;
      case "r":
        //Read-Operation
        console.log(`CyberDude Intern List: ${lowercaseInternList}`);
        break;
      case "d":
        //Delete -Operation
        let delete_intern_Name = prompt(`Enter CyberDude  Intern Name:
Make Sure Enter Your Name in The Below Formet
"Esakki M"  (White Space & Insell)
 `).toLowerCase();
        if (lowercaseInternList.includes(delete_intern_Name)) {
          console.log(`${delete_intern_Name} is in the internList...`);

          let deleteInternIndex =
            lowercaseInternList.indexOf(delete_intern_Name);

          console.log(
            `your deleted Index_No is:${deleteInternIndex} & deleted intern_Name is:${delete_intern_Name}`
          );
          lowercaseInternList.splice(deleteInternIndex, 1);
          console.log(lowercaseInternList);
        } else {
          alert(` Hello ${delete_intern_Name} , Sorry your not in the internList  (or) 
   You did typing mistake in your name...`);
          console.log(`${delete_intern_Name} is not in the internList...`);
        }
        break;
      default:
        console.log("Invalid Selection");
    }
  } else {
    console.log(`Your Input ${operation} Is Incorrect , Try Again Later... `);
    alert(`Your Input "${operation}" Is Incorrect , Try Again Later... `);
  }
} else {
  console.log(`${thanks}`);
  alert(`${thanks}`);
}
