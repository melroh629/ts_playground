/*ts function*/

function myFunc(x :number) :number{
    return x * 2
}
// void : 함수에서 return이 없는 경우

function myFunc2(x? :number) :void{
    1 + 1
}
myFunc2()
//실수로 뭔가 return 하는걸 사전에 막을수 있음
/*
* 중요
변수? :number 는
변수 :number | undefined 와 같음
* */

function greeting(name? :string){
    if(name){
        console.log(`Hello ${name}`)
    } else {
        console.log("Hello")
    }
}
greeting("kim")

function count(x :number | string) :number{
   return x.toString().length
}
count(123);

function marriage(salary :number, house :boolean, score: string) :string|void {
    let total :number = 0;
    total += salary
    if(house === true){
        total += 500
    }
    if(score === "상"){
        total += 100
    }
    if(total >= 600){
        return "결혼가능"
    }
}

/*Narrowing*/
//어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작 가능
function 내함수(x :number|string){
    if(typeof x === "number"){
        return x + 1
    } else {
        return x + "1"
    }
}