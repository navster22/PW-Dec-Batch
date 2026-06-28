const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
    const response = await fetch(BASE_URL);
    return response.json();
}

export const updateUser = async (user) => {
    const response = await fetch(`${BASE_URL}/${user.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    return response.json();
}