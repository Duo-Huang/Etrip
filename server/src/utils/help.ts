export const log = (color: Function, ...args: (string|number)[]) => {
    const str = args.reduce((prev, item) => {
        return prev += item.toString();
    }, '');
    console.log(color(str));
};