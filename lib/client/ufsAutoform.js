AutoForm.addInputType('ufs', {
    template: 'ufs_form',
    valueIsArray: true,
    valueOut: function () {
        // console.log(AutoForm.valueConverters.stringToStringArray(this.val()));
        return this.val();
    }
});

getCollection = function (collection) {
    if (typeof collection === 'string') {
        var stores = UploadFS.getStores();
        var store = stores[collection];
        return store.getCollection() || window[context.atts.collection];
    }
};

getMongoCollection = function (collection) {
    if (typeof collection === 'string') {
        return Meteor.connection._stores[collection]._getCollection();
    }
};

getImageStore = function (context) {
    var store = context.atts.store;
    var root = Meteor.isClient ? window : global;
    return root[store];
};

// getDocument = function (context) {
//     var collection, id;
//     collection = getImageCollection(context);
//     if (Template.instance() != null && Template.instance().value != null && typeof Template.instance().value.get() === "function") {
//         id = Template.instance().value.get();
//     }
//     return collection != null ? collection.findOne(id) : void 0;
// };