import { Link } from 'react-router-dom';
function Cadcli() {
    return (
        <div>
            <h1> Cadastro cliente </h1>
            <Link to='/'>Home</Link><br />
            <Link to='/conta'>Conta Corrente</Link><br />
            <Link to='/financiamento'>Calculo de Financiamento</Link><br />
            <Link to='/sobre'>Sobre Nós</Link><br />
        </div>
    )
}
export default Cadcli;