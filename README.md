#jQuery-SlotMachine [![Build Status](https://travis-ci.org/josex2r/jQuery-SlotMachine.svg?branch=master)](https://travis-ci.org/josex2r/jQuery-SlotMachine) [![Dependency Status](https://david-dm.org/josex2r/jQuery-SlotMachine.svg)](https://david-dm.org/josex2r/jQuery-SlotMachine) [![devDependency Status](https://david-dm.org/josex2r/jQuery-SlotMachine/dev-status.svg)](https://david-dm.org/josex2r/jQuery-SlotMachine#info=devDependencies)

A simple, lightweight jQuery plugin to make slot machine animation effect.

[Check the example page!] (http://josex2r.github.io/jQuery-SlotMachine/)

## Installation

Include the script *after* the jQuery library:

```html
<script src="/path/to/jquery.slotmachine.js"></script>
```

## Usage

Creating the machine:

```javascript
var machine = $(foo).slotMachine( params );
```

Shuffle:

```javascript
machine.shuffle( repeat, onStopCallback ); //No args to make rotate infinitely
```

Change the selected element:

```javascript
machine.prev(); //Previous element

machine.next(); //Next element
```

Get selected element:

```javascript
machine.active(); //Returns element index inside an object
```

Check if the machine is running:

```javascript
machine.isRunning(); //Returns boolean
```

Change spin result, if the returned value is out of bounds, the element will be randomly choosen:

```javascript
machine.setRandomize(foo); //foo must be a function (should return int) or an int
```

## Params

Params must be an object, optionally containing the next parammeters:

### active

Set the first element

    active: 0
    
### delay

Set spin animation time

    delay: 200
    
### auto

Pass an int as miliseconds to make the machine auto rotate

    repeat: false

### stopHidden

Stop animation if the element is above or below the screen

    stopHidden: true

### randomize

Pass a function to select your own random element. This function must return an integer between 0 (first element) and max number of elements.

    randomize: function(activeElementIndex){} //activeElementIndex = current selected index
    
Example (this machine always shows first element):

```javascript
$('#foo').slotMachine({
	randomize : function(activeElementIndex){
		return 0;
	}
});
```
    
## Authors

[Jose Luis Represa](https://github.com/josex2r)

##License

jQuery-SlotMachine is released under the [MIT License](http://opensource.org/licenses/MIT).