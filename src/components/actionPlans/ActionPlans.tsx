import InformacoesAP from "./Informacoes";
import {ContainerGlobal, Header, Box1, Box1T2, Engrenagem, Pesquisa1, Selecao1, Box2} from "./styles"
import {useClientes} from '../../hooks/clientes'
export default function ActionPlansComponent() {
    const {clientes} = useClientes();

return (
     
        <ContainerGlobal>
          <Header>
            <Box1>
              Planos de Ação
              <Box1T2>atualizações</Box1T2>
            </Box1>
            <Engrenagem/>
          </Header>
          <Pesquisa1/>
          <Selecao1>
            <option value="1">pendente</option>
            <option value="2">realizado</option>
          </Selecao1>
          <Box2>
            
            {clientes.map(item=>{
              return <InformacoesAP planos={item.actPlan} nomes={item.respName} data={item.date} stat={item.status}/>
            })}
          
            
          </Box2>
        </ContainerGlobal>
  
    );
  }
