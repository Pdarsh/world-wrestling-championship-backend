const MatchService = require("../../services/matchService");
const WrestlerService = require("../../services/wrestlerService")
const Match = require("../../models/match")
const Wrestler = require("../../models/wrestler")

const matchServiceInstance = new MatchService(Match)
const wrestlerServiceInstance = new WrestlerService(Wrestler)

exports.getmatches = async (req, res) => {
  try {
    const users = await matchServiceInstance.getMatches()
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Matches Retrieved Succesfully",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.postMatch = async (req, res) => {
  try {
    const match = await matchServiceInstance.postMatch(req.body)
    await wrestlerServiceInstance.updateWrestlersAfterMatch(match.wrestlers_involved_id, match.winner_id)
    return res.status(200).json({
      status: 200,
      data: match,
      message: `And the winner is ${match.winner_id}`,
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
}