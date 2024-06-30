enum Direction{
    Up,
    Down,
    Right,
    Left
}
var move=(direction)=>{
    console.log(`Moving ${Direction[direction]}`)
}
move(Direction.Left)