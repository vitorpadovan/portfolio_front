import "./AboutCard.css";
function AboutCard(props) {
  return (
    <div className="about">
      <p>
        Missionário dos{" "}
        <a href="https://www.jovenssarados.com/" target="_blank">
          Jovens Sarados
        </a>
        , Formado em Ciências da Computação pelo COC, Técnico em Informática
        pelo Senac de Ribeirão Preto e técnico em manutenção de computadores
        pelo Microcamp sempre tive muito interesse na área de TI.
      </p>
      <p>
        Gosto de estudar um pouco de programação no meu tempo livre, e tentar
        sempre fazer além do que vejo em cursos, colocar em prática com ideias
        de projetos que vão além do tema apresentado em cursos, fazendo assim
        com que aprenda mais ainda
      </p>
      <p>
        Tento sempre aplicar minhas ideias no projeto de tal maneira que eu
        possa vender um produto final de qualidade e tiro isso como proveitos
        para estudar e praticar.
      </p>
    </div>
  );
}

export default AboutCard;
