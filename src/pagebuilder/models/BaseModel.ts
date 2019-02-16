export abstract class BaseModel{

    id: number;
    uuid: string;


    createUUID():string{
        function s4() {
            return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}