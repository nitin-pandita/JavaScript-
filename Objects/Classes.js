class Enemy{
    constructor(life, name,level){
        this.life = life;
        this.name = name;
        this.level = level;
    }
    getInfo() {
        console.log(this.life, this.name,this.level);
    }
}

class BossTurtle extends Enemy {
    constructor(life, name,level, attack,dmg) {
        super(life,name,level,attack,dmg);

        this.attack = attack;
        this.dmg = dmg;
    }
}

const bugger = new BossTurtle(100,'BugBoss',21,'Bug Flying',30);
console.log(bugger);


bugger.getInfo();
bugger.BossTurtle();