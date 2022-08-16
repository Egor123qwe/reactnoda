export const lengthControl = (Maxlen) => {
    return (text) => {
        let result = undefined
        if (!text) result = 'Must be filled';
        if (result === undefined) {
            if (text.length > Maxlen) result = 'Must be less than ' + Maxlen;
        }
        return result;
    }
}