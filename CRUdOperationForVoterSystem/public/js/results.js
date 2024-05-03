document.addEventListener('DOMContentLoaded', function() {
    fetchResults();
});

async function fetchResults() {
    try {
        const response = await axios.get('/results/get-results');
        if (response.status === 200) {
            const allVotes = response.data.data;

            if (allVotes.length === 0) {
                console.log('No voting records found.');
                return;
            }

            const resultsTableBody = document.getElementById('resultsTableBody');

            // Clear existing table rows
            resultsTableBody.innerHTML = '';

            // Populate table with voting data
            allVotes.forEach(vote => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${vote.name}</td>
                    <td>${vote.votingOption}</td>
                    <td>${vote.votingLocation}</td>
                    <td>${vote.votingNumber}</td>
                    <td>${vote.yardNumber}</td>
                `;
                resultsTableBody.appendChild(row);
            });
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching voting data. Please try again later.');
    }
}