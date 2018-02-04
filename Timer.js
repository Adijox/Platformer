function Timer(duration, action) {

  this.count = 0;
  this.duration = duration;
  this.action = action;
  this.status = true;

  this.restart = function() {
    this.count = 0;
  }


  this.update = function() {
    this.count++;
    this.status = this.count <= this.duration;
    if(this.status) {
      this.action();
    }

  }
}
