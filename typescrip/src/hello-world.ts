console.log('hello world')
let saludo : string = "hola"
console.log(saludo)

saludo="chao mundo"
console.log(saludo)
console.log(typeof [])

let extincion: number = 76_000_000
let dinosaurioFavorito:string = "t-rex"
//let extintos: boolean = true
let extintos= true
// extintos= 42 typescrip sabe que no es booleno lo que estoy asignado

let cualquiera  //tipo any 
cualquiera = "hola"
cualquiera = 42


function chanchitoFeliz(config : any){
    return config
}

let animales: string[] = ['chanchito','feliz','felipe']
let nums: number[]= [1,2,3]
let checks: boolean[] = []
let nums2: Array<number>=[]

nums.map(x => x.toString())

//tupla variable que contiene datos que se encuentran ordenados 
let tupla: [number,string[]] = [1, animales]
// enun lista de constantes que usaremos en fututo

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragande = 'xl'

//PascalCase primera letra en mayuscula siempre
 enum Talla {
  Chica = 's', Mediana= 'm', Granda= 'l',ExtraGrande='xl'
}

const variable = Talla.ExtraGrande
console.log(variable)

const enum LoadingStage {
    Idle,Loading,Succes,Error
}

const estado =LoadingStage.Succes


const objeto = {
    id:1,
    nombre:''
}

objeto.nombre = 'Hola mundo'

const objeto2 : {
   readonly id: number,
    nombre?: string // ya no es necesario meter la propiedad del nomnbre
    apellido?:string
    talla:Talla
} = {id : 1, nombre : 'Hola mundo', talla : Talla.Mediana}


type Persona ={ 
    id:1,
    nombre:''}

const person : Persona ={
    id:1,
    nombre: ''
}