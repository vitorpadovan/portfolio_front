import "./UpdateCard.css";
export default function UpdateCard(props) {
  return (
    <div className="updateCard">
      <h1>Sistema atualizado em: 09/02/2023 - 20:35</h1>
      <a href="https://github.com/vitorpadovan" target="_blank">
        Github
      </a>
      <div className="statusGitHub">
        <img
          height="180em"
          src="https://github-readme-stats.vercel.app/api?username=vitorpadovan&show_icons=true&theme=omni&include_all_commits=true&count_private=true"
        />
        <img
          height="180em"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=vitorpadovan&layout=compact&langs_count=10&theme=omni"
        />
        <img
          height="180em"
          src="https://github-readme-streak-stats.herokuapp.com/?user=vitorpadovan&border=true&theme=omni"
        />
      </div>
    </div>
  );
}
