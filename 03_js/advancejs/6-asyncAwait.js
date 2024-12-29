function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // It always resolves
            resolve({
                name: 'Satvik Sharma',
                url: "https://satvik-sharma.vercel.com/"
            })
        }, 2000)
    });
}

async function getUserData() {
    try{
        console.log("Fetching the data...");
        const userData = await fetchUserData();
        console.log("User data fetched successfully");

        console.log("User data: ", userData);
    }catch(error){
        console.log("Error Fetching the data!");
    }
}

getUserData();