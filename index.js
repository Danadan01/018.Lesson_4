let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array1 = [2, [1.2, 1.4, 2.7], 5, 6, [3, 7, 8], 94, 367, [8, 0.5, 4, 5, 7.5], 54, [23, 73, 78]];
const parentDiv = document.getElementById("parentDiv");

function generateList(numArray) {
  const ul = document.createElement("ul");
  parentDiv.appendChild(ul);

  for (let i = 0; i < numArray.length; i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    if (typeof(numArray[i]) === "object") {
      const innerUl = document.createElement("ul");
      li.appendChild(innerUl);
      li.classList.add("marker");

        for (let j = 0; j < numArray[i].length; j++) {
          const innerLi = document.createElement("li");
          innerUl.appendChild(innerLi);
          const innerContent = document.createTextNode(numArray[i][j]);
          innerLi.appendChild(innerContent);
        }

    } else {
      const content = document.createTextNode(numArray[i]);
      li.appendChild(content);
    }
  }
}

generateList(array);
generateList(array1);

