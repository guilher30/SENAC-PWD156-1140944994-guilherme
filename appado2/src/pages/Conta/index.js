import { Link } from 'react-router-dom';
function Conta() {
    return (
        <div>
            <h1> Conta Corrente </h1>
            <Link to='/'>Home</Link><br />
            <Link to='/cliente'>Cadastro Cliente</Link><br />
            <Link to='/financiamento'>Calculo de Financiamento</Link><br />
            <Link to='/sobre'>Sobre Nós</Link><br />

        </div>
    )
}
export default Conta;