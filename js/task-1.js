const listItemInCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", listItemInCategories.length);
listItemInCategories.forEach((node) => {
  node.childNodes.forEach((childNode) => {
    if (childNode.nodeName === "H2") {
      console.log("Categoty: ", childNode.textContent);
    }
    if (childNode.nodeName === "UL") {
      console.log("Elements: ", childNode.children.length);
    }
  });
});
