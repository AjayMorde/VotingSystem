const Voting = require('../models/voting_model');

const getVotingData = async(req, res) => {
    try {

        const allVotes = await Voting.findAll();


        if (allVotes.length === 0) {
            return res.status(404).json({ message: 'No voting records found.' });
        }


        res.status(200).json({ data: allVotes });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred while fetching voting data.' });
    }
};

module.exports = { getVotingData }