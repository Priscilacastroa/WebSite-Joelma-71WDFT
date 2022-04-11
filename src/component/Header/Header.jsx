import "./styles.css";
import joelmaImg from "../../assets/image/logo-joelma-1.png";

function HeaderJoelma() {
  return (
    <header>
      <img src={joelmaImg} alt="joelma" class="jojo" />
      <h1>JOELMA, A MAIOR CANTORA DO BRASIL</h1>
      <h2 id="subtitulo">
        Chega pra cá, meu bem, que eu vou te ensinar, a nossa dança do estado do
        Pará, é o Calypso que chegou para ficar. CALYPSO!
      </h2>
    </header>
  );
}

export default HeaderJoelma;
