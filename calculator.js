/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {

  _total = 0;
  _memory = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function _load(x) {
    _total = x;
    return _total;
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _getTotal() {
    return _total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function _add(x) {
    _total += x;
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function _subtract() {

  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

  return {
    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract
  };

}