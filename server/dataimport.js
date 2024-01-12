const { MongoClient } = require("mongodb");
const {challenges} = require('./data');
//require("dotenv").config();


const  MONGO_URI  = `mongodb+srv://Koryseery:coolkoko23@cluster0.3aiswwj.mongodb.net/?retryWrites=true&w=majority`;
const check = {useUnifiedTopology: true,};

const dataimport = async () => {
    let user;
    try {
        user = await MongoClient.connect(MONGO_URI, check);
        const database = user.db("Chillz");
        const challengesMongo = database.collection("challenges");
        


    await challengesMongo.insertMany(challenges)
    console.log("added challenges");
    } 
    catch (error) {
        console.error("Error nothing happened", error);
    }
        user.close();
    };

dataimport();



