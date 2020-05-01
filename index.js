/**
 * This is a library that will ease up collecting form data
 * using airtable to store the data. 
 */


/**
 * setup constant fields for apikey 
 * setup constants feilds for base key  
 */

const Airtable = require('airtable')
const {API_KEY,BASE_KEY,BASE_NAME} = require('./config')

class AirForms {
    constructor({ api_key, base_key, base_name }) {
        this.api_key = api_key
        this.base_key = base_key
        this.base_name = base_name

        this.base = new Airtable({ apiKey: this.api_key }).base(this.base_key)

    }

    async listData({ max_record } = { max_record: null }) {

        let data = []

        if (max_record === null) {

            await this.base(this.base_name).select({
                view: "Grid view"
            }).eachPage((records, fetchNextPage) => {

                records.forEach(record => {
                    data.push(record.fields)

                })

                fetchNextPage()
            })

        } else {
            await this.base(this.base_name).select({
                maxRecords: max_record,
                view: "Grid view"
            }).eachPage((records, fetchNextPage) => {

                records.forEach(record => {
                    data.push(record.fields)

                })

                fetchNextPage()
            })
        }

        return data

    }


    async getOneField({id}){
        
        let data = await this.base(this.base_name).find(id)

        return data
    }

    async putData({fieldArray}){
        const data = await this.base(this.base_name).create(fieldArray)

        return data
    }

}


module.exports = AirForms