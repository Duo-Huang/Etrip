
const log = (color, ...args) => {
    const str = args.reduce((result, item) => {
        return result += item;
    }, '');

    console.log(color(str));
}

module.exports = {
    log,
}