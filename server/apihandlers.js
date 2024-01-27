const { MongoClient } = require("mongodb");
//require("dotenv").config();


const  MONGO_URI  = `mongodb+srv://Koryseery:coolkoko23@cluster0.3aiswwj.mongodb.net/?retryWrites=true&w=majority`;
const check = {useUnifiedTopology: true,};




const getAllchallenges = async (res) => {
    let user;
    try {
        user = await MongoClient.connect(MONGO_URI, check);
        const database = user.db("Chillz");
        const challengesMongo = database.collection("challenges");
        
    const challenges = await challengesMongo.find().toArray()
    res.json(challenges)
    console.log("challenges found");
    } 
    catch (error) {
        console.error("Error nothing happened", error);
    }
        user.close();
    };



const createclient = async (req, res) => {
    let user
    const { username, fullname, password, picture } = req.body;

    try {
        user = await MongoClient.connect(MONGO_URI, check);
        const database = user.db("Chillz");
        const clientMongo = database.collection("client");

        const existingUser = await clientMongo.findOne({ username });
        
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        
        const outcome = await clientMongo.insertOne({username,fullname,password,picture,});
            res.json({ message: 'sign up correctly', outcome});
    }
    catch (error) {
        console.error("Error client could not be created!", error);
    }
        user.close();
    };




const clientsignin = async (req, res) => {
    let user
    const { username, password} = req.body;

    try {
        user = await MongoClient.connect(MONGO_URI, check);
        const database = user.db("Chillz");
        const clientMongo = database.collection("client");

        const existingUser = await clientMongo.findOne({ username, password });
        
        if (existingUser) {
            return res.status(200).json({ message: 'Client Signed-in!' });
        }
        else {
            res.status(404).json({message:"Client has not been found!"});
        }}
        catch (error) {
            console.error("Error client could not be created!", error);
        }
            user.close();
    }


    const createSuggestion = async (req, res) => {
        let user;
        const suggestion =  req.body
        try {
            user = await MongoClient.connect(MONGO_URI, check);
            const database = user.db("Chillz");
            const suggestionMongo = database.collection("suggestions");
            
        const suggestions = await suggestionMongo.insertOne(suggestion)

        res.json(suggestions)
        console.log("suggestion added");
        } 
        catch (error) {
            console.error("Error nothing was added", error);
        }
            user.close();
        };


        const createchallenge = async (req, res) => {
            let user;
            const challenge =  req.body
            try {
                user = await MongoClient.connect(MONGO_URI, check);
                const database = user.db("Chillz");
                const challengesMongo = database.collection("challenges");
                
            const challenges = await challengesMongo.insertOne(challenge)
    
            res.json(challenges)
            console.log("challenge added");
            } 
            catch (error) {
                console.error("Error nothing was added", error);
            }
                user.close();
            };

module.exports = {getAllchallenges, createclient, clientsignin, createchallenge, createSuggestion };
