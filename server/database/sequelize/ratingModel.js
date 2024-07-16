module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define("rating", {
        ratingid: {
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
           
          artid: {
            type: DataTypes.INTEGER,
           foreignKey:true,
            allowNull: false,
  
          },
        })
        return Rating
    }
