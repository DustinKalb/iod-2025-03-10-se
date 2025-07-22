const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    post_description: {
      type: DataTypes.STRING,
      allowNull: true,
      required: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
      required: false,
    },
    share_url: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
    publishedAt: {
      type: DataTypes.DATE,
      field: "published_at",
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", // use
    // lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Post;
