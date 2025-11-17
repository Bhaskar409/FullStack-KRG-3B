const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
        reject("Something went wrong"); 
    }, 2000);
});

fetchData
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });

