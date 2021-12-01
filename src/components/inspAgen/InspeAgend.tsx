import { MainContainer , Head, Seletor, MainHeader, NavBar} from "./styles";
import TableForm from "./Table";


export default function InspeAgendComponent() {

    return(
            <MainContainer>
                <MainHeader>
                    <Head>Inspeções Agendadas</Head>
                        <Seletor>
                            <option value="1">diário</option>
                            <option value="2">semanal</option>
                            <option value="3">mensal</option>
                            <option value="4">anual</option>
                        </Seletor>
                </MainHeader>
                <NavBar placeholder='Pesquise'/>
                <TableForm/>
            </MainContainer>
    )
}
