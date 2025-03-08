import User from './user';

export function createFriend(user: User): void {
    console.log({
        name: user.name
    });
}