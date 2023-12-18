class WrestlerService {
  constructor(wrestlerModel) {
    this.wrestlerModel = wrestlerModel;
  }

  async getWrestlers() {
    try {
      const wrestlers = await this.wrestlerModel.findAll({
        attributes: [
          "id",
          "name",
          "height",
          "matches",
          "weight",
          "rank",
          "matches_won",
          "image_url",
        ],
        order: [
          ['rank', 'ASC'],
      ],
      });
      return wrestlers;
    } catch (err) {
      console.log(err);
      throw new Error("Error while getting the Users data");
    }
  }

  // async postUser(userData) {
  //   try {

  //     const user = await this.usermodel.create({
  //       id: userData.id,
  //       login: userData.login,
  //       password: userData.password,
  //       age: userData.age,
  //       isdeleted: userData.isDeleted,
  //     });
  //     serviceLogger('UserService', 'postUser')

  //     return user;
  //   } catch (err) {
  //     throw new Error("Error while adding user");
  //   }
  // };

  // async getUserById(id) {
  //   try {
  //     const user = await this.usermodel.findAll({
  //       where: {
  //         id: id,
  //         isdeleted: false,
  //       },
  //       attributes: ["id", "login", "age"],
  //     });
  //     serviceLogger('UserService', 'getUserById', id)
  //     if(user.length > 0){
  //         return user;
  //     }else{
  //         throw new Error("No user found");
  //     }
  //   } catch (err) {
  //     throw new Error("No user found");
  //   }
  // };

  // async updateUser(userData,id){
  //   try {
  //     const user = await this.usermodel.update(
  //       { login: userData.login, age: userData.age, password: userData.password },
  //       {
  //         where: {
  //           isdeleted: false,
  //           id: id
  //         },
  //       }
  //     );
  //     serviceLogger('UserService', 'updateUser',id)
  //     return user;
  //   } catch (err) {
  //     throw new Error("User not found");
  //   }
  // };

  // async deleteUser(id){
  //   try {
  //     const user = await this.usermodel.update(
  //       { isdeleted: true },
  //       {
  //         where: {
  //           id: id,
  //         },
  //       }
  //     );
  //     await UserGroup.destroy({
  //       where: {
  //         userID:id
  //       }
  //     });
  //     serviceLogger('UserService', 'updateUser',id)
  //     return user
  //   } catch (err) {
  //     throw new Error("User not found");
  //   }
  // };
}

module.exports = WrestlerService;
