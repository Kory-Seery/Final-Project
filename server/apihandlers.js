const { MongoClient } = require("mongodb");
//require("dotenv").config();


const  MONGO_URI  = `mongodb+srv://Koryseery:coolkoko23@cluster0.3aiswwj.mongodb.net/?retryWrites=true&w=majority`;
const check = {useUnifiedTopology: true,};

const getAllchallenges = async (req, res) => {
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

module.exports = {getAllchallenges};
