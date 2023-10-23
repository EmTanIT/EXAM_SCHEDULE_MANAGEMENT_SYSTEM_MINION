import sequelize from "../database/database.js";
import { DataTypes, INTEGER } from "sequelize";
import Semester from "./Semester.js";

let tableName = 'timeSlots'

const TimeSlot = sequelize.define(tableName, {
    startTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    endTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    semesterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        Reference: {
            model: Semester,
            key: 'id'
        }
    }
});

await TimeSlot.sync().then(() => {
    console.log(`${tableName} table is ready`);
})

export default TimeSlot