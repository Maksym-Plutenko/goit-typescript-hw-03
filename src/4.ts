interface IKey {
    //  signature: number
}

class Key implements IKey{
    private signature: number

    constructor() {
        this.signature = Math.random();
    }
}

interface IPerson {
    getKey(): IKey
}

class Person implements IPerson{
    private key: IKey

    constructor(key: IKey){
        this.key = key;
    }

    public getKey(): IKey {
        return this.key;
    }
}

interface IHouse {
    comeIn (person: IPerson): void
    openDoor(key: IKey): void
}

class House implements IHouse {
    protected door: boolean = false
    protected key: IKey
    protected tenants: IPerson[]

    constructor(key: IKey) {
        this.key = key;
    }

    public comeIn (person: IPerson): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    public openDoor(key: IKey): void {}
}

class MyHouse extends House {
    constructor(key: IKey) {
        super(key);
    }

    public openDoor(key: IKey): void {
        if (key === this.key) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};