import { Link } from 'react-router-dom';
function Sobre() {
    return (
        <div>
            <h1> Sobre Nós </h1>
            <Link to='/'>Home</Link><br />
            <Link to='/cliente'>Cadastro Cliente</Link><br />
            <Link to='/conta'>Conta Corrente</Link><br />
            <Link to='/financiamento'>Calculo de Financiamento</Link><br />
        </div>
    )
}
export default Sobre;