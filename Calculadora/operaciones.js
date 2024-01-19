export const suma=(v1, v2) => v1 + v2;

export const resta=(v1, v2) => v1 - v2;

export const multiplicacion=(v1, v2) => v1 * v2;

export const divicion=(v1, v2) => {
    if(v2==0){
        return "Numero no valido"
    } else {
        return v1 / v2;
    }
};
