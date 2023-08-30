function Calculadora (){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaEvento();
        this.capturaEnter();
    };

    this.capturaEnter = () =>{
        document.addEventListener('keyup', e =>{
            if(e.keyCode === 13)
            this.realizaConta();
        });
    };


    this.capturaEvento = () =>{
         document.addEventListener('click', e =>{
            const el = e.target

            if(el.classList.contains('btn-num')) this.addNumDisplay(el)
            if(el.classList.contains('btn-del')) this.delete()
            if(el.classList.contains('btn-clear')) this.clearDisplay()
            if(el.classList.contains('btn-eq')) this.realizaConta();
         });
    };

    this.addNumDisplay = el =>{
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.delete = () =>{
       this.display.value = this.display.value.slice(0, -1);
    };

    this.clearDisplay = () => {
        this.display.value = ''
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta)
            alert('Conta Inválida');

            this.display.value = (conta)
        } catch (error) {
            alert('Conta Inválida');
        }
    };

};

const calculadora = new Calculadora ();
calculadora.inicia();