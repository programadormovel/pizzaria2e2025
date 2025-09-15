import axios from 'axios'
import { useEffect, useState } from 'react';

const Produtos = () => {
    const [dados,setDados] = useState([]);
    // Consumir os produtos do endpoint (rota)
    const apiUrl = 'http://172.19.0.49/pizzariaoficial/api/v1'
    const api = axios.create({baseURL: apiUrl})
    const pegarProdutos = async () => {
        await api.get("/produto")
        .then((response)=>{
            setDados(response.data);
        }).catch(err => {
            console.error("Erro na requisição:", err.message);
            console.error("Config:", err.config?.url);
        });   
    }
    useEffect (() => {
        pegarProdutos()
    }, []);
    useEffect(()=>{
        alert(JSON.stringify(dados))
    }, [dados])

    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = dados.map(pizza => 
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