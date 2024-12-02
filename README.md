## Install

```
npm i befree-utilities
```

## Description

This npm library will be of personal use. However, it can be useful for external developers as well. It will receive new features with time depending on my needs

## Usage
##### Currency manipulation
```js
import { currencyFormatter, stripeCurrencyFormatter } from "befree-utilities";

// Description: Formats a number directly into a localized currency string
// Input example: currencyFormatter(12345.56, "USD");
// Output example: "$1, 234.56"
console.log('Result of currency formatter:', currencyFormatter(12345.56, "USD"));

// Description:  Formats a number given in the smallest currency format unit (e.g., cents) into a localized currency string
// Input example: stripeCurrencyFormatter(1234556, "USD");
// Output example: "$1, 234.56"
console.log('Result of Stripe currency formatter:', stripeCurrencyFormatter(1234556, "USD"));
```

##### Data type manipulation
```js
import { base64toBlob } from "befree-utilities";

// Description: Converts a base64-encoded string into a binary blob and
// optionally creates a File object and a url for the blob
// Input example: const file = base64toBlob(iVBORw0KGgoAAAANSUhEUgAAAAUA...); // (truncated Base64 string for brevity)
// Output example:
// console.log(file);
// {
//   blob: Blob { size: 522, type: "" }, //  Binary blob representation
//   file: File { name: "fiename.jpg", size: 522, type: "image/jpg" }
//   url: "blob:http://example/com/abc123" // Object Url for the blob
// }

const file = base64toBlob("iVBORw0KGgoAAAANSUhEUgAAAAUA..."); // (truncated Base64 string for brevity)
console.log('Result of base64toBlob:', file);
```

##### Date manipulation
```js
import { calculateTimeSincePublished, formatDateWithoutTime } from "befree-utilities";

// Description: Calculates the time elapsed since a given date and returns it as a human-readable string
// Input example: calculateTimeSincePublished("2024-11-28T10:00:00Z");
// Output example: "2 days ago"
console.log(calculateTimeSincePublished("2024-11-28T10:00:00Z"));

// Description: Formats a given date into a human-readable string, showing only the date without the time
// Input example: formatDateWithoutTime("2024-11-28T10:00:00Z");
// Output example: "11/28/2024" // (for en-US locale)
console.log(formatDateWithoutTime("2024-11-28T10:00:00Z"));
```

##### Object manipulation
```js
import { checkEmptyObject } from "befree-utilities";

// Description: Checks if an object is empty (i.e., has no own properties) and returns true if it is empty, otherwise false.
// Input example:
//   checkEmptyObject({}); // Empty object
//   checkEmptyObject({ key: "value" }); // Non-empty object
// Output example:
//   true fo the empty object
//   false for the object with properties
console.log(checkEmptyObject({}));
```

##### String manipulation
```js
import { capitalizeWordsInArray } from "befree-utilities";

// Description: Take an array of words and returns a new array where each word is capitalized
// Input example: capitalizeWordsInArray(["hello", "world", "JAVASCRIPT", ""]);
// Output example: ["Hello", "World", "Javascript"]
console.log(capitalizeWordsInArray(["hello", "world", "JAVASCRIPT", ""]))
```

## Community

The `befree-utilities` community can be found on [GitHub Discussions](https://github.com/kirasiris/befree-utilities/discussions) where you can ask questions and voice ideas.

## beFree Utilities Author

- Kevin Fonseca ([@kirasiris](https://github.com/kirasiris))

## Support Me

Dude, I'm broke. If you find this useful, please don't hesitate to help me maintain it!.

- [PayPal](https://www.paypal.com/paypalme/kirasiris)
- [CashApp](https://cash.app/$kirasiris)
- [Venmo](https://venmo.com/kirasiris)

## Contributing

TO UPDATE

## Hire Me

I'm available to work with you guys. If you need a developer who specializes in MongoDB, Express, ReactJS/NextJS, NodeJS, Php and MySQL, then I'm you're guy!. Reach out to me at `kuaf1998@gmail.com`.

You can also check my portfolio at [my personal blog](https://kevinfonseca.vercel.app/theme).

## Contributors

A list of co-authors that have helped improve this amazing library!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![All Contributors](https://img.shields.io/github/all-contributors/kirasiris/befree-utilities?color=ee8449&style=flat-square)](#contributors)
