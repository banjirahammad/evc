
let check = document.querySelector('#check');

//UI class
class UI{
    static checkExpretion(exp, text){
        let result;
        switch(exp){
            case '1':{
                result = Validate.emailValidate(text);
                break;
            }
            case '2':{
                result = Validate.phoneNumValidate(text);
                break;
            }
            case '3':{
                result = Validate.postValidate(text);
                break;
            }
        }
        return result;
        
    }

    static showAlert(message, className){
        let div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        let notification = document.querySelector('#notification');
        notification.append(div);
        setTimeout( () => {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    static clearField()
    {
        document.querySelector('#checkText').value = '';
    }

}

//validate class
class Validate{
    static emailValidate(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            return (true);
        }
        return (false);
    }
    static phoneNumValidate(number){
        let exp = /^01(3|4|5|7|8|9)[0-9]{8}$/;
        let exp1 = /^(\+88|88)01(3|4|5|7|8|9)[0-9]{8}$/;
        if (exp.test(number))
        {
            return true;
        }else if(exp1.test(number))
        {
            return true;
        }
        return false;
    }
    static postValidate(post){
        if (/^\d{4}$/.test(post))
        {
            return true;
        }
        return false;
    }
}


// add event listener

check.addEventListener('click', checkExp);



//functions
function checkExp(e){
    e.preventDefault();
    let exp = document.querySelector('#exp').value;
    let checkText = document.querySelector('#checkText').value;
    console.log(exp+checkText);

    if(checkText == ''){
        UI.showAlert('Please Enter a text','danger');
    }else{
        let result = UI.checkExpretion(exp, checkText);
        if(result){
            UI.showAlert('Well Done! Your text match with expression','success');
            // UI.clearField();
        }else{
            UI.showAlert('Invalid! Don`t match your text with expression','danger');
        }
    }
}