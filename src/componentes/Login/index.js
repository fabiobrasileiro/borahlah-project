import CampoTexto from '../CampoTexto'
import './Button.css'
import './Login.css'

function Login(){
    return(
        <section className='login'>
            <header >
                <img src='./img/borahlah-logo.png' alt ='imagem de pessoas comendo'></img>
            </header>

    
            <form>
                <h1>Bem vindo!</h1>
                <CampoTexto obrigatorio={true} label = 'Email' placeholder ='Digite seu e-mail' />
                <CampoTexto obrigatorio={true} label = 'Senha' placeholder ='Digite sua senha' />
            </form>

            <div className='options'>
                <button><a>Entrar</a></button>
                <a>Esqueceu a senha?</a>
            </div>

            <div className='conta'>
                <a><span> Ainda não possui uma conta?</span></a>
                <a>Crie sua conta agora.</a>
            </div>
        </section>
        
    )
}

export default Login