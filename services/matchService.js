class MatchService {
    constructor(matchModel) {
      this.matchModel = matchModel;
    }
  
    async getMatches() {
      try {
        const wrestlers = await this.matchModel.findAll({
          attributes: [
            "id",
            "show_name",
            "wrestlers_involved",
            "winner_id",
            "match_date",
            "match_type",
          ],
          order: [
            ['match_date', 'ASC'],
        ],
        });
        return wrestlers;
      } catch (err) {
        console.log(err);
        throw new Error("Error while getting the Matches data");
      }
    }
  

}
  
module.exports = MatchService;
  