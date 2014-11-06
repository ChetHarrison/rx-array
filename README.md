### rx-array

Adds the Map/Reduce functions to the Array prototype so you can play with this style. Once your comfortable with this kind of style in a synchronous collection such as an Array. Then check out [RxJS](https://github.com/Reactive-Extensions/RxJS) to learn how the identical style can be applied to asynchronous collections like event streams.

#### Basic Usage

From the command line in your project directory

`npm install rx-array`

From your JS code

`require('rx-array');`

No need to save the reference as the global Array object prototype now has the additional functions. The following functions are now available from any array. Now it is not nice to shadow native implementations so I will not do that.

* map (native)
* filter (native)
* mergeAll
* flatMap
* reduce (native)
* zip

#### Parse JSON like a champ

Map/Reduce is your friend when you need to pull deeply nested targets out of a large amount of JSON. I highly recomend you spend a little time with [this excellent tutorial](http://reactive-extensions.github.io/learnrx/) from Jafar Husain of Netflix **Note: Do it in Chrome. It doesn't work in Firefox.** 