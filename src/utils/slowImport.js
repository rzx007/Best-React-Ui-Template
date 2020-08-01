 function slowImport(value, ms = 1000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    })
}
export default slowImport;