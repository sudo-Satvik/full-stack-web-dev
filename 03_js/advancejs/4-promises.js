// Promise creating
function fetchData() {
    return new Promise((resolve, reject) => {
        // async operation
        setTimeout(() => {
            let sucess = true;
            // let sucess = false;
            if (sucess) {
                resolve("Data Fetched successfully")
            } else{
                reject("Error fetching data")
            }
        }, 3000);
    });
}

// Promise consumption
fetchData()
    .then(data => {
        console.log(data)
        return data.toLowerCase()
    })
    .then((value) => {
        console.log(value);
    })
    .catch(error => console.log(error))
    .finally(() => console.log("Operation ended"))