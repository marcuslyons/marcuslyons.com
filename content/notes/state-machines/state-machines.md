# State Machines

---

> UI is a function of state

> A Redux reducer is a half state-machine

Notes from Adam Wathan's Podcast:
The loading boolean is a fairly common example.

State machines in UI are typically deterministic

Keeping track of the state of your UI using a label of some sort.

Why a string?
Using boolean vs an enumerated value, really reinforces the fact that your component/app can’t be in more than 1 state at a time. Having a state represented as an enumerated value really reinforces this.

Implicit vs explicit with the representation of state.

**What state is it in, and what state can it be in?**

~Can’t be both available and busy~

One single variable that represents the state of the component:
Loading, Idle, Error

What can transition the states? Events
Everything through events.

Instead send the event somewhere instead of the onClick or onSubmit handler changing the state. The event changes the state, not the action.

> Instead of an action trying to determine what it’s supposed to do based on some state. The state is determining what actions are allowed and what actions to run based on the current state and what the users intent was.
>
> - This is the intent of state machines

Event listeners should only be a single line of code, just send an event somewhere. Delegate what the user wants to do. Doesn’t matter what’s going on, we’re submitting an event and something else will handle that.

[Interview with xstate author](http://www.fullstackradio.com/130)
[Disabling a button is not app logic](https://dev.to/davidkpiano/no-disabling-a-button-is-not-app-logic-598i)
[State Charts Academic Article](https://www.inf.ed.ac.uk/teaching/courses/seoc/2005_2006/resources/statecharts.pdf)
[State Machine Concepts - xstate docs](https://xstate.js.org/docs/about/concepts.html#finite-state-machines)
