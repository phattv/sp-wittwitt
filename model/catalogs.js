Catalogs = new Mongo.Collection("catalogs");

// http://docs.meteor.com/#/basic/Mongo-Collection-allow
Catalogs.allow({
    insert: function (userId, catalog) {
        return userId && catalog.owner === userId;
    },
    update: function (userId, catalog, fields, modifier) {
        return !(userId !== catalog.owner);
    },
    remove: function (userId, catalog) {
        return !(userId !== catalog.owner);
    }
});