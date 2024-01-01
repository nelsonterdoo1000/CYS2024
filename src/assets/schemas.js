export const genderSchema = {
    genders: ['male', 'female']
}

export const maritalSchema = {
    status: ['married', 'single', 'widow', 'widower', 'divorced', 'other']
}

export const monthShortSchema = {
    months: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
}

export const ageRangesSchema = {
    years: ['1977-1923', '1987-1978', '2003-1988', '2010-2004', '2023-2011']
}

export const programmesSchema = {
    programmes: [
        {
            "id": 1,
            "flyer": "string",
            "description": "string",
            "name": "string",
            "start_datetime": "2023-09-28",
            "end_datetime": "2023-09-29",
            "theme": "string",
            "created_at": "2023-08-17"
        }
    ]
}

export const attendeeSchema = {
    attendees: [
        {
            "id": 1,
            "password": "string",
            "cys_code": "string",
            "surname": "string",
            "other_name": "string",
            "sex": "string",
            "email": "string",
            "phone": "9099",
            "dob": "st",
            "mob": "st",
            "yob": "stri",
            "state": "string",
            "lga_of_residence": "string",
            "town_of_residence": "string",
            "occupation": "string",
            "school": "string",
            "sch_fellowship": "string",
            "church": "string",
            "marital_status": "string",
            "created_at": "2023-08-17T04:15:47.513Z",
            "updated_at": "2023-08-17T04:15:47.513Z",
            "attendee_user": 0
        }
    ]
}