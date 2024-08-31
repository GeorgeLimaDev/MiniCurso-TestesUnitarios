export function division(a:number, b:number) {
    if(b === 0) {
        throw Error('Second arguments must not be 0')
    }
    return a/b
}