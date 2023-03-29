let rectangle = {
    length: 1,
    breadth: 1,

    draw : function(){
        console.log('drawing function')
    }

};

function createRectangle(length, width)
{
    let rectangle = {
        length: length,
        breadth: width,
    
        draw : function(){
            console.log(length + ' ' + width)
        }
    
    };
    return rectangle;

}

let obj;

console.log(obj = createRectangle(5,4));