"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeCurrencyFormatter = exports.currencyFormatter = void 0;
// Description: Formats a number directly into a localized currency string
// Input example: currencyFormatter(12345.56, "USD");
// Output example: "$1, 234.56"
const currencyFormatter = (amount, currency = "USD") => {
    return ((amount * 100) / 100).toLocaleString(currency, {
        style: "currency",
        currency: currency,
    });
};
exports.currencyFormatter = currencyFormatter;
// Description:  Formats a number given in the smallest currency format unit (e.g., cents) into a localized currency string
// Input example: stripeCurrencyFormatter(1234556, "USD");
// Output example: "$1, 234.56"
const stripeCurrencyFormatter = (amount, currency = "USD") => {
    return (amount / 100).toLocaleString(currency, {
        style: "currency",
        currency: currency,
    });
};
exports.stripeCurrencyFormatter = stripeCurrencyFormatter;