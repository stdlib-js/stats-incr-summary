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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrsummary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a statistical summary incrementally.



<section class="usage">

## Usage

```javascript
import incrsummary from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-summary@v0.1.0-deno/mod.js';
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

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import incrsummary from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-summary@v0.1.0-deno/mod.js';

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
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/count`][@stdlib/stats/incr/count]</span><span class="delimiter">: </span><span class="description">compute a count incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/kurtosis`][@stdlib/stats/incr/kurtosis]</span><span class="delimiter">: </span><span class="description">compute a corrected sample excess kurtosis incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/max`][@stdlib/stats/incr/max]</span><span class="delimiter">: </span><span class="description">compute a maximum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/midrange`][@stdlib/stats/incr/midrange]</span><span class="delimiter">: </span><span class="description">compute a mid-range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/min`][@stdlib/stats/incr/min]</span><span class="delimiter">: </span><span class="description">compute a minimum value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/msummary`][@stdlib/stats/incr/msummary]</span><span class="delimiter">: </span><span class="description">compute a moving statistical summary incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/range`][@stdlib/stats/incr/range]</span><span class="delimiter">: </span><span class="description">compute a range incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/skewness`][@stdlib/stats/incr/skewness]</span><span class="delimiter">: </span><span class="description">compute a corrected sample skewness incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/stdev`][@stdlib/stats/incr/stdev]</span><span class="delimiter">: </span><span class="description">compute a corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/sum`][@stdlib/stats/incr/sum]</span><span class="delimiter">: </span><span class="description">compute a sum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/variance`][@stdlib/stats/incr/variance]</span><span class="delimiter">: </span><span class="description">compute an unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[test-image]: https://github.com/stdlib-js/stats-incr-summary/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-incr-summary/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-summary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-summary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-summary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-summary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

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

[@stdlib/stats/incr/count]: https://github.com/stdlib-js/stats-incr-count/tree/deno

[@stdlib/stats/incr/kurtosis]: https://github.com/stdlib-js/stats-incr-kurtosis/tree/deno

[@stdlib/stats/incr/max]: https://github.com/stdlib-js/stats-incr-max/tree/deno

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats-incr-mean/tree/deno

[@stdlib/stats/incr/midrange]: https://github.com/stdlib-js/stats-incr-midrange/tree/deno

[@stdlib/stats/incr/min]: https://github.com/stdlib-js/stats-incr-min/tree/deno

[@stdlib/stats/incr/msummary]: https://github.com/stdlib-js/stats-incr-msummary/tree/deno

[@stdlib/stats/incr/range]: https://github.com/stdlib-js/stats-incr-range/tree/deno

[@stdlib/stats/incr/skewness]: https://github.com/stdlib-js/stats-incr-skewness/tree/deno

[@stdlib/stats/incr/stdev]: https://github.com/stdlib-js/stats-incr-stdev/tree/deno

[@stdlib/stats/incr/sum]: https://github.com/stdlib-js/stats-incr-sum/tree/deno

[@stdlib/stats/incr/variance]: https://github.com/stdlib-js/stats-incr-variance/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
