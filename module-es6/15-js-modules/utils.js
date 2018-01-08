function sum(a, b) {
    return a + b;
}

// named export
// ter vários exports dentro de um mesmo arquivo
// só pode chamar com o mesmo nome
// import precisa das chaves
export function sub(a, b){
    return a -b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b){
    return a / b;
}
// Exportando tudo, porém deveria remover os outros exports 
// export * as utils;
const PI = 3.14;
export { mult as multiplicacao, div, PI };

// método principal
// só pode ter um default por arquivo
// importar com qualquer nome
// não precisa utilizar chaves
export default sum;