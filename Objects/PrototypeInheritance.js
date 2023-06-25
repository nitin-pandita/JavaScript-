function Enemy(life, level, name) {
    this.life = life;
    this.level = level;
    this.level = name;
}

Enemy.prototype.getInfo = function () {
    console.log(this.life, this.name,this.level);
}
Enemy.prototype.attack = function () {
    console.log(`${this.name} has attacked`);
}
Enemy.prototype.block = function () {
    console.log(`${this.name} has blocked`);
}

function Dragon(life, level, name, color, spell) {
    Enemy.call(this,life, level, name)
    this.color = color;
    this.spell = spell;
}

// inherting from the enemy prototype methods
Dragon.prototype = Object.create(Enemy.prototype);

Dragon.prototype = function() {
    console.log('Fire Blastttt !');
}

const newDragon = new Dragon(100,24,'Dragon','green','fire');