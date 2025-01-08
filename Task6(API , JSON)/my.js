function displayUsers() {

    const JSON_data = new XMLHttpRequest();

    JSON_data.open("GET", "data.json");

    JSON_data.onload = function () {

        if (JSON_data.status === 200) {

            const data = JSON.parse(JSON_data.responseText);
            const users = data.users;

            const output = document.getElementById("output");

            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                const userCard = `
                    <div class="user-card">
                        <p><strong>Name:</strong> ${user.name}</p>
                        <p><strong>Age:</strong> ${user.age}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Hobbies:</strong> ${user.hobbies.join(", ")}</p>
                    </div>
                `;
                output.innerHTML += userCard;
            }
        }
    };


    JSON_data.send();
}

