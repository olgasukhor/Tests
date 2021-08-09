export const generateId = (length = 10) => {
    let result = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let l = chars.length;
    for ( var i = 0; i < length; i++ ) {
        result += chars.charAt(Math.floor(Math.random() *
            l));
    }
    return result;
}