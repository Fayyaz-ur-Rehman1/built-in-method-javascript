function nam(aa){
    this.name = aa
}
nam.prototype.valueOf = function(){
    return this.name
};
var a = new nam("Fayyaz")
document.write(a + "-ur-rehman")
