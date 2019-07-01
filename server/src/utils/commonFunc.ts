
export const log = (color: Function, ...args: (String | number)[]) => {
    const str = args.reduce((result: string, item) => {
        return result += item;
    }, '');

    console.log(color(str));
};