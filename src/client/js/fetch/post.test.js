import { postDataToBackend } from './post'
import { apiPOSTResponseDataForTests } from '../../../fixtures/index'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(apiPOSTResponseDataForTests)
  })
)

describe('Testing postDataToBackend()', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  const postURL = 'http://localhost:8085/api/travels'
  const postData = { city: 'London', dates: { fromDate: 'Mon Mar 15 2021', toDate: 'Thu Mar 18 2021' } }
  it('fetches the proper data from the backend', async () => {
    const data = await postDataToBackend(postURL, postData)
    expect(data).toEqual(apiPOSTResponseDataForTests)
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
