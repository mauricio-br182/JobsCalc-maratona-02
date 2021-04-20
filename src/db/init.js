const Database = require('./config')



const initDb = {

async init(){

const db = await Database()

await db.exec(`CREATE TABLE profile(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly_budget INT,
    hours_per_day INT,
    days_per_week INT,
    vacation_per_year INT,
    value_hour INT
    )`
);

await db.exec(`CREATE TABLE jobs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INT,
    total_hours INT,
    createdAt DATETIME
)`
)

await db.run(`INSERT INTO profile (
    name,
    avatar,
    monthly_budget,
    days_per_week,
    hours_per_day,
    vacation_per_year,
    value_hour

    
    ) VALUES (
    "Mauricio santos",
    "https://avatars.githubusercontent.com/u/77470832?v=4",
    3000,
    5,
    5,
    6,
    70

);` 
)

await db.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    createdAt
) VALUES (
    "Pizaria guloso",
    2,
    1,
    1618754979423
);`
)

await db.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    createdAt

) VALUES (
    "OneTwo Projects",
    3,
    47,
    1618754979423
);`
)

await db.close()

    }
}

initDb.init()