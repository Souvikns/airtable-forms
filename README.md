# airtable-forms
 Makes collecting data from forms super easy

[![DeepScan grade](https://deepscan.io/api/teams/8580/projects/11204/branches/164201/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8580&pid=11204&bid=164201)
[![Build Status](https://travis-ci.org/Souvikns/airtable-forms.svg?branch=master)](https://travis-ci.org/Souvikns/airtable-forms)
[![GitHub license](https://img.shields.io/github/license/Souvikns/airtable-forms?style=plastic)](https://github.com/Souvikns/airtable-forms/blob/master/LICENSE)

---


## To install 

```
npm i airtable-form
```

## Usage 

```
const Airforms = require('airtable-forms')

const forms = new AirForms({
    api_key: process.env.API_KEY,
    base_key: process.env.BASE_KEY,
    base_name: process.env.BASE_NAME
})

forms.listData().then(data=>{
    console.log(data)
})

```


