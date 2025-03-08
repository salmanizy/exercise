import { createAnon } from './anon';
import { createFriend } from './friend';
import { createUser } from './createUser';
import User from './user';

const user: User = {
    name: "Taka",
    address: "Jl. Pasir Kaliki no 22",
    gender: "Laki-laki"
};

createAnon(user); //hanya tampil gender dan address
createFriend(user); //hanya tampil nama
createUser(user); //tampil semua index