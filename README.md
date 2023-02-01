<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrsummary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a statistical summary incrementally.



<section class="usage">

## Usage

To use in Observable,

```javascript
incrsummary = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-summary@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var incrsummary = require( 'path/to/vendor/umd/stats-incr-summary/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-summary@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.incrsummary;
})();
</script>
```

#### incrsummary()

Returns an accumulator `function` which incrementally computes a statistical summary.

```javascript
var accumulator = incrsummary();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated summary. If not provided an input value `x`, the accumulator function returns the current summary.

```javascript
var accumulator = incrsummary();

var summary = accumulator();
// returns {}

summary = accumulator( 2.0 );
/* returns
    {
        'count': 1,
        'max': 2.0,
        'min': 2.0,
        'range': 0.0,
        'midrange': 2.0,
        'sum': 2.0,
        'mean': 2.0,
        'variance': 0.0,
        'stdev': 0.0,
        'skewness': null,
        'kurtosis': null
    }
*/

summary = accumulator( 1.0 );
/* returns
    {
        'count': 2,
        'max': 2.0,
        'min': 1.0,
        'range': 1.0,
        'midrange': 1.5,
        'sum': 3.0,
        'mean': 1.5,
        'variance': 0.5,
        'stdev': 0.7071067811865476,
        'skewness': null,
        'kurtosis': null
    }
*/

summary = accumulator( -3.0 );
/* returns
    {
        'count': 3,
        'max': 2.0,
        'min': -3.0,
        'range': 5.0,
        'midrange': -0.5,
        'sum': 0.0,
        'mean': 0.0,
        'variance': 7,
        'stdev': ~2.65,
        'skewness': ~-1.46,
        'kurtosis': null
    }
*/

summary = accumulator();
/* returns
    {
        'count': 3,
        'max': 2.0,
        'min': -3.0,
        'range': 5.0,
        'midrange': -0.5,
        'sum': 0.0,
        'mean': 0.0,
        'variance': 7,
        'stdev': ~2.65,
        'skewness': ~-1.46,
        'kurtosis': null
    }
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   For long running accumulations or accumulations of large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-summary@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrsummary();

// For each simulated datum, update the summary...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/count`][@stdlib/stats/incr/count]</span><span class="delimiter">: </span><span class="description">compute a count incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/kurtosis`][@stdlib/stats/incr/kurtosis]</span><span class="delimiter">: </span><span class="description">compute a corrected sample excess kurtosis incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/max`][@stdlib/stats/incr/max]</span><span class="delimiter">: </span><span class="description">compute a maximum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/midrange`][@stdlib/stats/incr/midrange]</span><span class="delimiter">: </span><span class="description">compute a mid-range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/min`][@stdlib/stats/incr/min]</span><span class="delimiter">: </span><span class="description">compute a minimum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/msummary`][@stdlib/stats/incr/msummary]</span><span class="delimiter">: </span><span class="description">compute a moving statistical summary incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/range`][@stdlib/stats/incr/range]</span><span class="delimiter">: </span><span class="description">compute a range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/skewness`][@stdlib/stats/incr/skewness]</span><span class="delimiter">: </span><span class="description">compute a corrected sample skewness incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/stdev`][@stdlib/stats/incr/stdev]</span><span class="delimiter">: </span><span class="description">compute a corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/sum`][@stdlib/stats/incr/sum]</span><span class="delimiter">: </span><span class="description">compute a sum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/variance`][@stdlib/stats/incr/variance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-summary.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-summary

[test-image]: https://github.com/stdlib-js/stats-incr-summary/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-summary/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-summary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-summary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-summary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-summary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-summary/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-summary/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-summary/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-summary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-summary/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/incr/count]: https://github.com/stdlib-js/stats-incr-count/tree/umd

[@stdlib/stats/incr/kurtosis]: https://github.com/stdlib-js/stats-incr-kurtosis/tree/umd

[@stdlib/stats/incr/max]: https://github.com/stdlib-js/stats-incr-max/tree/umd

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats-incr-mean/tree/umd

[@stdlib/stats/incr/midrange]: https://github.com/stdlib-js/stats-incr-midrange/tree/umd

[@stdlib/stats/incr/min]: https://github.com/stdlib-js/stats-incr-min/tree/umd

[@stdlib/stats/incr/msummary]: https://github.com/stdlib-js/stats-incr-msummary/tree/umd

[@stdlib/stats/incr/range]: https://github.com/stdlib-js/stats-incr-range/tree/umd

[@stdlib/stats/incr/skewness]: https://github.com/stdlib-js/stats-incr-skewness/tree/umd

[@stdlib/stats/incr/stdev]: https://github.com/stdlib-js/stats-incr-stdev/tree/umd

[@stdlib/stats/incr/sum]: https://github.com/stdlib-js/stats-incr-sum/tree/umd

[@stdlib/stats/incr/variance]: https://github.com/stdlib-js/stats-incr-variance/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
