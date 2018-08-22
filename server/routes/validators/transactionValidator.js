import { check } from 'express-validator/check';
import AbstractValidator from './abstractValidator';

export default class TransactionValidator extends AbstractValidator {
  constructor() {
    super();
  }

  post() {
    return [
      check('amount').isNumeric(),
      check('currency').isAlphanumeric().isLength({ min: 3, max: 4 }),
      check('FromWalletId').isNumeric(),
      check('ToWalletId').isNumeric(),
      check('FromAccountId').isNumeric(),
      check('ToAccountId').isNumeric(),
    ];
  }
}
