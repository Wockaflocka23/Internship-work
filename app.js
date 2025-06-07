/*This was the exisiting piece of code
function fetchData(callback) {
    setTimeout(() => {
        let error = false;
        if (error) {
            callback("Error occurred", null);
        } else {
            callback(null, "Data fetched successfully");
        }
    }, 2000);
}

fetchData((err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
*/

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (error) {
                reject("Error occurred");
            } else {
                resolve("Data fetched successfully");
            }
        }, 2000);
    });
}

async function getData() {
    try {
        let data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();
