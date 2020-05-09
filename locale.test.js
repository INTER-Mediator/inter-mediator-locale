const INTERMediatorLocale = require('./index.js')

test('IMLibFormat.numberFormat(): format string detection', function () {
  'use strict'
  expect(INTERMediatorLocale.mon_decimal_point).toBe('.')
  expect(INTERMediatorLocale.mon_thousands_sep).toBe(',')
  expect(INTERMediatorLocale.currency_symbol).toBe('\uffe5')
})

