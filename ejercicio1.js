const alumnos = [
    {
        nombre: 'Rafa',
        cal1: 50,
        cal2: 50,
        cal3: 50,
    },
    {
        nombre: "karla",
        cal1: 100,
        cal2: 70,
        cal3: 70,
    },
    {
        nombre: "morita",
        cal1: 50,
        cal2: 90,
        cal3: 100,
    }
]
let contador = 0
let promedio = 0
let alumnosAprobados


while (contador<alumnos.length){
    promedio = (parseFloat(alumnos[contador].cal1) + parseFloat(alumnos[contador].cal2) + parseFloat(alumnos[contador].cal3)) / alumnos.length
    if (promedio<60){
        console.log(alumnos[contador].nombre)
    }
    contador = contador+1
}



