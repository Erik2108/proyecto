export class SimpleResultRegistro {
    message: string;
    insertedId: string;

    constructor(message: string, insertedId: string) {
        this.message = message;
        this.insertedId = insertedId;
    }
}
