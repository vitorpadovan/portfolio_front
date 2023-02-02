import "./ContactCard.css";

function ContactCard(props) {
  const contacts = [
    {
      id: 1,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/vhpadovan/",
      link_display: "https://www.linkedin.com/in/vhpadovan/",
      icon: "linkedin.png",
    },
    {
      id: 2,
      name: "E-mail",
      link: "mailto:vitor.padovan89@gmail.com",
      link_display: "vitor.padovan89@gmail.com",
      icon: "gmail.png",
    },
    {
      id: 3,
      name: "Github",
      link: "https://github.com/vitorpadovan",
      link_display: "https://github.com/vitorpadovan",
      icon: "github.png",
    },
    {
      id: 4,
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=5516996171836",
      link_display: "(16) 9-9617-1836",
      icon: "whatsapp.png",
    },
    {
      id: 5,
      name: "Portfólio",
      link: "https://vitorpadovan.com.br",
      link_display: "https://vitorpadovan.com.br",
      icon: "profile.png",
    },
  ];
  return (
    <div className="contact">
      {contacts.map((e, i) => {
        return (
          <div key={e.id}>
            <div className="contactItem bg-slate-400 rounded-xl">
              <div className="contactIcon">
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/${e.icon}`}
                  //  src="%PUBLIC_URL%/imgs/gmail.png"
                />
              </div>
              <div className="contactName">
                <strong>{e.name}:</strong>
              </div>
              <div className="contactDescription">
                <a href={e.link} target="_blank">
                  {e.link_display}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactCard;
