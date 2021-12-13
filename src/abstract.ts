// abstract class'lardan nesne uretemiyoruz
abstract class Database {
    get() {
        console.log('Database Get');
    }

    add() {
        console.log('Database Add');
    }

    abstract delete(): void;
    abstract update(): void;
}

class Oracle extends Database {
    delete() {
        console.log('Oracle Delete');
    }
    update() {
        console.log('Oracle Update');
    }
}

class MsSql extends Database {
    delete() {
        console.log('MsSql Delete');
    }
    update() {
        console.log('MsSql Update');
    }
}

function addDb(db: Database) {
    db.delete();
}

addDb(new Oracle());
addDb(new MsSql());
