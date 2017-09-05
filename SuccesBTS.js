/**
    First try at doing tree unsing JS
*/
var baum = {
    roots: null,
    insert: function (variable) {
          if ( baum.roots === null ) { baum.roots = new nodeS(variable); console.log('Variable' + variable); return; }
          if ( baum.roots !== null ) { baum.roots.insert(variable); }

    }

};

var nodeS = function (item) {
  this.item = item;
  this.left = null;
  this.right = null;

}

nodeS.prototype.ask = function () {
  console.log(this.item + " ");
}

nodeS.prototype.insert = function (gift) {

//    if ( this.item === gift ) { this.ask(); return;}
    if ( this.item < gift ) {
              if ( this.right ) {  this.right.insert(gift);}
              else {  this.right = new nodeS(gift);
                      //this.right.ask();
              }
              return;
    }
    if ( this.item > gift ) {
              if ( this.left ) {  this.left.insert(gift);}
              else { this.left = new nodeS(gift);
                     //this.left.ask();
              }
              return;
    }
    //console.log(" Item " + this.ask());

}
nodeS.prototype.display = function () {
    if ( this.left) { this.left.display(); }
    console.log(this.item);
    if ( this.right) { this.right.display(); }
}


baum.insert(5);
baum.insert(8);
baum.insert(7);
baum.insert(3);
baum.insert(9);
baum.insert(4);
baum.insert(1);
baum.roots.display();
