class Corda{
    constructor(corpoA, pontoB) {
        var options = {
          bodyA: corpoA,
          pointB: pontoB,
          stiffness: 0.1,
          length: 120
        }
        this.corda = Matter.Constraint.create(options);
        World.add(world, this.corda);

       this.pointB = pontoB
      }

      mostrar(){

       if(this.corda.bodyA){
        stroke("turquoise");
        strokeWeight(4);
        line(this.corda.bodyA.position.x, this.corda.bodyA.position.y, this.pointB.x, this.pointB.y);
       }
      
      }

      lancar(){
        this.corda.bodyA = null
      }
    }

