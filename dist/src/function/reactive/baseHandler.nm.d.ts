export declare const isObject: (val: any) => val is Record<any, any>;
export declare const baseHandler: (callback: Function) => {
    get: (target: any, key: string | number | symbol, receiver: any) => any;
    set: (target: any, key: string | symbol, value: any, receiver: any) => boolean;
};
