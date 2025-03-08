import User from './user';

export function createAnon(user: User): void {
    console.log({
        gender: user.gender,
        address: user.address
    });
}