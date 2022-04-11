import "./style-body.css";
import JoelmaImg from "../../assets/image/joelma2.png";
import JoelmaImg2 from "../../assets/image/joelma2.png";
import JoelmaImg4 from "../../assets/image/joelma4.png";
function Body() {
  return (
    <div className="container">
      <div className="joelma">
        <h2>Quem é Joelma?</h2>
        <div className="joelmaImgs">
          <img className="joelma-img" src={JoelmaImg2} alt="RainhaJoelma2" />
          <img className="joelma-img" src={JoelmaImg4} alt="RainhaJoelma4" />
        </div>
      </div>
      <ul className="info">
        <li>Nome: Joelma da Silva Mendes </li>
        <li>Origem: Almeirim-PA </li>
        <li>Nascimento: 22 de junho de 1974 </li>
        <li>
          Atividades: Cantora, dançarina, coreógrafa, compositora e empresária.
        </li>
      </ul>

      <h2>Agenda de Shows</h2>
      <ul className="agenda">
        <li>14/05/2022 Manaus</li>
        <li>18/06/2022 Salvador</li>
        <li>23/07/2022 Presidente Bernardes</li>
        <li>05/08/2022 Lucas do Rio Verde</li>
        <li>13/08/2022 Rio Piracicaba</li>
      </ul>
    </div>
  );
}

export default Body;
