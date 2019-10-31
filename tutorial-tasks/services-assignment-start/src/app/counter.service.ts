export class CounterService {
  inactiveToActive: number = 0;
  activeToInactive: number = 0;

  constructor() { }

  onInactiveToActiveChange() {
    this.inactiveToActive++;
  }

  onActiveToInactiveChange() {
    this.activeToInactive++;
  }
}
