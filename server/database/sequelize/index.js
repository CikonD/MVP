// const config = require("./config.js");
const { Sequelize, DataTypes } = require("sequelize");

// create a database connection in your application using a Sequelize instance and the config file
const sequelize = new Sequelize(
  "Digital_Art_Galery",
  "root",
  "root",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./userModel')(sequelize,DataTypes)
db.Art = require('./artModel')(sequelize,DataTypes)
db.Rating = require('./ratingModel')(sequelize,DataTypes)
db.User.hasMany(db.Rating,{foreignKey:"userid"})
db.Rating.belongsTo(db.User,{foreignKey:"userid"})


db.User.hasMany(db.Art,{foreignKey:"userid"})
db.Art.belongsTo(db.User,{foreignKey:"userid"})
db.Art.hasMany(db.Rating,{foreignKey:"artid"})
db.Rating.belongsTo(db.Art,{foreignKey:"artid"})









db.sequelize.sync()

//verify your connection here !
sequelize.authenticate()
.then(() => {console.log('database connected')
}).catch((err) => {
  console.log(err);
});


module.exports = {db}

//  create your table using sequilize




// this call, Sequelize will automatically perform an SQL query to the database and create a table, printing the message phrase table created successfully!.
// please run this below *****one time***** after creating your connection



// export your Model Phrase below