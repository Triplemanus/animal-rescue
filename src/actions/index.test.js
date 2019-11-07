import { isLoading, addSchools, hasErrored, getAllSchools } from './index';

describe ('ACTIONS', () => {
  

  it('should have a type of isLoading', () => {
    let isLoading = true;

    let expectedAction = {
      type: "IS_LOADING",
      isLoading: true
    };

    expect(isLoading(isLoading)).toEqual(expectedAction);

  });

  it('should have a type of HAS_ERRORED', () => {
    let errorMsg = 'These are not the schools you are looking for.';

    let expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg: 'These are not the schools you are looking for.'
    }
      expect(hasErrored(errorMsg)).toEqual(expectedAction);
    
  });
})