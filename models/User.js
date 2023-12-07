const { DataTypes } = require("sequelize");

const UserModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [6,20],
            msg: "Your username should be at least 6 chars long."
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            msg: "This is not a valid email, please try again."
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5,Infinity],
            msg: "Your password must be at least 5 chars long."
        }

    },
    high_score: {
        type: DataTypes.INTEGER,
    },
    
    favorite_artist: {
        type: DataTypes.STRING
    }
}

module.exports = {
    initialze: (sequelize) => {
        this.model = sequelize.define("User", UserModel);
    },

    createUser: (user) => {
        return this.model.create(user);
    }
}