// //=============================================BEFORE
// function loadJson(url){
//     return fetch(url).then((response) => {
//         if(response.status === 200){
//             return response.json();
//         }
//         else{
//             throw new Error(response.status)
//         }
//     });
// }

// loadJson("https://javascript.info/no-such-user.json")
//     .catch(alert);
// //===========================================AFTER

async function loadJson(url){
    let response = await fetch(url);
    if(response.status === 200){
        return response.json();
    }
    else {
        throw new Error(response.status)
    }
}

loadJson("https://javascript.info/no-such-user.json")
    .catch((err) => {console.error(err)});