//Question 1:

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise1 = job();

promise1

  .then(function () {
    console.log("Success 1");
  })

  .catch(function () {
    console.log("Success 2");
  })

  .then(function () {
    console.log("Success 3");
  })

  .catch(function () {
    console.log("Error 1");
  })

  .then(function () {
    console.log("Success 4");
  });

  
//Question 2:
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise2 = job(true);

promise2

  .then(function (data) {
    console.log(data);

    return job(false);
  })

  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);
  });

//Question 3:

  function job(state) {
    return new Promise(function (resolve, reject) {
      if (state) {
        resolve("success");
      } else {
        reject("error");
      }
    });
  }

  let promise3 = job(true);

  promise3

    .then(function (data) {
      console.log(data);     //sucess

      return job(true);
    })

    .then(function (data) {
      if (data !== "victory") {
        throw "Defeat";
      }

      return job(true);
    })

    .then(function (data) {
      console.log(data);
    })

    .catch(function (error) {
      console.log(error); // defeat 

      return job(false);
    })

    .then(function (data) {
      console.log(data);

      return job(true);
    })

    .catch(function (error) {
      console.log(error);    //ERROR

      return "Error caught";
    })

    .then(function (data) {
      console.log(data); // erorr caught

      return new Error("test");
    })

    .then(function (data) {
      console.log("Success:", data.message);
    })

    .catch(function (data) {
      console.log("Error:", data.message);
    });