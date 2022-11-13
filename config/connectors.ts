
import { MongoClient, ClientMariaDB } 
    from "../dependences.ts";


const mongoClient = new MongoClient();
const URI_MONGO="mongodb://itvoDeveloper:mongoPassword@127.0.0.1:27017/quotes?authMechanism=SCRAM-SHA-256&authSource=admin";


export const connectorMongoDB = await mongoClient.connect(URI_MONGO);

const CONN_MARIADB = {
    hostname: "localhost",
    port: 3306,
    username: "root",
    password: "",
    db: "quotes",
    poolSize: 10
};

export const connectorMariaDB = await new ClientMariaDB().connect(CONN_MARIADB);

