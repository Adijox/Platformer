function Timer(duration) {

  this.count = 0;
  this.duration = duration;

  this.start = function() {
    this.count = 0;
  }
  this.update = function() {
    this.count++;
    this.status = this.count <= this.duration;

  }
}
