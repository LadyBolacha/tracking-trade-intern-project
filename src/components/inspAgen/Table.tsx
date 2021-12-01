import { MainTable } from "./styles";

//Eita, Bruno, me contrata aí kk

export default function TableForm(){

    const TableMock = [
        {
          name:'Alice Capeleiro',
          plan:'2',
          real:'1',
          time:'10:41 28/11/21'
        },
        {
          name:'Alice Capeleiro',
          plan:'5',
          real:'2',
          time:'11:17 28/11/21'
        },
        {
          name:'Alice Capeleiro',
          plan:'10',
          real:'9',
          time:'11:18 28/11/21'
        },
        {
          name:'Alice Capeleiro',
          plan:'-',
          real:'-',
          time:'--:-- --/--/--'
        },
        {
            name:'Alice Capeleiro',
            plan:'-',
            real:'-',
            time:'--:-- --/--/--'
        },        
        {
            name:'Alice Capeleiro',
            plan:'-',
            real:'-',
            time:'--:-- --/--/--'
        },        
        {
            name:'Alice Capeleiro',
            plan:'-',
            real:'-',
            time:'--:-- --/--/--'
        },       
        {
            name:'Alice Capeleiro',
            plan:'-',
            real:'-',
            time:'--:-- --/--/--'
        }
    ]

    return(
        <MainTable>
                    <tr>
                        <th style={{width:'60%',textAlign:'left'}}>NOME</th>
                        <th>PLANEJADO</th>
                        <th>REALIZADO</th>
                        <th>ÚLTIMA ATUALIZAÇÃO</th>
                    </tr>
                    
                   {TableMock.map(props=>{
                   return (<tr>
                            <td className='lefted'>{props.name}</td>
                            <td>{props.plan}</td>
                            <td>{props.real}</td>
                            <td>{props.time}</td>
                         </tr>)                    
                    })}
                    
        </MainTable>
    )
}