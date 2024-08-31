export function subtraction(a:number, b:number) {
    if(typeof(a) === 'number' && typeof(b) === 'number') {
        return a-b
    }
    return 'Arguments must be of type numbers'
}