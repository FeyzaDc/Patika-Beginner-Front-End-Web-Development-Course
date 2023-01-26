import axios from "axios";

const getUser = async (num) => {
    const { data: user } = await (axios("https://jsonplaceholder.typicode.com/users/" + num));
    console.log(`User ${num} : `, user);
};

const getPost = async (num) => {
    const { data: post } = await (axios("https://jsonplaceholder.typicode.com/posts/" + num));
    console.log(`Post ${num} : `, post);
};

async function getData(num) {

    try {
        const u = await getUser(num);
        const p = await getPost(num);
    } catch (e) {
        console.log(e);
    }
}

export default getData;