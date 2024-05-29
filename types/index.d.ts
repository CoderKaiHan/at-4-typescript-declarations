declare module 'lodash' {
    function multiply(num1:number, num2:number):number
    

    //function overloading
    function reverse(array:array[]):array[]

    function reverse(array:number[]):number[]

    //generics
    // function reverse<T>(arr:T[]):T[] 

    function dropRight(arr:(string|number)[], dropped: number):(string|number)[]

}