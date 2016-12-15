import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const bms_data = [
  {
    temperatureA: 111234,
    temperatureB: 5678,
    voltage: 9087
  },
  {
    temperatureA: 6555,
    temperatureB: 343,
    voltage: 2345
  },
    {
    temperatureA: 1234,
    temperatureB: 5678,
    voltage: 9087
  },
  {
    temperatureA: 6555,
    temperatureB: 343,
    voltage: 2345
  }
];

//This would be performed on the server in a real app. Just stubbing in.

class BmsApi {
  static getAllBmsData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], bms_data));
      }, delay);
    });
  }
}

export default BmsApi;