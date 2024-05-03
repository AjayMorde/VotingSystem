const Voting = require('../models/voting_model');


exports.submitVote = async(req, res) => {
    try {

        const { name, votingOption, votingLocation, votingNumber, yardNumber } = req.body;


        const newVote = await Voting.create({
            name: name,
            votingOption: votingOption,
            votingLocation: votingLocation,
            votingNumber: votingNumber,
            yardNumber: yardNumber,
            UserId: req.user.id
        });

        res.status(200).json({ message: "Vote submitted successfully!" });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: "An error occurred while submitting the vote." });
    }
};