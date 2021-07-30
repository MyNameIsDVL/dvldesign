class StateStopWatch {

    start: number;
    difference: number;
    suspended: number;

    constructor(start, difference, suspended) {
        this.start = start;
        this.difference = difference;
        this.suspended = suspended;
    }

    static ready() {
        return new StateStopWatch(null, 0, 0);
    }
}

export class StopWatch {

    state;
    requestAnimationId: number;

    constructor(state) {
        this.state = state;
        this.requestAnimationId = null;
        this.handleClickStart = this.handleClickStart.bind(this);
        document.getElementById("start").addEventListener("click", this.handleClickStart);

        this.handleClickStop = this.handleClickStop.bind(this);
        document.getElementById("stop").addEventListener("click", this.handleClickStop);

        this.handleClickReset = this.handleClickReset.bind(this);
        document.getElementById("reset").addEventListener("click", this.handleClickReset);

        this.tick = this.tick.bind(this);
    }

    static ready() {
        return new StopWatch(StateStopWatch.ready());
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    tick() {
        this.setState({
            difference: new Date(new Date().getTime() - this.state.start)
        })
        this.requestAnimationId = requestAnimationFrame(this.tick);
    }

    handleClickStart() {
        if (this.state.start) {
            return;
        }
        this.setState({
            start: new Date().getTime() - this.state.suspended,
            suspended: 0
        })
        this.requestAnimationId = requestAnimationFrame(this.tick);
    }

    handleClickStop() {
        cancelAnimationFrame(this.requestAnimationId);
        this.setState({
            start: null,
            suspended: this.state.difference
        })
    }

    handleClickReset() {
        cancelAnimationFrame(this.requestAnimationId);
        this.setState(StateStopWatch.ready())
    }

    render() {
        const { difference } = this.state;
        const milisec: string = (difference ? Math.floor(difference.getMilliseconds() / 10) : 0).toString().padStart(2, "0");
        const seconds: string = (difference ? Math.floor(difference.getSeconds()) : 0).toString().padStart(2, "0");
        const minutes: string = (difference ? Math.floor(difference.getMinutes()) : 0).toString().padStart(2, "0");
        const hours: string = (difference ? Math.floor(difference.getHours() - 1) : 0).toString().padStart(2, "0");

        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
        document.getElementById("milisec").textContent = milisec;
    }
}