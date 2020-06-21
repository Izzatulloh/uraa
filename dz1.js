function age(){
    let name= prompt('Isminginzni kiriting')
    let now = +prompt('hozirgi yilni kiriting')
    let old = +prompt ("tug'ilgan yilingiz")
    let age = now - old;
    return name + '  Yoshingiz  '+age;
}
alert(age())

