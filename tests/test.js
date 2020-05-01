require('dotenv').config()
const Airform = require('../index')



test('fake test', () => {
    expect(true).toBeTruthy()
})

function check(name) {
    return name
}

test('env test', () => {
    const n = check(process.env.API_KEY)
    expect(n).toEqual(process.env.API_KEY)
})

test('fetching all data', async () => {
    const form = new Airform({
        api_key: process.env.API_KEY,
        base_key: process.env.BASE_KEY,
        base_name: process.env.BASE_NAME
    })

    let data = await form.listData({ max_record: 3 })

    expect(data).toBeTruthy()

})

test('fetch one field from the id', async () => {
    const form = new Airform({
        api_key: process.env.API_KEY,
        base_key: process.env.BASE_KEY,
        base_name: process.env.BASE_NAME
    })

    let data = await form.getOneField({ id: 'rec6pNkTy7T9WSuXJ' })

    expect(data.id).toEqual('rec6pNkTy7T9WSuXJ')
})


test('creating fields', async () => {
    const form = new Airform({
        api_key: process.env.API_KEY,
        base_key: process.env.BASE_KEY,
        base_name: process.env.BASE_NAME
    })

    let data = await form.putData({fieldArray: [{
        "fields": {
            "Date": "2020-04-24",
            "Rating": "5",
            "Comment": "Verry good"
          }
    }]})

    expect(data).toBeTruthy()
})