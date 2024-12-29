function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post data fetched!")
        }, 2000)
    })
}

function fetchCommentData() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Comment Data fetched!")
        }, 3000);
    });
}


async function getBlogData(){
    try {
        console.log("Fetching blog data...");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const [blogData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log("Fetch completed");
        console.log(blogData);
        console.log(commentData);
    } catch (error) {
        console.log("Error fetching blog data", error);
    }
}

getBlogData();