///<reference types='cypress' />
import { RegisterPage } from "../../pages/registerPage";
import registerData from "../../fixtures/registerData.json";



describe('test automation', ()=>{

    const registerPage = new RegisterPage();

    it('registration', ()=>{
        registerPage.openURL();
    })
})