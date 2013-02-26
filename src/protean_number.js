
Number.prototype.next = function(){
    return this+1;
};
Number.prototype.odd = function(){
    return (this % 2 == 1);
};
Number.prototype.even = function(){
    return (this % 2 == 0);
};
Number.prototype.times = function(callback){
    for (var i = 0; i < this; i++) {
      callback();
    }
};
Number.prototype.abs = function(){
    return Math.abs(this);
};
Number.prototype.floor = function(){
    return Math.floor(this);
};

Number.prototype.ceil = function(){
    return Math.ceil(this);
};
