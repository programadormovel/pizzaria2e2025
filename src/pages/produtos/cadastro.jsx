import './produtos.css'
// ferramenta de consumo de rotas
import axios from 'axios'
// Hooks do react para controlar renderização e estados
import { useEffect, useState } from 'react';
const CadastroProduto = () => {

    const [produto, setProduto] = useState({})

    const montarJson = () => {
        if(nome.length > 0){
            setProduto({
                "nome": nome,
                "tipo": tipo,
                "preco": preco,
                "descricao": descricao
            })
        } else {
            alert("Preencha os dados!!!")
        }
    }

    useEffect(()=>{

    }, [])

    useEffect(()=>{
        if(produto.length > 0)
            axios.post("http://172.19.0.49/pizzariateste/api/v1/produto")
            .then(response => {
                if(response.data.status == 200)
                    alert('Cadastro realizado com sucesso')
            })
            .catch(error => console.log(error))
    }, [produto])



    return (
        <div className="Produtos">
            <h3>Cadastro de Produtos</h3>

            <input type="text" placeholder='0' id="id" disabled />
            <input type="text" placeholder='nome da pizza' id="nome" />    
            <input type="text" placeholder='descrição' id="descricao" />    
            <input type="text" placeholder='0.00' id="preco" />    
            <input type="text" placeholder='tipo da pizza' id="tipo" />     
            <input type="text" id="categoriaId" disabled value={1} /> 

            <input type="button" id="cadastrar" value="Cadastrar"
                onClick={()=>{montarJson()}} />    
        </div>
    )
}

export default CadastroProduto