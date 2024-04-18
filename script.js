document.addEventListener("DOMContentLoaded", function () {
  let user = JSON.parse(localStorage.getItem("user"));
  let userActions = document.getElementById("user-actions");

  if (user) {
    userActions.innerHTML = `
                <span>Xin chào, ${user.username}!</span>
                <a href="#" class="text-decoration-none p-3" onclick="logout()">Đăng xuất</a>
            `;
  } else {
    userActions.innerHTML = `
                <a href="/login.html" class="text-decoration-none">Đăng nhập</a>
                <a href="/register.html" class="text-decoration-none">Đăng Ký</a>
            `;
  }
});

function logout() {
  localStorage.removeItem("user");
  location.reload();
}
