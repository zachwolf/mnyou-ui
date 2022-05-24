// user
const user = {
    id: 1,
    email: 'hello@zachwolf.com',
    phone: '3202378217',
    validatedEmail: false,
    validatedPhone: false,
    addressStreet: '3516 23rd Ave S',
    addressStreet2: '',
    addressCity: 'Minneapolis',
    addressState: 'MN',
    addressZip: '55407',
}

const order = {
    id: 999,
    date: '',
    status: 'PENDING, PAID, FULFILLED',
    product: []
}

const store = {
    products: []
}

const product = {
    id: 999,
    active: false,
    title: '',
    price: 0,
    options: []
}