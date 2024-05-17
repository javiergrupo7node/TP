class Result {
    constructor() {
        this.value = undefined;
    }
    save(instance, bool, mess) {
        this.value = bool;
        return instance;
    }
};