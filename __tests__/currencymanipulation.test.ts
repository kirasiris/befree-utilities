import { currencyFormatter, stripeCurrencyFormatter } from "../src/currencymanipulation.js";

describe('currencyFormatter', () => {
  test('should format the amount as currency (USD)', () => {
    const result = currencyFormatter(12345.67, 'USD');
    expect(result).toBe('$12,345.67');
  });

  test('should format the amount as currency (EUR)', () => {
    const result = currencyFormatter(12345.67, 'EUR');
    expect(result).toBe('€12,345.67');
  });
});

describe('stripeCurrencyFormatter', () => {
  test('should format the amount in cents as currency (USD)', () => {
    const result = stripeCurrencyFormatter(1234567, 'USD');
    expect(result).toBe('$12,345.67');
  });

  test('should format the amount in cents as currency (EUR)', () => {
    const result = stripeCurrencyFormatter(1234567, 'EUR');
    expect(result).toBe('€12,345.67');
  });
});