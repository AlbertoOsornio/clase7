const alumnos = [
    {
        nombre: 'Rafa',
        materias: [
            {
                nombre: "historia",
                cal: 80
            },
            {
                nombre: "matematicas",
                cal: 50
            },
            {
                nombre: "civismo",
                cal: 100  
            }
        ]  
        },
    {
        nombre: "karla",
        materias: [
            {
                nombre: "administracion",
                cal: 100
            },
            {
                nombre: "ventas",
                cal: 50
            },
            {
                nombre: "programacion",
                cal: 90
            }
        ]
    },
    {
        nombre: "morita",
        materias: [
            {
                nombre: "calculo",
                cal: 30
            },
            {
                nombre: "historia",
                cal: 80
            },
            {
                nombre: "administracion",
                cal: 50
            }
        ]
    }
    ]
    
    let contadorAlumnos = 0
    let contadorMaterias = 0
  console.log ("estudiantes no aprobados: ")
  while(contadorAlumnos<alumnos.length){
    console.log("nombre: "  + alumnos[contadorAlumnos].nombre)
       while(contadorMaterias<alumnos[contadorAlumnos].materias.length){
            if(alumnos[contadorAlumnos].materias[contadorMaterias].cal<60){
                console.log("materia: " + alumnos[contadorAlumnos].materias[contadorMaterias].nombre)
            }
        contadorMaterias = contadorMaterias + 1
        }
        contadorMaterias = 0
        contadorAlumnos = contadorAlumnos + 1
        console.log("-------------------------")
    }