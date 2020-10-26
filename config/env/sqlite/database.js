module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: "database.db",
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
