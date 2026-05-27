import Image from "next/image";

const trustBadges = [
  "CRP 01/16621",
  "Gestalt-terapia",
  "Atendimento presencial",
  "Atendimento online",
  "Brasil e brasileiros no exterior",
];

const areas = [
  {
    titulo: "Ansiedade",
    texto: "Acolhimento para inquietações, tensão e pensamentos recorrentes.",
  },
  {
    titulo: "Autoestima",
    texto: "Um espaço para rever cobranças e construir uma relação mais honesta consigo.",
  },
  {
    titulo: "Relacionamentos",
    texto: "Escuta para vínculos afetivos, familiares e sociais, com atenção a limites e presença.",
  },
  {
    titulo: "Dependência química",
    texto: "Acompanhamento para sofrimento associado ao uso de substâncias.",
  },
  {
    titulo: "Sofrimento emocional",
    texto: "Cuidado para dor psíquica, perdas, conflitos e cansaço emocional.",
  },
  {
    titulo: "Saúde mental",
    texto: "Atenção à vida emocional, aos recursos de suporte e ao contexto.",
  },
  {
    titulo: "Desenvolvimento pessoal",
    texto: "Ampliação de consciência, escolhas mais próprias e novos caminhos.",
  },
];

const formacao = [
  "Graduação em Psicologia",
  "Especialização em Gestalt-terapia",
  "Formação continuada em psicologia clínica",
  "Estudos voltados ao atendimento de adolescentes e adultos",
];

const experiencia = [
  "Atendimento psicológico clínico individual",
  "Escuta qualificada para brasileiros no Brasil e no exterior",
  "Acompanhamento de adolescentes e adultos em demandas emocionais, relacionais e existenciais",
  "Atuação orientada por ética, sigilo profissional e cuidado singular",
];

const faqs = [
  {
    pergunta: "Como funciona o atendimento online?",
    resposta:
      "As sessões acontecem por videochamada, em ambiente reservado e sigiloso, com o mesmo rigor ético do atendimento presencial.",
  },
  {
    pergunta: "Atende brasileiros no exterior?",
    resposta:
      "Sim. O atendimento acolhe brasileiros fora do país que desejam fazer psicoterapia em português.",
  },
  {
    pergunta: "Como funciona a primeira sessão?",
    resposta:
      "É um primeiro encontro para compreender sua demanda, apresentar a forma de trabalho e avaliar os próximos passos.",
  },
  {
    pergunta: "Atende adolescentes?",
    resposta:
      "Sim. O atendimento considera a etapa de vida e, quando necessário, o diálogo com responsáveis.",
  },
  {
    pergunta: "Como agendar atendimento?",
    resposta:
      "O agendamento pode ser iniciado pelo WhatsApp ou por email. Depois, são alinhados horários e formato.",
  },
  {
    pergunta: "O que é Gestalt-terapia?",
    resposta:
      "É uma abordagem que olha para a pessoa em sua totalidade: corpo, emoções, relações e contexto.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#1d2935]">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fbfcfe_0%,#edf4f9_45%,#ffffff_100%)]">
        <div className="absolute inset-x-0 top-0 z-20 border-b border-[#d6e2ec]/80 bg-white/78 shadow-[0_10px_40px_rgba(18,34,50,0.035)] backdrop-blur-xl">
          <nav
            aria-label="Navegação principal"
            className="mx-auto flex h-22 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
          >
            <a href="#inicio" className="group flex flex-col leading-tight">
              <span className="text-[1.15rem] font-semibold tracking-normal text-[#122232] transition group-hover:text-[#123d66]">
                Eduardo Leal
              </span>
              <span className="mt-0.5 text-sm font-medium tracking-normal text-[#6b7b88] transition group-hover:text-[#315d80]">
                Psicólogo Clínico
              </span>
            </a>
            <div className="hidden items-center gap-8 text-sm font-medium text-[#536270] md:flex">
              <a className="transition hover:text-[#123d66]" href="#quem-sou">
                Quem sou eu
              </a>
              <a className="transition hover:text-[#123d66]" href="#atuacao">
                Atuação
              </a>
              <a className="transition hover:text-[#123d66]" href="#abordagem">
                Gestalt-terapia
              </a>
              <a className="transition hover:text-[#123d66]" href="#faq">
                FAQ
              </a>
              <a
                className="rounded-md border border-[#c9d5df] bg-white/60 px-4 py-2 text-[#123d66] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#123d66] hover:bg-white"
                href="#contato"
              >
                Contato
              </a>
            </div>
          </nav>
        </div>

        <div className="absolute left-0 top-24 h-px w-full bg-[linear-gradient(90deg,transparent,#9fb8cc,transparent)]" />
        <div className="absolute -left-36 top-36 h-96 w-96 rounded-full bg-[#d8e7f2]/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#e9f0f6]/85 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-36 w-full bg-[linear-gradient(180deg,transparent,#ffffff_92%)]" />

        <div
          id="inicio"
          className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-11 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-34"
        >
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-4 sm:mb-9">
              <span className="h-px w-12 bg-[#1f6f9f] sm:w-16" />
              <span className="text-sm font-medium text-[#526575]">Atendimento clínico presencial e online</span>
            </div>

            <h1 className="max-w-3xl text-[2.55rem] font-semibold leading-[1.05] tracking-normal text-[#122232] sm:text-[3.55rem] lg:text-[4.35rem]">
              Eduardo Campos Borges Leal
            </h1>

            <div className="mt-6 space-y-1.5 border-l border-[#9fb8cc] pl-4 sm:mt-7 sm:pl-5">
              <p className="text-base font-semibold text-[#123d66] sm:text-lg">
                Psicólogo Clínico • CRP 01/16621
              </p>
              <p className="text-sm font-medium text-[#5e6e7b] sm:text-base">
                Especialista em Gestalt-terapia
              </p>
            </div>

            <p className="mt-7 max-w-2xl text-lg leading-7 text-[#435260] sm:text-xl sm:leading-8">
              Atendimento psicológico presencial e online para adolescentes e adultos, com escuta ética, presença clínica e cuidado responsável no Brasil e para brasileiros no exterior.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/5561999027212"
                className="inline-flex h-13 items-center justify-center rounded-md bg-[#123d66] px-8 text-sm font-semibold text-white shadow-[0_20px_48px_rgba(18,61,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d3154] hover:shadow-[0_26px_66px_rgba(18,61,102,0.28)]"
              >
                Agendar primeira conversa
              </a>
              <a
                href="#contato"
                className="inline-flex h-13 items-center justify-center rounded-md border border-[#aebfce] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,249,252,0.82))] px-8 text-sm font-semibold text-[#123d66] shadow-[0_14px_38px_rgba(18,34,50,0.075)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[#123d66] hover:bg-white hover:shadow-[0_18px_46px_rgba(18,34,50,0.1)]"
              >
                Entrar em contato
              </a>
            </div>

          </div>

          <div className="mx-auto w-full max-w-[560px] sm:max-w-[620px] lg:mr-0">
            <div className="relative">
              <div className="absolute -left-6 top-12 h-[80%] w-[72%] rounded-md bg-[linear-gradient(180deg,#d6e5f0,#eef4f9)] shadow-[0_34px_90px_rgba(18,34,50,0.1)]" />
              <div className="absolute -right-5 -top-5 h-34 w-34 rounded-full border border-[#a9bdce]/70" />
              <div className="absolute -bottom-6 right-10 h-24 w-44 rounded-md border border-white/80 bg-white/55 shadow-[0_22px_55px_rgba(18,34,50,0.08)] backdrop-blur-md" />
              <div className="relative overflow-hidden rounded-md border border-white bg-white shadow-[0_42px_105px_rgba(18,34,50,0.22)]">
                <Image
                  src="/eduardo-hero.jpeg"
                  alt="Retrato profissional de Eduardo Campos Borges Leal sentado em cadeira"
                  width={1066}
                  height={1600}
                  priority
                  className="aspect-[4/4.75] w-full object-cover object-[50%_68%] transition duration-700 hover:scale-[1.012] sm:aspect-[4/5] lg:object-[50%_64%]"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/60 bg-white/90 px-4 py-3 shadow-[0_24px_70px_rgba(18,34,50,0.16)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:px-5 sm:py-4">
                <p className="text-sm font-semibold text-[#122232]">Atendimento presencial e online</p>
                <p className="mt-1 text-sm leading-6 text-[#586776]">
                  Adolescentes, adultos e brasileiros no exterior.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="rounded-md border border-[#d2dee8] bg-white/70 px-2.5 py-1.5 text-[0.72rem] font-semibold leading-4 text-[#223241] shadow-[0_8px_22px_rgba(18,34,50,0.04)] backdrop-blur transition duration-300 hover:border-[#9db7ca] hover:bg-white sm:px-3 sm:py-2 sm:text-xs"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quem-sou" className="overflow-hidden bg-white px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-11 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <div className="relative">
            <div className="absolute -left-10 top-10 hidden h-[78%] w-24 bg-[#eef4f9] lg:block" />
            <div className="absolute -right-5 -top-5 hidden h-full w-full rounded-md border border-[#c2d2df] lg:block" />
            <div className="relative max-w-[520px] overflow-hidden rounded-md border border-[#dce5ee] bg-[#f6f8fb] shadow-[0_28px_70px_rgba(18,34,50,0.12)]">
              <Image
                src="/eduardo-about.jpeg"
                alt="Eduardo Campos Borges Leal em ambiente clínico"
                width={1066}
                height={1600}
                className="aspect-[4/5] w-full object-cover object-[50%_38%]"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#1f6f9f] uppercase">Quem sou eu</p>
            <p className="mt-4 text-lg font-semibold text-[#123d66]">Eduardo Campos Borges Leal</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-[#122232] sm:text-4xl">
              Escuta ética, presença clínica e cuidado individualizado.
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-[#4c5b68] sm:text-lg sm:leading-8">
              <p>
                Psicólogo clínico, especialista em Gestalt-terapia, com atendimento presencial e online para adolescentes e adultos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-[linear-gradient(180deg,#f4f8fb_0%,#eef4f9_100%)] px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-[#1f6f9f] uppercase">Áreas de atuação</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-[#122232] sm:text-4xl">
                Cuidado clínico para demandas que pedem tempo, escuta e elaboração.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5a6977] sm:text-base sm:leading-7">
              Cada processo respeita o ritmo e a história de quem procura atendimento.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {areas.map((area, index) => (
              <div
                key={area.titulo}
                className="group rounded-md border border-[#d6e0e9] bg-white/88 p-6 shadow-[0_18px_50px_rgba(18,34,50,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#a8bed0] hover:bg-white hover:shadow-[0_28px_70px_rgba(18,34,50,0.1)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#7b8b99] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-[#a8bed0] transition duration-300 group-hover:w-16 group-hover:bg-[#1f6f9f]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-7 text-[#122232] sm:text-2xl">{area.titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5a6977] sm:text-base sm:leading-7">{area.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="abordagem" className="relative overflow-hidden bg-[#101f2e] px-5 py-18 text-white sm:px-8 sm:py-22 lg:px-10 lg:py-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(90,144,184,0.28),transparent_34%),linear-gradient(135deg,#101f2e_0%,#152d42_54%,#0d1a27_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(143,194,230,0.85),transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start lg:gap-14">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#8fc2e6] uppercase">Gestalt-terapia</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              Um trabalho clínico sobre presença, consciência e contato.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-[#c9d9e6] sm:text-lg sm:leading-8">
              Uma abordagem que favorece presença, vínculo e atenção ao modo como a vida se organiza no presente.
            </p>
          </div>
          <div className="rounded-md border border-white/12 bg-white/[0.06] p-6 shadow-[0_36px_100px_rgba(0,0,0,0.24)] backdrop-blur-md sm:p-9">
            <div className="space-y-4 text-base leading-7 text-[#dce7f0] sm:text-lg sm:leading-8">
              <p>
                A Gestalt-terapia considera corpo, emoções, vínculos e contexto.
              </p>
              <p>
                A atenção se volta ao encontro e à forma como cada pessoa se percebe.
              </p>
              <p>
                Com presença, torna-se possível reconhecer padrões e construir novas escolhas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#122232] px-5 py-18 text-white sm:px-8 sm:py-22 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-11 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#8fc2e6] uppercase">Formação acadêmica</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              Base técnica, estudo constante e compromisso ético.
            </h2>
            <div className="mt-8 space-y-3">
              {formacao.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-5 py-3.5 text-base leading-7 text-[#d9e5ef] transition hover:border-[#8fc2e6]/40 hover:bg-white/[0.07] sm:text-lg sm:leading-8"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#8fc2e6] uppercase">Experiência profissional</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl">
              Prática clínica orientada por escuta e responsabilidade.
            </h2>
            <div className="mt-8 space-y-3">
              {experiencia.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-5 py-3.5 text-base leading-7 text-[#d9e5ef] transition hover:border-[#8fc2e6]/40 hover:bg-white/[0.07] sm:text-lg sm:leading-8"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#f8fafc_0%,#edf4f9_100%)] px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#1f6f9f] uppercase">Atendimento online</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-[#122232] sm:text-4xl">
              Atendimento online para o Brasil e brasileiros no exterior.
            </h2>
          </div>
          <div className="rounded-md border border-[#d5e0e9] bg-white/88 p-6 shadow-[0_28px_80px_rgba(18,34,50,0.08)] backdrop-blur sm:p-9">
            <p className="text-base leading-7 text-[#465562] sm:text-lg sm:leading-8">
              Continuidade, privacidade e escuta em português para brasileiros no Brasil e no exterior.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Sigilo profissional", "Horários alinhados", "Escuta em português"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-[#d8e2eb] bg-[#f7f9fc] px-4 py-3 text-sm font-semibold text-[#263644]"
                >
                  {item}
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5561999027212"
              className="mt-7 inline-flex h-13 w-full items-center justify-center rounded-md bg-[#123d66] px-7 text-sm font-semibold text-white shadow-xl shadow-[#123d66]/18 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d3154] sm:w-auto"
            >
              Conversar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#1f6f9f] uppercase">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-[#122232] sm:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="mt-9 divide-y divide-[#d6e0e9] rounded-md border border-[#d6e0e9] bg-[#fbfcfe] shadow-[0_24px_70px_rgba(18,34,50,0.06)] sm:mt-10">
            {faqs.map((faq) => (
              <details key={faq.pergunta} className="group px-5 py-5 sm:px-7 sm:py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-[#122232] transition hover:text-[#123d66] sm:text-xl">
                  {faq.pergunta}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b9cad8] bg-white text-[#123d66] shadow-sm transition duration-300 group-open:rotate-45 group-hover:border-[#123d66]">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#4d5c69] sm:text-lg sm:leading-8">{faq.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#eef4f9] px-5 py-18 sm:px-8 sm:py-22 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#1f6f9f] uppercase">Contato</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal text-[#122232] sm:text-4xl">
              Agende seu atendimento
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#4d5c69] sm:text-lg sm:leading-8">
              Atendimento presencial e online para adolescentes e adultos.
            </p>
          </div>
          <div className="rounded-md border border-[#d1dde7] bg-white p-6 shadow-[0_28px_80px_rgba(18,34,50,0.1)] sm:p-9">
            <p className="text-base leading-7 text-[#455461] sm:text-lg sm:leading-8">
              Eduardo Campos Borges Leal
              <br />
              Psicólogo Clínico | CRP 01/16621
              <br />
              Especialista em Gestalt-terapia
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5561999027212"
                className="inline-flex h-13 items-center justify-center rounded-md bg-[#123d66] px-7 text-sm font-semibold text-white shadow-xl shadow-[#123d66]/18 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d3154]"
              >
                WhatsApp
              </a>
              <a
                href="mailto:edcbleal@gmail.com"
                className="inline-flex h-13 items-center justify-center rounded-md border border-[#c0ccd8] bg-white px-7 text-sm font-semibold text-[#123d66] transition duration-300 hover:-translate-y-0.5 hover:border-[#123d66] hover:bg-[#f7f9fc]"
              >
                edcbleal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#122232] px-5 py-10 text-[#d9e5ef] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>Eduardo Campos Borges Leal | Psicólogo Clínico | CRP 01/16621</p>
          <p>Atendimento psicológico presencial e online para adolescentes e adultos.</p>
        </div>
      </footer>
    </main>
  );
}
