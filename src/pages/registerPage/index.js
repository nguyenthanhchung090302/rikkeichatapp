import "../registerPage/style.css"
import img from "./tải xuống1.png"
export let registerPage = /*html*/ `
<section>
    <div class="img-bg2">
        <img src=${img} alt="chung">
    </div>
    <div class="noi-dung2">
        <div class="form2">
            

            <h2>Create new account</h2>
            <div id="server-error-message"></div>
            
            <form id = "registerFrom">
                <div class="input-form2">
                    <span>First Name</span>
                    <input type="text" name="firstname">
                    <div id="firstName-error-message"></div>
                </div>
                <div class="input-form2">
                    <span>Last Name</span>
                    <input type="text" name="lastname">
                    <div id="lastName-error-message"></div>
                </div>
                <div class="input-form2">
                    <span>Email address</span>
                    <input type="text" name="email">
                    <div id="email-error-message"></div>
                </div>
                <div class="input-form2">
                    <span>password</span>
                    <input type="password" name="password">
                    <div id="password-error-message"></div>
                </div>
                <div class="input-form2">
                    <span>Confirm password</span>
                    <input type="password" name="password2">
                    <div id="password1-error-message"></div>
                </div>
                <div class="input-form2">
                    <button>Register</button>
                </div>
                <div class="input-form2">
                    <input type="submit1" value="Already have an account? login here">
                </div>
                
            </form>
        </div>
    </div>

    
</section>
`



