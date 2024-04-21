
export  interface Exer {
    bodyPart:string,
    equipment:string,
    gifUrl:string,
    id:string,
    instructions:string[],
    name:string,
    secondaryMuscles:string[],
    target:string

}

type UseName ={
    name:string
}

export  type RooParam =  {
    Home:undefined;
    Details:UseName;
};