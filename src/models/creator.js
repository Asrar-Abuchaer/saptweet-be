module.exports = (sequelize, Sequelize) => {
  const creator = sequelize.define(
    "creator",
    {
      fullname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "creators",
    }
  );
  return creator;
};
