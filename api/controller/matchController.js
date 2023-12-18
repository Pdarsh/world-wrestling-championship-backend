const MatchService = require("../../services/matchService");
const Match = require("../../models/match")

const matchServiceInstance = new MatchService(Match)

exports.getmatches = async (req, res) => {
  try {
    const users = await matchServiceInstance.getMatches()
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Users Retrieved Succesfully",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};