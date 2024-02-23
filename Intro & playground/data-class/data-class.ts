class DataClass {
        method: string;
        uri: string;
        version: string;
        message: string;
        response: any;
        fulfilled: boolean;
    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = {};
        this.fulfilled = false;
    }
}

console.log(new DataClass('GET', 'http://google.com', 'HTTP/1.1', 'OK'));
