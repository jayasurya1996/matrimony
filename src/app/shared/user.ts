export interface User {
    userImage: string;
    age: number;
    name: string;
    height: string;
    address: Address;
    occupation: string;
    zodiac: string;
}
export interface Address {
    state: string;
    city: string;
    country: string;
}