const { FOREIGNKEYS } = require("sequelize/lib/query-types")

module.exports = (sequelize, DataTypes) => {
    const Art = sequelize.define("art", {
        artid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true ,
            allowNull: false
        
          },
          imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
          },
          userid: {
            type: DataTypes.INTEGER,
           foreignKey:true,
            allowNull: false,
  
          },

        })
        return Art
    }
