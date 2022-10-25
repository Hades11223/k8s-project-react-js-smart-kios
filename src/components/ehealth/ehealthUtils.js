export default {
    checkHighlight(result, min, max) {


        try {
            if (result && result.toLowerCase() == "dương tính")
                return true;
            result = parseFloat(result);
            min = parseFloat(min);
            max = parseFloat(max);
            if (result < min || result > max)
                return true;
            return false;
        } catch (error) {
            return false;
        }
    },
    showHighlight(item) {
        if (this.checkHighlight(this.getResult(item), item.lowIndicator, item.highIndicator)) {
            return this.checkHighlight(this.getResult(item), item.lowIndicator, item.highIndicator)
        }
        if (item.normalRange) {
            if (!item.resultState)
                return false;
            else {
                if (item.resultState != "N")
                    return true;
            }
            return false;
        }
    },
    getResult(item) {
        return item.result ? item.result : item.conclusion;
    },
    getRangeMedicalTest(item2) {
        if (item2.normalRange)
            return item2.normalRange;
        var range = "";
        if (item2.lowIndicator && item2.highIndicator)
            range = item2.lowIndicator + " - " + item2.highIndicator;
        else {
            range = item2.lowIndicator;
            if (item2.highIndicator)
                range = item2.highIndicator;
        }
        return range;
    }
}