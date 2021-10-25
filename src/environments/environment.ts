// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //ws api, for exchanges
  wsUrl: 'wss://ws.cragsmantech.com/?symbol=BTC-USDT&exchanges=bitfinex%2Ccexio%2Chitbtc%2Chuobi%2Czb%2Cbithumb%2Ccoinbase%2Cbinance%2Cbittrex',
  //api for global volumes
  apiUrl: 'https://api.lunarcrush.com/v2?data=exchanges&key=pjkfanzc7ug8g27kb0pmo&limit=5&order_by=1d_trades'
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
