import { ArrowLeft, BoxInfo12, BoxInfo34, Info1, Info2, MainBox } from "./styles";

interface informacoesAPInterface { 
    planos: string,
    nomes : string,
    data: string,
    stat:  boolean
}

export default function InformacoesAP(props: informacoesAPInterface){
    return(
        <MainBox>
            <BoxInfo12>
                <Info1>{props.planos}</Info1>
            </BoxInfo12>
            <BoxInfo12>
                <Info2>responsável: {props.nomes}    </Info2>
            </BoxInfo12>
            <BoxInfo34>
            
            {props.stat ? <div>REALIZADO</div> : <><div className='pendente'>PENDENTE</div> <ArrowLeft/> <div>REALIZADO</div></>}
            
 
            </BoxInfo34>
            <BoxInfo34>
                <span>
                    {props.data}
                </span>
            </BoxInfo34>
            
        </MainBox>
    );    
}

//   <div className='pendente'>PEDENTE</div> <ArrowLeft/> <div>REALIZADO</div>              