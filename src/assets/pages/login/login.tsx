import styles from './login.module.css';

import backgroundLogin from '../../img/background-login.svg';
import iconGoogle from '../../img/iconGoogle.svg';

const Login = () => {
    return (
        <main className={styles['container-main']}>
            <div className={styles['container-img']} >
                <img className={styles['img']} src={backgroundLogin} alt="Imagem de login" />
            </div>
            <div className={styles['container-login']} >
                <form className={styles['form']} >
                    <div className={styles['container-title']}>
                        <span className={styles['title-span']} >Bem vindo de voltar</span>
                        <h1 className={styles['title-h1']}>Faça login na sua conta</h1>
                    </div>
                    <label className={styles['form-label']} htmlFor='e-mail'>E-mail</label>
                    <input className={styles['form-input']} type="e-mail" id='e-mail'/>
                    <label className={styles['form-label']} htmlFor="senha">Senha</label>
                    <input className={styles['form-input']} type="password" id="senha" />

                    <div className={styles['container-checkbox']} >
                        <label className={styles['label-checkbox']} htmlFor="checkbox">
                            <input name="Lembre de mim" id='checkbox' type="checkbox"/>
                            Lembre de mim
                        </label>
                        <a className={styles['esqueceu-sua-senha']} href="/">Esqueceu sua senha?</a>
                    </div>
                    <div className={styles['container-button']}>
                        <button className={styles['bttn-entrar']}>Entrar</button>
                        <button className={styles['bttn-google']} >
                            <img src={iconGoogle} alt="Login com Google" />
                            Ou faça login com o Google
                        </button>
                    </div>
                </form>

                <span className={styles['span-cadastro']}>Não tem uma conta? <a href="/">Cadastre-se</a></span>

            </div>
        </main>
    )
};

export default Login;