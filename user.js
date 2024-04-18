let users = JSON.parse(localStorage.getItem('users')) || [];

function addUser(email, phone, username, password) {
    let user = {
        id: users.length + 1,
        email: email,
        phone: phone,
        username: username,
        password: password
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(user));
}

function login(username, password) {
    let user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    } else {
        return ["Tài khoản hoặc mật khẩu không đúng"];
    }
}

console.log(users)