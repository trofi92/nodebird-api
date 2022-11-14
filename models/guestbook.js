const Sequelize = require("sequelize");
//수정필요
module.exports = class Guestbook extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(40),
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        content: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Guestbook",
        tableName: "guestbooks",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  //   static associate(db) {
  //     db.Guestbook.belongsTo(db.User);
  //     db.Guestbook.belongsToMany(db.Hashtag, {
  //       through: "PostHashtag",
  //     });
  //   }
};
