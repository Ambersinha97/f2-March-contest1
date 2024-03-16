let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr
    .map((arr) => {
      if (arr.profession === "developer") {
        return arr;
      }
    })
    .filter(Boolean); // Filter out undefined values

  console.log("Developers (Map):", developers);
}

function PrintDeveloperbyForEach() {
  const developers = [];
  arr.forEach((earr) => {
    if (arr.profession === "developer") {
      developers.push(arr);
    }
  });
  console.log("Developers (forEach):", developers);
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("Array after adding new employee:", arr);
}

function removeAdmin() {
  const updatedEmployees = arr.filter(
    (arr) => arr.profession !== "admin"
  );
  console.log("Array after removing admin:", updatedEmployees);
}

function concatenateArray() {
  const newArr = [
    { id: 5, name: "amber", age: "26", profession: "manager" },
    { id: 6, name: "akash", age: "25", profession: "consultant" },
    { id: 7, name: "rakesh", age: "27", profession: "developer" },
  ];
  const combinedEmployees = arr.concat(newArr);
  console.log("Combined array:", combinedEmployees);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
concatenateArray();
