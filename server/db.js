import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config()
const db = new Sequelize(process.env.DATABASE,process.env.USERDB,process.env.PASSWORD,{
    host : "localhost",
    dialect : "mysql"

})

export default db