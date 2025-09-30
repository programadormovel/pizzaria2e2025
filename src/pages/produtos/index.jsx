// ferramenta de consumo de rotas
import axios from 'axios'
// Hooks do react para controlar renderização e estados
import { useEffect, useState } from 'react';

const Produtos = () => {
    // Estado para guardar a lista de pizzas
    const [pizzas,setPizzas] = useState(['Calabreza','Muçarela','Baiana']);
    // Consumir as pizzas da rota do backend
    useEffect(()=>{
        axios.get("http://172.19.0.49/pizzariateste/api/v1/produto")
            .then(response => setPizzas(response.data.data))
            .catch(error => console.log(error))
    }, [])

    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza => 
        <li key={pizza.id}>{pizza.nome}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}
        </ul>
    </>
    )
}
export default Produtos