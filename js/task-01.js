const findCategoryRef = document.querySelectorAll(".item");
console.log('Number of categories:', findCategoryRef.length);
 
findCategoryRef.forEach(elem => {
    console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.children.length);

});