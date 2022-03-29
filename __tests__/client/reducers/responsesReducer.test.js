import responsesReducer from '../../../client/redux/reducers/responsesReducer';

describe('responsesReducer testing suite.', () => {
  const result = responsesReducer();
  test('mode property should be string.', () => {
    expect(typeof result.mode === 'string').toBeTruthy();
  })

  test('signUpPost property should be an object with key valid that is a boolean.', () => {
    expect(typeof result.signUpPost === 'object').toBeTruthy();
    expect(typeof result.signUpPost.valid === 'boolean').toBeTruthy();
  })

  test('loginGet property should be an object with key valid that is a boolean.', () => {
    expect(typeof result.loginGet === 'object').toBeTruthy();
    expect(typeof result.loginGet.valid === 'boolean').toBeTruthy();
  })

  test('testMessages property should be an array of objects with appropriate keys and values.', () => {
    expect(result.testMessages instanceof Array).toBeTruthy();
    for (let ind = 0; ind < result.testMessages.length; ind++) {
      expect(typeof result.testMessages[ind].username === 'string').toBeTruthy();
      expect(typeof result.testMessages[ind].sciName === 'string').toBeTruthy();
      expect(typeof result.testMessages[ind].timeStamp === 'string').toBeTruthy();
      expect(typeof result.testMessages[ind].location === 'object').toBeTruthy();
      expect(typeof result.testMessages[ind].location.area === 'string').toBeTruthy();
    }
  })

  test('testSeenBirds property should be an array of objects with appropriate keys and values.', () => {
    expect(result.testSeenBirds instanceof Array).toBeTruthy();
    for (let ind = 0; ind < result.testSeenBirds.length; ind++) {
      expect(typeof result.testSeenBirds[ind].sciName === 'string').toBeTruthy();
      expect(typeof result.testSeenBirds[ind].timeStamp === 'string').toBeTruthy();
    }
  })

  test('testLocalBirds property should be an array of objects with appropriate keys and values.', () => {
    expect(result.testLocalBirds instanceof Array).toBeTruthy();
    for (let ind = 0; ind < result.testLocalBirds.length; ind++) {
      expect(typeof result.testLocalBirds[ind].sciName === 'string').toBeTruthy();
    }
  })
})