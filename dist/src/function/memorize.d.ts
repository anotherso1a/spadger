declare type Memorized = (para?: string | number | boolean) => any;
export declare const memorize: (fn: Function) => Memorized;
export {};
