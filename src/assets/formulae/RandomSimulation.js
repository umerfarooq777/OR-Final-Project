








//!=========================================
function generateRandomExponential(u) {
  return Math.floor(u * Math.log(Math.random()) * -1);
}

const calculateArrivalsFromInterArrivals = (interArrivals) => {
  const arrivals = [];
  for (let i = 0; i < interArrivals.length; i++) {
    if (i === 0) {
      arrivals.push(interArrivals[i]);
    } else {
      arrivals.push(arrivals[i - 1] + interArrivals[i]);
    }
  }
  return arrivals;
};

export const generate = (interArrivals, serviceTimes, numberOfServers) => {
  const arrivals = calculateArrivalsFromInterArrivals(interArrivals);
//   console.log(numberOfServers);
  var servers = []

  for(var i = 0; i < numberOfServers; i++) {
    servers.push(0);
}

//   console.log(servers)
  const customers = [];
  let serverNum = 0;

  for (let i = 0; i < arrivals.length; i++) {


    for (var index = 0; index < servers.length; index++) {
      if (servers[index] > servers[index + 1]) {
        serverNum = index + 1;
      }
    }
    // [0,0]
    let startTime = arrivals[i] < servers[serverNum] ? servers[serverNum] : arrivals[i];
    let endTime = startTime + serviceTimes[i];
    let arrival = arrivals[i];
    let waitTime = startTime - arrival;
    let turnaroundTime = endTime - arrival;
    let obj = {
      arrival,
      interArrival: interArrivals[i],
      serviceTime: serviceTimes[i],
      server: serverNum + 1,
      startTime,
      endTime,
      waitTime,
      turnaroundTime,
    };
    servers[serverNum] += serviceTimes[i];
    customers.push(obj);
  }
//   setServerData(serverData)
  return {customers,servers};
};

// THis is your entry function
const generateArrivals = () => {
  // / Inputs
  const MeanInterArival = 4.75;
  const MeanServiceTime = 5.4;

  const serviceTimes = [];
  const interArrivals = [];
  for (let i = 0; i < numberOfCustomers; i++) {
    interArrivals.push(generateRandomExponential(MeanInterArival));
    serviceTimes.push(generateRandomExponential(MeanServiceTime));
  }

  interArrivals[0] = 0;
  generate(interArrivals, serviceTimes);
};
