// voting.js

function submitVote(event) {
    event.preventDefault();

    // Retrieve values from the form
    const name = document.getElementById('name').value;
    const votingOption = document.getElementById('voting_option').value;
    const votingLocation = document.getElementById('voting_location').value;
    const votingNumber = document.getElementById('voting_number').value;
    const yardNumber = document.getElementById('yard_number').value;

    // Prepare the data object
    const data = {
        name: name,
        votingOption: votingOption,
        votingLocation: votingLocation,
        votingNumber: votingNumber,
        yardNumber: yardNumber
    };

    // Call function to send data to server
    sendData(data);
}

async function sendData(data) {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.post('/voting/submit-vote', data, { headers: { "Authorization": token } });
        if (res.status === 200) {
            console.log(res.data.message);
            alert("Vote submitted successfully!");
        }
    } catch (err) {
        console.log('Error:', err);
    }
}