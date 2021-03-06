export default class CountdownTimer {
  setUp = (startTime, onCountDown, onZero) => {
    this.startTime = startTime;
    this.onCountDown = onCountDown;
    this.onZero = onZero;
    this.timeLeft = this.startTime;
  }
  pid = undefined;

  setCountdown = startTime => this.startTime = startTime;

  reset = () => {
    this.timeLeft = this.startTime;
    clearInterval(this.pid);
    this.pid = undefined;
  }

  start = () => {
    if (this.pid !== undefined) {
      throw new Error('The countdown is already started.');
    }
    this._intervalCallback();
    this.pid = setInterval(this._intervalCallback, 1000);
  };

  _intervalCallback = () => {
    if (this.timeLeft == 0) {
      clearInterval(this.pid);
      this.pid = undefined;
      this.onZero();
      this.reset();
      return;
    }
    this.onCountDown();
    this.timeLeft--;
  };
}
