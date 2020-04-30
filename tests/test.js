require('dotenv').config()

test('fake test',()=>{
    expect(true).toBeTruthy()
})

function check(name){
    return name
}

test('env test',()=>{
    const n = check(process.env.API_KEY)
    expect(n).toEqual(process.env.API_KEY)
})

