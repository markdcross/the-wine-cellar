// module.exports = (sequelize, DataTypes) => {
//     const Wine = sequelize.define('Wine', {
//         wine_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1],
//             },
//         },
//         winery: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1],
//             },
//         },
//         style: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1],
//             },
//         },
//         description: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1],
//             },
//         },
//         rating: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             validate: {
//                 max: 5,
//                 min: 0,
//             },
//         },
//         consumed: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false,
//         },
//     });

//     return Wine;
// };
