const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Month: ', (month) => {
  rl.question('Hours: ', (hours) => {
    rl.question('Group size: ', (groupSize) => {
      rl.question('Time of day (day/night): ', (timeOfDay) => {
        rl.close();

        let pricePerHour = 0;

        if (["march", "april", "may"].includes(month)) {
          pricePerHour = timeOfDay === "day" ? 10.50 : 8.40;
        } else if (["june", "july", "august"].includes(month)) {
          pricePerHour = timeOfDay === "day" ? 12.60 : 10.20;
        }

        const totalHours = parseInt(hours);
        let totalCost = pricePerHour * totalHours * parseInt(groupSize);

        if (groupSize >= 4) {
          totalCost *= 0.9; // 10% discount for groups of four or more
        }

        if (totalHours >= 5) {
          totalCost *= 0.5; // 50% discount for more than five hours
        }

        console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
        console.log(`Total cost of the visit: ${totalCost.toFixed(2)}`);
      });
    });
  });
});