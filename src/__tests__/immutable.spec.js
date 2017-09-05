import expect from 'expect'
import * as expectedActionTypes from '../actionTypes'
import expectedPropTypes, {
  fieldPropTypes as expectedFieldPropTypes
} from '../propTypes'
import {
  actionTypes,
  arrayInsert,
  arrayMove,
  arrayPop,
  arrayPush,
  arrayRemove,
  arrayRemoveAll,
  arrayShift,
  arraySplice,
  arraySwap,
  arrayUnshift,
  autofill,
  blur,
  change,
  clearSubmitErrors,
  defaultShouldAsyncValidate,
  defaultShouldValidate,
  destroy,
  Field,
  Fields,
  FieldArray,
  Form,
  FormSection,
  focus,
  formValueSelector,
  getFormValues,
  getFormInitialValues,
  getFormSyncErrors,
  getFormMeta,
  getFormAsyncErrors,
  getFormSyncWarnings,
  getFormSubmitErrors,
  initialize,
  isDirty,
  isInvalid,
  isPristine,
  isValid,
  isSubmitting,
  hasSubmitSucceeded,
  hasSubmitFailed,
  fieldPropTypes,
  propTypes,
  formPropTypes,
  reducer,
  reduxForm,
  registerField,
  reset,
  setSubmitFailed,
  setSubmitSucceeded,
  startAsyncValidation,
  startSubmit,
  stopAsyncValidation,
  stopSubmit,
  submit,
  SubmissionError,
  touch,
  unregisterField,
  untouch,
  values
} from '../immutable'

describe('immutable', () => {
  it('should export actionTypes', () => {
    expect(actionTypes).toEqual(expectedActionTypes)
  })
  it('should export arrayInsert', () => {
    expect(arrayInsert).toExist()
    expect(arrayInsert).toBeA('function')
  })
  it('should export arrayMove', () => {
    expect(arrayMove).toExist()
    expect(arrayMove).toBeA('function')
  })
  it('should export arrayPop', () => {
    expect(arrayPop).toExist()
    expect(arrayPop).toBeA('function')
  })
  it('should export arrayPush', () => {
    expect(arrayPush).toExist()
    expect(arrayPush).toBeA('function')
  })
  it('should export arrayRemove', () => {
    expect(arrayRemove).toExist()
    expect(arrayRemove).toBeA('function')
  })
  it('should export arrayRemoveAll', () => {
    expect(arrayRemoveAll).toExist()
    expect(arrayRemoveAll).toBeA('function')
  })
  it('should export arrayShift', () => {
    expect(arrayShift).toExist()
    expect(arrayShift).toBeA('function')
  })
  it('should export arraySplice', () => {
    expect(arraySplice).toExist()
    expect(arraySplice).toBeA('function')
  })
  it('should export arraySwap', () => {
    expect(arraySwap).toExist()
    expect(arraySwap).toBeA('function')
  })
  it('should export arrayUnshift', () => {
    expect(arrayUnshift).toExist()
    expect(arrayUnshift).toBeA('function')
  })
  it('should export autofill', () => {
    expect(autofill).toExist()
    expect(autofill).toBeA('function')
  })
  it('should export blur', () => {
    expect(blur).toExist()
    expect(blur).toBeA('function')
  })
  it('should export change', () => {
    expect(change).toExist()
    expect(change).toBeA('function')
  })
  it('should export clearSubmitErrors', () => {
    expect(clearSubmitErrors).toExist()
    expect(clearSubmitErrors).toBeA('function')
  })
  it('should export defaultShouldAsyncValidate', () => {
    expect(defaultShouldAsyncValidate).toExist()
    expect(defaultShouldAsyncValidate).toBeA('function')
  })
  it('should export defaultShouldValidate', () => {
    expect(defaultShouldValidate).toExist()
    expect(defaultShouldValidate).toBeA('function')
  })
  it('should export destroy', () => {
    expect(destroy).toExist()
    expect(destroy).toBeA('function')
  })
  it('should export Field', () => {
    expect(Field).toExist()
    expect(Field).toBeA('function')
  })
  it('should export Fields', () => {
    expect(Fields).toExist()
    expect(Fields).toBeA('function')
  })
  it('should export FieldArray', () => {
    expect(FieldArray).toExist()
    expect(FieldArray).toBeA('function')
  })
  it('should export Form', () => {
    expect(Form).toExist()
    expect(Form).toBeA('function')
  })
  it('should export FormSection', () => {
    expect(FormSection).toExist()
    expect(FormSection).toBeA('function')
  })
  it('should export focus', () => {
    expect(focus).toExist()
    expect(focus).toBeA('function')
  })
  it('should export formValueSelector', () => {
    expect(formValueSelector).toExist()
    expect(formValueSelector).toBeA('function')
  })
  it('should export getFormValues', () => {
    expect(getFormValues).toExist()
    expect(getFormValues).toBeA('function')
  })
  it('should export getFormInitialValues', () => {
    expect(getFormInitialValues).toExist()
    expect(getFormInitialValues).toBeA('function')
  })
  it('should export getFormSyncErrors', () => {
    expect(getFormSyncErrors).toExist()
    expect(getFormSyncErrors).toBeA('function')
  })
  it('should export getFormMeta', () => {
    expect(getFormMeta).toExist()
    expect(getFormMeta).toBeA('function')
  })
  it('should export getFormAsyncErrors', () => {
    expect(getFormAsyncErrors).toExist()
    expect(getFormAsyncErrors).toBeA('function')
  })
  it('should export getFormSyncWarnings', () => {
    expect(getFormSyncWarnings).toExist()
    expect(getFormSyncWarnings).toBeA('function')
  })
  it('should export getFormSubmitErrors', () => {
    expect(getFormSubmitErrors).toExist()
    expect(getFormSubmitErrors).toBeA('function')
  })
  it('should export initialize', () => {
    expect(initialize).toExist()
    expect(initialize).toBeA('function')
  })
  it('should export isDirty', () => {
    expect(isDirty).toExist()
    expect(isDirty).toBeA('function')
  })
  it('should export isInvalid', () => {
    expect(isInvalid).toExist()
    expect(isInvalid).toBeA('function')
  })
  it('should export isPristine', () => {
    expect(isPristine).toExist()
    expect(isPristine).toBeA('function')
  })
  it('should export isValid', () => {
    expect(isValid).toExist()
    expect(isValid).toBeA('function')
  })
  it('should export isSubmitting', () => {
    expect(isSubmitting).toExist()
    expect(isSubmitting).toBeA('function')
  })
  it('should export hasSubmitSucceeded', () => {
    expect(hasSubmitSucceeded).toExist()
    expect(hasSubmitSucceeded).toBeA('function')
  })
  it('should export hasSubmitFailed', () => {
    expect(hasSubmitFailed).toExist()
    expect(hasSubmitFailed).toBeA('function')
  })
  it('should export fieldPropTypes', () => {
    expect(fieldPropTypes).toEqual(expectedFieldPropTypes)
  })
  it('should export propTypes', () => {
    expect(propTypes).toEqual(expectedPropTypes)
  })
  it('should export formPropTypes', () => {
    expect(formPropTypes).toEqual(expectedPropTypes)
  })
  it('should export reducer', () => {
    expect(reducer).toExist()
    expect(reducer).toBeA('function')
  })
  it('should export reduxForm', () => {
    expect(reduxForm).toExist()
    expect(reduxForm).toBeA('function')
  })
  it('should export registerField', () => {
    expect(registerField).toExist()
    expect(registerField).toBeA('function')
  })
  it('should export reset', () => {
    expect(reset).toExist()
    expect(reset).toBeA('function')
  })
  it('should export startAsyncValidation', () => {
    expect(startAsyncValidation).toExist()
    expect(startAsyncValidation).toBeA('function')
  })
  it('should export startSubmit', () => {
    expect(startSubmit).toExist()
    expect(startSubmit).toBeA('function')
  })
  it('should export setSubmitFailed', () => {
    expect(setSubmitFailed).toExist()
    expect(setSubmitFailed).toBeA('function')
  })
  it('should export setSubmitSucceeded', () => {
    expect(setSubmitSucceeded).toExist()
    expect(setSubmitSucceeded).toBeA('function')
  })
  it('should export stopAsyncValidation', () => {
    expect(stopAsyncValidation).toExist()
    expect(stopAsyncValidation).toBeA('function')
  })
  it('should export stopSubmit', () => {
    expect(stopSubmit).toExist()
    expect(stopSubmit).toBeA('function')
  })
  it('should export submit', () => {
    expect(submit).toExist()
    expect(submit).toBeA('function')
  })
  it('should export SubmissionError', () => {
    expect(SubmissionError).toExist()
    expect(SubmissionError).toBeA('function')
  })
  it('should export touch', () => {
    expect(touch).toExist()
    expect(touch).toBeA('function')
  })
  it('should export unregisterField', () => {
    expect(unregisterField).toExist()
    expect(unregisterField).toBeA('function')
  })
  it('should export untouch', () => {
    expect(untouch).toExist()
    expect(untouch).toBeA('function')
  })
  it('should export values', () => {
    expect(values).toExist()
    expect(values).toBeA('function')
  })
})
