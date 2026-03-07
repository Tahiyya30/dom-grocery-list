// Practical Task - M03T02

// Create array with grocery list items
let groceryList = ["cauliflower", "milk", "apple juice", "bread"];

// Function to create a list given an id and array
function displayItems(id, array) {
  // Create a list variable that finds and saves a list based on its id
  let list = document.querySelector("#" + id);

  //  Loop through array
  for (let i = 0; i < array.length; i++) {
    // create a list element for every element you loop through in array
    let listElement = document.createElement("li");
    // let every element's content in array be a list item
    listElement.textContent = array[i];
    // Append the list element created with its content to the list
    list.appendChild(listElement);
  }
  // Log list to console
  console.log(list);
}

displayItems("itemList", groceryList);

// ======================================================================================

//Function to colour items bought on list
function setDefaultChecked(item1, item2, array, id) {
  // if ul list exists, run below code
  let list = document.querySelector("#" + id);

  //   Check if list element exists, if not, log error message and exit function
  if (!list) {
    console.log("Element does not exist.");
    return;
  }
  // Check if element is a list, if not, error message, log error message and exit function
  if (list.tagName !== "UL") {
    console.log("Element exists but is not an unordered list.");
    return;
  }
  // convert items user puts in to lowercase
  item1 = item1.toLowerCase();
  item2 = item2.toLowerCase();

  //   loop through array of items
  for (let i = 0; i < array.length; i++) {
    // if item 1 or 2 equals to element in array,
    if (item1 === array[i].toLowerCase() || item2 === array[i].toLowerCase()) {
      // save that list item (child element of ul) as a variable
      let itembought = document.querySelector(`#${id} li:nth-child(${i + 1})`);

      // if the list exists (in case list isn't made yet)
      if (itembought) {
        // colour list item variable in pink
        itembought.style.backgroundColor = "pink";
        // else display error message
      } else {
        console.log("No items in your list yet.");
      }
    }
  }
}

setDefaultChecked("cauliflower", "bread", groceryList, "itemList");
