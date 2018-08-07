
//PRIVATE

class Target {
    constructor(name, hp){
        this.name = name;
        this.hp = hp;
        this.hits = 0;
        this.attacks = {
            slap: 1,
            punch: 5,
            kick: 10
        }
    }
    
    attack(type){
        this.hits ++
        this.hp-= this.attacks[type]
    }
}


let target = new Target('Bob', 100);

//PUBLIC

export class GameService {
    constructor(){
    }
    
    attack(type){
        target.attack(type);
        console.log(target.hp)
        return target.hp;
    }
}