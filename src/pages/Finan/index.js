import { Link } from 'react-router-dom';
function Finan() {
    return (
        <div>
            <h1> Calculo de Financiamento </h1>
            <Link to='/'>Home</Link><br />
            <Link to='/cliente'>Cadastro Cliente</Link><br />
            <Link to='/conta'>Conta Corrente</Link><br />
            <Link to='/sobre'>Sobre Nós</Link><br />
        </div>
    )
}
export default Finan;