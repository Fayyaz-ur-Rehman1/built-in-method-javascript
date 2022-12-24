var a = {
    name : "fayyaz"

}
var b = Object.getOwnPropertyDescriptor(a,"name")

document.write(b.configurable)