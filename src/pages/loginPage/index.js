
import "../loginPage/style.css"
import img from"./tải xuống.png"
export let loginPage = /*html*/ `
<section>
        <div class="img-bg">
            <img src=${img} alt="photo">
        </div>
        <div class="noi-dung">
            <div class="form">
                <h2>Sign in to Rikkei Chat</h2>
                <form id ="from-input">
                    <div class="input-form">
                        <span>Email address</span>
                        <input type="text" name="email">
                        <div id="email-error-message"></div>
                    </div>
                    <div class="input-form">
                        <span>password</span>
                        <input type="password" name="password">
                        <div id="password-error-message"></div>

                    </div>
                    <div class="nho-dang-nhap">
                        <label><input type="checkbox" name=""> Nhớ Đăng Nhập</label>
                    </div>
                    <div class="input-form">
                        <input type="submit" value="login">
                    </div>
                    <div class="input-form">
                        <p>Bạn Chưa Có Tài Khoản? <a href="#" id ="dk1">Đăng Ký</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    `