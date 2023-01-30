import "./ContactCard.css";

function ContactCard(props) {
  const contacts = [
    {
      id: 1,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/vhpadovan/",
      link_display: "https://www.linkedin.com/in/vhpadovan/",
    },
    {
      id: 2,
      name: "E-mail",
      link: "mailto:vitor.padovan89@gmail.com",
      link_display: "vitor.padovan89@gmail.com",
    },
    {
      id: 3,
      name: "Github",
      link: "https://github.com/vitorpadovan",
      link_display: "https://github.com/vitorpadovan",
    },
    {
      id: 4,
      name: "Whatsapp",
      link: "https://api.whatsapp.com/send?phone=5516996171836",
      link_display: "(16) 9-9617-1836",
    },
    {
      id: 5,
      name: "Portfólio",
      link: "https://vitorpadovan.com.br",
      link_display: "https://vitorpadovan.com.br",
    },
  ];
  return (
    <div className="contact">
      {contacts.map((e, i) => {
        return (
          <div key={e.id} className="contactItem">
            <strong>{e.name}</strong>:{" "}
            <a href={e.link} target="_blank">
              {e.link_display}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ContactCard;
