
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
    } = require(

    'graphql');

const ConnectionTypeID = require('../models/connectionTypes');
const connection = require('../models/connection');
const LevelID = require('../models/levels');
const station = require('../models/station');
const currentTypeID = require('../models/currentType');



const stationType = new GraphQLObjectType({
    name: 'station',
    description: 'Stations',
    fields: () => ({
        id: {type: GraphQLID},
        Title: {type: GraphQLString},
        AddressLine1: {type: GraphQLString},
        Town: {type: GraphQLString},
        StateOrProvince: {type: GraphQLString},
        Postcode: {type: GraphQLString},
        Connections: {
            type: connectionType,
            resolve: async (parent, args) => {
                try {
                    return await connection.findById(parent.Connections);
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },
    }),
});

const connectionType = new GraphQLObjectType({
    name: 'connection',
    description: 'all connections',
    fields: () => ({
        id: {type: GraphQLID},
        ConnectionTypeID: {
            type: connectionTypeType,
            resolve: async (parent, args) => {
                try {
                    return await ConnectionTypeID.findById(parent.ConnectionTypeID);
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },
        LevelID:{
            type: levels,
            resolve: async (parent, args) => {
                try {
                    return await LevelID.findById(parent.LevelID);
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },
        currentTypeID:{
            type: currentTypes,
            resolve: async (parent, args) => {
                try {
                    return await currentTypeID.findById(parent.currentTypeID);
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },
        Quantity: {type: GraphQLString},
    }),
});

const connectionTypeType = new GraphQLObjectType({
    name: 'ConnectionTypeID',
    description: 'connection types',
    fields: () => ({
        id: {type: GraphQLID},
        FormalName: {type: GraphQLString},
        Title: {type: GraphQLString},
    }),
});
const levels = new GraphQLObjectType({
    name: 'LevelID',
    description: '',
    fields: () => ({
        id: {type: GraphQLID},
        Comments: {type: GraphQLString},
        IsFastChargeCapable: {type: GraphQLString},
        Title: {type: GraphQLString},
    })
});

const currentTypes = new GraphQLObjectType({
    name: 'currentTypeID',
    description: '',
    fields: () => ({
        id: {type: GraphQLID},
        Description: {type: GraphQLString},
        Title: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Main query',
    fields: {
        stations: {
            type: new GraphQLNonNull(new GraphQLList(stationType)),
            description: 'Get station',
            resolve: async (parent, args) => {
                try {
                    return await station.find();
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },

        station: {
            type: stationType,
            description: 'Get station by id',
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: async (parent, args) => {
                try {
                    return await station.findById(args.id);
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },
    },
});

/*
const Mutation = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Mutations...',
    fields: {
        addCategory: {
            type: categoryType,
            description: 'Add animal category like Fish, Mammal, etc.',
            args: {
                categoryName: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve: async (parent, args,{req, res, checkAuth}) => {
                try {
                    checkAuth(req, res);
                    const newCategory = new category(args);
                    return await newCategory.save();
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },
        addSpecies: {
            type: speciesType,
            description: 'Add animal species like Cat, Dog, etc. and category id',
            args: {
                speciesName: {type: new GraphQLNonNull(GraphQLString)},
                category: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: async (parent, args,{req, res, checkAuth}) => {
                try {
                    checkAuth(req, res);
                    const newSpecies = new species(args);
                    return await newSpecies.save();
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },
        addAnimal: {
            type: animalType,
            description: 'Add animal name like Frank, John, etc. and species id',
            args: {
                animalName: {type: new GraphQLNonNull(GraphQLString)},
                species: {type: new GraphQLNonNull(GraphQLID)},
            },
            resolve: async (parent, args, {req, res, checkAuth}) => {
                try {
                    checkAuth(req, res);
                    const newAnimal = new animal(args);
                    return await newAnimal.save();
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        },
        modifyAnimal: {
            type: animalType,
            description: 'Modify animal name and species',
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                animalName: {type: GraphQLString},
                species: {type: GraphQLID},
            },
            resolve: async (parent, args, {req, res, checkAuth}) => {
                try {
                    checkAuth(req, res);
                    return await animal.findByIdAndUpdate(args.id, args, {new:true});
                }
                catch (e) {
                    return new Error(e.message);
                }
            },
        }
    },
});
*/


module.exports = new GraphQLSchema({
    query: RootQuery,
   // mutation: Mutation,
});
