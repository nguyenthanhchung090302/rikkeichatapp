import "../resetPasswordPage/style.css"
import img from "./tải xuống.png"
export let resetPasswordPage = /*html*/ `
<section>
        <div class="img-bg3">
            <img src= ${img} alt="photo">
        </div>
        <div class="noi-dung3">
            <div class="form3">
                <h2>Reset your password</h2>
                <form  id = "ResetPasswordFrom" >
                    
                    <div class="input-form3">
                        <span>Email address</span>
                        <input type="text" name="">
                    </div>
                    <div class="input-form3">
                        <input type="submit" value="Reset password">
                    </div>
                    <div class="input-form3">
                        <input type="submit1" value="Already have an account? login here">
                    </div>
                    
                </form>
            </div>
        </div>
    </section>
`