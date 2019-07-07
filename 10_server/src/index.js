/* fetch('/api/user').then(res => {
    return res.json();
}).then(data => {
    console.log(data);
}); */

fetch('/user').then(res => {
    return res.json();
}).then(data => {
    console.log(data);
});