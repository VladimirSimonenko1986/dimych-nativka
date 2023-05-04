

type CityType = {
    title: string
    countryTitle: string
}


type AddressType = {
    street: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechType[]
}


const student: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        street: 'Lenina',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
          {
            id: 2,
            title: 'JS'
        },
          {
            id: 3,
            title: 'CSS'
        },

    ]

}

console.log(student.age)
console.log(student.name)

console.log(student.address.city.title)

console.log(student.technologies[2].id)