/* 유니온 타입
* 티입 두 개를 합쳐서 새로운 타입을 만든다
* */
let member : (number | string ) = 123;
let members :(number|string)[]= [1,'2',3];
let group :{a:string  | number} = {a: "123"}

/*any type*/
let blah :any;
blah = 123;
blah; [];
//any 는 아무거나 다 됨. 사용을 지양하도록
//요즘은 유연한 변수를 위해서는 unkown 사용함

let age :string|number;
나이 + 1 // 이런거 안됨.


let user :string = "kim";
let ages :undefined|number = undefined;
let married :boolean = false
let 철수 :(string|undefined|number|boolean)[] = [user, ages, married]

let school :{score :(number|boolean)[], teacher :string, friend :string | string[]}= {
    score : [100, 98, 74],
    teacher: "Phil",
    friend: "John"
}


