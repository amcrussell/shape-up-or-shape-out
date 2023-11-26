


class shape{

    constructor(width, height){

        this.width = width;
        this.height = height;
        this.posX = this.randLocation(this.width) +'px';
        this.posY = this.randLocation(this.height) +'px';
        this.shapeAct = $('<div></div>');
        this.remove()
        this.shapeAct.on('click', ()=> this.describe());

        console.log(this.shapeAct);
    }

    describe(){

        $('#shapeName').children($('span')).text(this.shapeName);
        $('#width').children($('span')).text(this.width);
        $('#height').children($('span')).text(this.height);
        $('#radius').children($('span')).text(this.radius);
        $('#area').children($('span')).text(this.area);
        $('#perimeter').children($('span')).text(this.perimeter);

    }

    draw(){
        this.shapeAct.css({'height': this.height, 'width': this.width});
        this.shapeAct.css({'margin-left': this.posX, 'margin-top': this.posY});
        $('#shapeBoard').append(this.shapeAct);
    }

    remove(){
        this.shapeAct.on('dblclick', () => this.shapeAct.remove());
    }

    randLocation(size){
        let max = 600 - size;
        console.log(max)
        return Math.floor((Math.random()*max));
    }

}

class circle extends shape{

    constructor(width, height, radius){

        super(width, height);
        this.radius = radius;

        this.shapeAct.attr('class', 'circle');
        this.shapeName = 'circle';
        this.area(this.radius);
        this.perimeter(this.radius);
        super.draw()
        
    }

    area(rad){
        let radius = rad.slice(0,-2);
        this.area = (Math.PI * radius * radius);

    }

    perimeter(rad){
        let radius = rad.slice(0,-2);
        this.perimeter = 2 * Math.PI * radius;
    }


}

class rectangle extends shape{

    constructor(width, height){

        super(width, height);

        this.shapeAct.attr('class', 'rectangle');
        this.shapeName = 'rectangle';
        this.radius = 'N/A';
        this.area();
        this.perimeter();
        super.draw();


    }

    area(){
        this.area = this.width * this.height;
    }

    perimeter(){

        this.perimeter = (2 * this.width) + (2 * this.height);

    }



}

class square extends rectangle{

    constructor(sideLength){

        super(sideLength, sideLength);

        this.shapeAct.attr('class', 'square');
        this.shapeName = 'square';
    }

}

class isoscelese extends shape{

    constructor(height){

        super(height, height);

        this.shapeAct.attr('class', 'triangle');
        this.shapeName = 'triangle';
        this.radius = 'N/A';
        this.area();
        this.perimeter();
        this.draw()

    }

    draw(){

        this.shapeAct.css({'border-bottom': `${this.height}px solid yellow`, 'border-right': `${this.height}px solid transparent`});
        this.shapeAct.css({'margin-left': this.posX, 'margin-top': this.posY});
        $('#shapeBoard').append(this.shapeAct);

    }
    
    area(){
        this.area = this.height * this.height /2;
    }

    perimeter(){

        this.perimeter = ((2 * this.width) + (2 * this.height)) /2;

    }

}

$('#circleBtn').on('click', function(event){
    event.preventDefault();
    let rad = $('#inputRadiusCircle').val();
    new circle(rad, rad, (rad + 'px'));

})

$('#rectangleBtn').on('click', function(event){
    event.preventDefault();
    new rectangle($('#wrectangle').val(), $('#hrectangle').val());

})

$('#squareBtn').on('click', function(event){
    event.preventDefault();
    new square($('#sideLengthSquare').val());

})
$('#isoBtn').on('click', function(event){
    event.preventDefault();
    new isoscelese($('#heightIso').val());

})