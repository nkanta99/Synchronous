// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)


// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 2000);
// setTimeout(() => {
//     console.log(3)
// }, 0);
// console.log(4)

// let myPosts = ['post 1', 'post 2', 'post 3'];
// const allPosts = () => {
//     setTimeout(() => {
//         myPosts.map((post) => console.log(post)) // mapping through the myPost array and logging each post to the terminal
//     }, 1000);
// }

// const createPost = (post) => {
//     setTimeout(() => {
//         myPosts.push(`${post}`)
//     }, 2000);
// }
// createPost('Post 4')
// allPosts()

// let myPosts = ["post 1", "post 2", "post 3"];
// const allPosts = () => {
//   setTimeout(() => {
//     myPosts.map((post) => console.log(post)); // mapping through the myPost array and logging each post to the terminal
//   }, 1000);
// };

// const createPost = (post, callback) => {
//   setTimeout(() => {
//     myPosts.push(`${post}`)
//     callback()
//   }, 2000);
// };
// createPost("Post 4", allPosts)

// let users = ['Dave', 'Gary', 'Steve'];

// const addUser = (username, call) => {
//     setTimeout(() => {
//         users.push(username);
//         callback()
//     }, 2000);
// };

// const getUsers = () => {
//     setTimeout(() => {
//         console.log(users);
//     }, 1000);
// };

// addUser('Charlie', getUsers);

// let myPosts = ["post 1", "post 2", "post 3"];
// const allPosts = () => {
//          setTimeout(() => {
//            myPosts.map((post) => console.log(post)) // mapping through the myPost array and logging each post to the terminal
//         }, 1000);
// }

// const createPost = (post) => {
//     return new Promise((resolve, reject ) => {
//   setTimeout(() => {
//     myPosts.push(`${post}`)
//     const error = false
//     if(!error) {
//                resolve()
//            } else{
//                reject('oops there has been an error')
//            }
//   }, 2000);
// })
// }

// const init = async () => {
//     try {
//        await createPost('Post 4')
//     allPosts()  
//     } catch (error) {
//         console.log(error)
//     }

// }
// init()

const fetchImages = async () => {
    try {
         let response = await fetch("https://picsum.photos/v2/list")
         let data = await response.json() // formating the response to give us the data we need
         console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchImages()




