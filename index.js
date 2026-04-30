// // //axios vs fetch
// // function main() {
// //     fetch("https://dummyjson.com/todos")
// //         .then(async response => {
// //             const json = await response.json();
// //             console.log(json.todos.length);
// //         })

// // }

// // main();
// async function main() {
//     const response = await fetch("https://dummyjson.com/todos");
//     const json = await response.json();
//     console.log(json.todos.length)
// };

// main();

const axios = require("axios");

async function main() {
    const response = await axios.post("https://httpdump.app/dumps/8f55c4ec-0beb-4969-8fb0-3e35f2f8ee3d",
        {
            username: "chintan",
            password: "123456",
        },
        {
            headers: {
                Authorization: "Bearer 123"
            },
        },
    );
    console.log(response.data);
};

main();