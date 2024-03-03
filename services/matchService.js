const _ = require("lodash");

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
            "wrestlers_involved_name",
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


    async postMatch (body) {
      try {
        const {show_name, wrestlers_involved_id, wrestlers_involved_name, match_type} = body;
        const winner = _.sample(wrestlers_involved_id);
        const match = await this.matchModel.create({ show_name,
          wrestlers_involved_name, match_type, wrestlers_involved_id,
          match_date: new Date().toISOString().split('T')[0],
          winner_id: [winner]})
        
        return match
      } catch (err) {
        console.log(err);
        throw new Error("Error while creating the Match");
      }
    }
  

}
  
module.exports = MatchService;
  