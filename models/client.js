module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    bus_name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    first_apt: DataTypes.TIME,
    last_apt: DataTypes.TIME,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });
  return Client;
};
