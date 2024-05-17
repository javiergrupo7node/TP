class Validator {
    constructor(val, alerted = false) {
        this.val = val;
        this._result = alerted ? new ResultAlert() : new Result();
    }

    isGreater(length, mess) {
        return this._result.save(this, this.val.length > length, mess);
    }

    isLess(length, mess) {
        return this._result.save(this, this.val.length < length, mess);
    }

    isEqual(length, mess) {
        return this._result.save(this, this.val.length === length, mess);
    }

    isMatch(pattern, mess) {
        return this._result.save(this, pattern.test(this.val), mess)
    }

    isNotEmpty(mess) {
        return this._result.save(this, this.val.length > 0, mess)
    }
};