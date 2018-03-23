export default {
  /**
   * Getter for the element separator.
   *
   * @returns {string} The modifier separator.
   */
  getElementSeparator() {
    return '__';
  },

  /**
   * Getter for the modifier separator.
   *
   * @returns {string} The modifier separator.
   */
  getModifierSeparator() {
    return '--';
  },

  /**
   * Will compute the element CSS class name.
   *
   * @param {string} block   The name of the block.
   * @param {string} element The name of the element.
   *
   * @returns {string} The correct CSS class name.
   */
  has(block, element) {
    return `${block}${this.getElementSeparator()}${element}`;
  },

  /**
   * Will computed the variant CSS class name.
   *
   * @param {string} item    The item. Can be a block or element.
   * @param {string} variant The name of the variant.
   *
   * @returns {string} The correct CSS class name.
   */
  variant(item, variant) {
    return `${item}${this.getModifierSeparator()}${variant}`;
  },

  /**
   * Will convert an array of variants.
   *
   * @param {string} item     The item. Can be a block or element.
   * @param {array}  variants The array of variants.
   *
   * @returns {Array} The correct CSS class names.
   */
  variants(item, variants) {
    return variants
      .map(variant => this.variant(item, variant));
  },

  /**
   * Will get all the correct class names.
   *
   * @param {string} item     The item. Can be a block or element.
   * @param {array}  variants The array of variants.
   *
   * @returns {Array} The correct CSS class names.
   */
  getClassNames(item, variants = []) {
    const classNames = [item];

    return variants.length > 0
      ? classNames.concat(this.variants(item, variants))
      : classNames;
  },

  /**
   * Will get all the correct block class names.
   *
   * @param {string} block    The name of the block.
   * @param {Array}  variants The array of variants.
   *
   * @returns {Array} The correct CSS class names for the block.
   */
  getBlockClassNames(block, variants = []) {
    return this.getClassNames(block, variants);
  },

  /**
   * Will get all the correct element class names.
   *
   * @param {string} block    The name of the block.
   * @param {string} element  The name of the element.
   * @param {Array}  variants The array of variants.
   *
   * @returns {Array} The correct CSS class names for the element.
   */
  getElementClassNames(block, element, variants = []) {
    const elementClassName = this.has(block, element);

    return this.getClassNames(elementClassName, variants);
  },
};
