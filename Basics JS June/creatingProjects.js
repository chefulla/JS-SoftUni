function creatingProjects(input) {
 architectName = input[0];
 projects = Number(input[1]);
 hours = 3;
 let neededHours = projects * hours;

 console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${projects} project/s.`)
}
creatingProjects(["George", "4", "Sanya", "9"])
