import { Sequelize,DataTypes} from "sequelize";
import db from "../db.js";

const URLS = db.define("Link",{
    OriginalLink : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CostumeLink: {
        type : DataTypes.STRING,
        allowNull: true
    }
},{
    freezeTableName : true
})

export default URLS;