class Validator {
    constructor(val, alerted = false) {
        this.val = val;
        this._result = alerted ? new ResultAlert() : new Result();
    }

    isGreater(length, mess, val = this.val) {
        return this._result.save(this, val > length, mess);
    }

    isLess(length, mess, val = this.val) {
        return this._result.save(this, val < length, mess);
    }

    isEqual(length, mess, val = this.val) {
        return this._result.save(this, val === length, mess);
    }

    isMatch(pattern, mess, val = this.val) {
        return this._result.save(this, pattern.test(val), mess);
    }

    isNotEmpty(mess, val = this.val) {
        return this._result.save(this, val > 0, mess);
    }

    isNotNaN(mess, val = this.val) {
        return this._result.save(this, !isNaN(val), mess);
    }
};