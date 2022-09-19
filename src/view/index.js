import { validateLoginInfo, validateregisterInfo } from "../controller/index";
import { chatPage } from "../pages/chatPage";
import { loginPage } from "../pages/loginPage/index";
import { registerPage } from "../pages/registerPage/index";
import { resetPasswordPage } from "../pages/resetPasswordPage/index";
export let setActiveScreen = (screenName) => {
    let app = document.getElementById("app");
    switch (screenName){
        case "loginPage":
          if(app){
            app.innerHTML = loginPage;
          }
          const loginFrom = document.getElementById("from-input");
          if (loginFrom){
            console.log(loginFrom);
            loginFrom.addEventListener("submit", (event)=>{
                event.preventDefault();

                const email = loginFrom.email.value;
                const password = loginFrom.password.value;
                console.log(email, password);
                validateLoginInfo(email,password);
                let dangki = document.getElementById("dk1")
                dangki.onclick = function () {
                  setActiveScreen("registerPage");
                };
          // Controller làm nhiệm vụ validate thông tin
          // Tạo hàm validateLoginInfo nhận vào email và password trong controller
          // Export hàm validateLoginInfo
          // Import hàm validateLoginInfo trong view
          // Trong Screen Login, gọi hàm validateLoginInfo() với email và pass lấy
          // từ form

          // Trong controller, logic của hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // Tạo một hàm setMessage ở view và export sang controller để in ra lỗi
          // từ những trường hợp validate đó

          // giống hệt các bước trên với những màn resetpassword và register


          
            });
          }
            break;
         case "registerPage":
            if (app){
                app.innerHTML = registerPage;
            }
            const registerFrom = document.getElementById("registerFrom");
            console.log(registerFrom.children);
          if (registerFrom){
            // console.log(loginFrom1);
            registerFrom.addEventListener("submit", (event)=>{
                event.preventDefault();
                const firstname = registerFrom.firstname.value;
                console.log(firstname);
                const lastname= registerFrom.lastname.value;
                console.log(lastname);

                const email = registerFrom.email.value;
                const password = registerFrom.password.value;
                const password2 =registerFrom.password2.value;
                console.log(email, password);
                validateregisterInfo(firstname,lastname,email,password,password2);
            });
          };
            break;
            case "resetPasswordPage":
                if (app){
                    app.innerHTML = resetPasswordPage;
                };
                const loginFrom2 = document.getElementById("resetPasswordFrom");
          if (loginFrom2){
            console.log(loginFrom2);
            loginFrom2.addEventListener("submit", (event)=>{
                event.preventDefault();

                const email = loginFrom2.email.value;
                const password = loginFrom2.password.value;
                console.log(email, password);
                validateLoginInfo(email,password);
            });
          };
                break;
                case "chatPage":
                if (app){
                    app.innerHTML = chatPage;
                }
                break;
        default:
            break;
    }
}
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};