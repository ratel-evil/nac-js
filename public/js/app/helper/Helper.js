class Helper {

    static intIsValid(value) {
        if (value === undefined)
            return false;

        if (value === null)
            return false;

        if (value <= 0)
            return false;

        return true;
    }

    static desc(a, b, attr) {
        if (a[`${attr}`] > b[`${attr}`]) {
            return -1;
        }
        if (a[`${attr}`] < b[`${attr}`]) {
            return 1;
        }
        return 0;
    }
    static asc(a, b, attr) {
        if (a[`${attr}`] > b[`${attr}`]) {
            return 1;
        }
        if (a[`${attr}`] < b[`${attr}`]) {
            return -1;
        }
        return 0;
        // a must be equal to b
        return 0;
    }

}