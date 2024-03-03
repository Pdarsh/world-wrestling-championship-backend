const WrestlerService = require("../../services/wrestlerService");
const Wrestler = require("../../models/wrestler")

const wrestlerServiceInstance = new WrestlerService(Wrestler)

exports.getWrestlers = async (req, res) => {
  try {
    const users = await wrestlerServiceInstance.getWrestlers()
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Users Retrieved Succesfully",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

// exports.postUser = async (req, res) => {
//   try {
//     const user = await userServiceInstance.postUser(req.userData);
//     return res.status(200).json({
//       status: 200,
//       data: user,
//       message: "User Added Successfully",
//     });
//   } catch (err) {
//     errorLoggingMiddleware('postUser', err);

//     return res.status(400).json({ status: 400, message: err.message });
//   }
// };

// exports.getUserById = async (req, res) => {
//   try {
//     const user = await userServiceInstance.getUserById(req.params.id);

//     return res.status(200).json({
//       status: 200,
//       data: user,
//       message: "User Retrieved Successfully",
//     });
//   } catch (err) {
//     errorLoggingMiddleware('getUserById', err,req.params.id);

//     return res.status(400).json({ status: 400, message: err.message });
//   }
// };

// exports.updateWrestlers = async (req, res) => {
//   try {
//     // const userExist = await userServiceInstance.getUserById(req.params.id)
//     // if(userExist){
//     //   const user = await userServiceInstance.updateUser(req.userData,req.params.id);
//     //   return res.status(200).json({
//     //     status: 200,
//     //     data: user,
//     //     message: "User Updated Successfully",
//     //   });
//     // }
//   } catch (err) {
//     return res.status(400).json({ status: 400, message: err.message });
//   }
// };

// exports.deleteUser = async (req, res) => {
//   try {
//     const userExist = await userServiceInstance.getUserById(req.params.id)
//     if(userExist){
//       const user = await userServiceInstance.deleteUser(req.params.id);
//       return res.status(200).json({
//         status: 200,
//         data: user,
//         message: "User Deleted Successfully",
//       });
//     }
//   } catch (err) {
//     errorLoggingMiddleware('deleteUser', err,req.params.id);

//     return res.status(400).json({ status: 400, message: err.message });
//   }
// };
