const { MongoClient, ObjectId } = require("mongodb");
//require("dotenv").config();

const cron = require("node-cron")

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



const createclient = async (req, res) => {
    let user
    const { email, username, fullname, password, avatarId } = req.body;

    try {
        user = await MongoClient.connect(MONGO_URI, check);
        const database = user.db("Chillz");
        const clientMongo = database.collection("client");

        const existingemail = await clientMongo.findOne({ email });

        if (existingemail) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const existingUser = await clientMongo.findOne({ username });
        
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        
        const outcome = await clientMongo.insertOne({email,username,fullname,password,avatarId});
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

            const getclient = async (req,res) => {
                let user;
                const {id} = req.params
                try {
                    user = await MongoClient.connect(MONGO_URI, check);
                    const database = user.db("Chillz");
                    const clientMongo = database.collection("client");

                    const getid = await clientMongo.findOne({username: id})
                    if (getid) {
                        res.json(getid)
                        console.log("Client was found!");
                    } else {
                        res.status(404).json({ 
                            message: "Client not found",
                        })
                    }} catch (error) {
                console.error("Error client not found", error);
            } 
                user.close();
            }

            const updateAvatar = async (req, res) => {
                let user;
                const { username, avatarId } = req.body;
            
                try {
                    user = await MongoClient.connect(MONGO_URI, check);
                    const database = user.db("Chillz");
                    const clientMongo = database.collection("client");
            
                    const updatedUser = await clientMongo.findOneAndUpdate(
                        { username },
                        { $set: { avatarId } },
                        { returnDocument: 'after' }
                    );
                    res.json(updatedUser.value);
                } catch (error) {
                    console.error("Error updating avatar:", error);
                    res.status(500).json({ message: 'Internal Server Error' });
                } finally {
                    user.close();
                }
            };


            const deleteSuggestion = async (req, res) => {
                let user;
                const { suggestionId } = req.params;
                try {
                    user = await MongoClient.connect(MONGO_URI, check);
                    const database = user.db("Chillz");
                    const suggestionMongo = database.collection("suggestions");
                    const result = await suggestionMongo.deleteOne({ _id: new ObjectId(suggestionId) });
                    if (result.deletedCount === 1) {
                        res.json({ message: 'Suggestion deleted successfully' });
                        console.log("Suggestion deleted successfully");
                    } else {
                        res.status(404).json({ message: 'Suggestion not found' });
                        console.log("Suggestion not found");
                    }
                } catch (error) {
                    console.error("Error deleting suggestion:", error);
                    res.status(500).json({ message: 'Internal server error' });
                } finally {
                    if (user) {
                        user.close();
                    }
                }
            };

            const deleteChallenge = async (req, res) => {
                let user;
                const { challengeId } = req.params;
                try {
                    user = await MongoClient.connect(MONGO_URI, check);
                    const database = user.db("Chillz");
                    const challengeMongo = database.collection("challenges");
                    const result = await challengeMongo.deleteOne({ _id: new ObjectId(challengeId) });
                    if (result.deletedCount === 1) {
                        res.json({ message: 'Challenge deleted successfully' });
                        console.log("Challenge deleted successfully");
                    } else {
                        res.status(404).json({ message: 'Challenge not found' });
                        console.log("Challenge not found");
                    }
                } catch (error) {
                    console.error("Error deleting Challenge:", error);
                    res.status(500).json({ message: 'Internal server error' });
                } finally {
                    if (user) {
                        user.close();
                    }
                }
            };

            const deleteClient = async (req, res) => {
                let user;
                const { clientusername } = req.params;
            
                try {
                    user = await MongoClient.connect(MONGO_URI, check);
                    const database = user.db("Chillz");
                    const clientMongo = database.collection("client");
                    const result = await clientMongo.deleteOne({ username: clientusername });
            
                    if (result.deletedCount === 1) {
                        res.json({ message: 'Client account has been deleted' });
                        console.log("Client account deleted successfully");
                    } else {
                        res.status(404).json({ message: 'Client account was not found' });
                        console.log("Client cannot be found");
                    }
                } catch (error) {
                    console.error("Error deleting client account, please verify:", error);
                    res.status(500).json({ message: "We've encountered an internal server error" });
                } finally {
                    if (user) {
                        user.close();
                    }
                }
            };

            const fetchRandomChallenge = async () => {
                let user;
                try {
                    user = await MongoClient.connect(MONGO_URI, check);
                    const database = user.db("Chillz");
                    const challengesMongo = database.collection("challenges");
                    const totalChall = await challengesMongo.countDocuments();
                    const randIndex = Math.floor(Math.random() * totalChall);
                    const randomChall = await challengesMongo.findOne({}, { skip: randIndex });
                    return randomChall;
                } catch (error) {
                    console.error("Errorgetting the random challenge", error);
                    throw error;
                } finally {
                    if (user) {
                        user.close();
                    }
                }
            };
            
            
            cron.schedule('0 0 * * *', async () => {
                let user
                try {
                    const challenge = await fetchRandomChallenge();
                    // Handle the fetched challenge, you can store it somewhere or log it
                    user = await MongoClient.connect(MONGO_URI, check);
                    const db = user.db("Chillz");
                    const dailyMongo = db.collection("daily");
                    await dailyMongo.deleteMany({})
                    const addDaily = dailyMongo.insertOne(challenge)
                    console.log(addDaily)
                    console.log("Fetched challenge for today:", challenge);
                } catch (error) {
                    console.error("Error", error);
                }
            });

            const getDailyChallenge = async (req,res) => {
                let user;
                try {
                    user = await MongoClient.connect(MONGO_URI, check);
                    const db = user.db("Chillz");
                    const dailyMongo = db.collection("daily");
                    const dailyChallenge = await dailyMongo.find().toArray();
                    res.json(dailyChallenge)
                } catch (error) {
                    console.error("Error getting todays challenge, contact an admin", error);
                    throw error;
                } finally {
                    if (user) {
                        user.close();
                    }
                }
            };


module.exports = {getAllchallenges, createclient, clientsignin, createchallenge, createSuggestion, getclient, updateAvatar, deleteSuggestion, deleteChallenge, deleteClient,fetchRandomChallenge,getDailyChallenge};
