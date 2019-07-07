function sum(...args:number[]): number {
    return eval( args.join('+') );
}
export default sum;