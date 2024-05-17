class ResultAlert extends Result {
    save(instance, bool, mess) {
        if (!bool) {
            alert(mess);
            return new alert("")
        }

        this.value = bool;
        return instance;
    }
}