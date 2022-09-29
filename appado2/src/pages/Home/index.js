import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1> Home </h1>
            <Link to='/cliente'>Cadastro Cliente</Link><br />
            <Link to='/conta'>Conta Corrente</Link><br />
            <Link to='/financiamento'>Calculo de Financiamento</Link><br />
            <Link to='/sobre'>Sobre Nós</Link><br />
        </div>
    )
}
export default Home;