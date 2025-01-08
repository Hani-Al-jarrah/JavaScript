
async function displayUsers() {
    try {
       
        const response = await fetch('https://api.npoint.io/44524f9f564eb42f9260');
        const data = await response.json(); 

        console.log(data); 

        
        const outputDiv = document.getElementById('output');
   

        if (Array.isArray(data)) { ////// not understandable
            for (const user of data) {
             
                const userCard = document.createElement('div');

                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                `;

                outputDiv.appendChild(userCard);
            }
        } 
    } catch (error) {
        console.error("Error fetching data:", error);

        const outputDiv = document.getElementById('output');
        outputDiv.innerText = "Failed to fetch user data.";
    }
}

