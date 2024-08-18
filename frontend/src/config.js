
let fieldsToDisplay = [
    {
        "title": "Company Name /issue date", 
        "key": "companyName",
        "subKey": {
            "key": "issueDates",
            "deviderSymbol":"-",
            "details": [
                {
                    "dateFormat":"D MMM",
                    "detailKey" : "start"
                },
                {
                    "dateFormat":"D MMM YY",
                    "detailKey" : "end"
                }
            ]

        }


    },
    {
        "title": "Issue size", 
        "key": "issueSize",
    },
    {
        "title": "Price range", 
        "key": "priceRange",
    },
    {
        "title": "Min Invest/qty",
        "key": "minAmount",
        "subKey": {
            "deviderSymbol":"/",
            "details": [
                {
                    "detailKey": "minInvestQty",
                    "suffix" : "Shares"
                }
            ]

        }
    }
    
]

let apis = {
    "homepage": "http://localhost:3000/api/ipo",
    "detailpage" : "http://localhost:3000/api/ipo/{{ID}}"
}

export { fieldsToDisplay , apis }