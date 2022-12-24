function insan(nam){
    this.name = nam
};
var a = new insan("fayyaz");
insan.prototype.toString = function its(){
    return `${this.name}`
}
var b = a.toString()
document.write(b.toString())
document.write(typeof b)