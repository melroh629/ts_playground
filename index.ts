let 이름: string = 'kim'
/* array 형 *
let 이름2: string[] = ['kim', 'lee', 'park']

/* object 형 */
let 이름3: { name: string, age?: number } = { name: 'kim' }
// age? : age?속성은 옵션이에염

// type이 가능한것 들: string, number, boolean, null, undefined, bight, [], {} 등

let 성명: string | number = 'kim'
//union type : string 혹은 number 가능 -> 유니온 타입

/* type alias (주로 대문자로 네이밍 함) : type이 너무 길땐 타입을 변수에 담아 쓸수 있음 */
type MyName = string | number
let 성명2: MyName = 'kim'
// 내타입 = string | number

//함수
/*
function 함수이름(매개변수: 타입): 리턴타입 {
    return 리턴값
}
*/
function plus(a: number): number {
    return a * 10
}
//무조건 number 가 파라미터로 들어와야 하고 return값은 무조건 number여야 함 

type MyType = {
    name: string,
    age: number
    //등등 너무 많은 경우에는 아래와 같이 변경 가능
}

type MyType2 = {
    [key: string]: string,
    //글자로 된 모든 object 속성의 타입은 string
}
