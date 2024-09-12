// import { CONTACT } from "../constants";

export const Contact = () => {

  const CONTACT = [
    {key: "website", value: "sazonojeda.xyz", url: "#"},
    { key: "address", value: "Boulevar Bosque de Las Naciones, Bosques de Aragon, 57170 Cdad. Nezahualcóyotl, Méx.", url: "https://www.google.com/maps/place/Boulevar+Bosque+de+Las+Naciones,+Bosques+de+Aragon,+57170+Cdad.+Nezahualc%C3%B3yotl,+M%C3%A9x./@19.4638586,-99.05485,19z/data=!3m1!4b1!4m9!1m2!2m1!1sBosques+de+Malasia+%2320+Loc+2.+Esq.+Boulevard+Naciones+Unidas,+Bosques+de+Arag%C3%B3n,+57170+Cdad.+Nezahualc%C3%B3yotl,+M%C3%A9x.!3m5!1s0x85d1fb0b080b621b:0x9f6bfc29105bbafc!8m2!3d19.4638573!4d-99.0536323!16s%2Fg%2F11g8bhb6fk?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D" },
    { key: "email", value: "Correo: contact@restaurant.com" }, // , url: "mailto:contact@restaurant.com" 
    { key: "phone", value: "Telefono: 123-456-7890" },
  ];
  return (
    <section className="container mx-auto py-16" id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl text-white">
        Visitanos o comunicate con nostros
      </h2>
      <div className="text-neutral-400">
        {CONTACT.map((detail) => (
          <p
            key={detail.key}
            className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl text-white"
          >
            {detail.url ? (
              <a href={detail.url} target="_blank" rel="noopener noreferrer" >
                {detail.value}
              </a>
            ) : (
              detail.value
            )}
          </p>
        ))}
      </div>
    </section>
  );
};
