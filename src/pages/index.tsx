import { BaseTemplate } from "../templates/base-template";
import { Stack, Box, SimpleGrid, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { HeroWithCta } from "../components/hero-with-cta";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { AnimatedCountUp } from "../components/animated-count-up";
import { Statistic } from "../components/statistic/index";
import Image from "next/image";
import { ProjectCard } from "../components/project-card";
import { Quote } from "@bit/limebit.limebit-ui.quote";
import SEO from "../components/seo";
import { Tagline } from "@bit/limebit.limebit-ui.tagline";
import { NextButtonLink } from "@bit/limebit.limebit-ui.next-button-link";
import ConditionallyRender from "../components/conditionally-render";
import { DefaultListItem } from "../components/default-list-item";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";
import styles from "./styles.module.css";
const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Plenarprotokolle des deutschen Bundestages seit 1949"
        description="Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen."
        canonicalRoute="/"
      />
      <Section>
        <HeroWithCta backgroundImageStyles={styles.indexBackgroundImage} />
      </Section>
      <Section display="flex" flexDirection="column">
        <DefaultContainer size="l">
          {/* <DefaultHeadline as="h1" size="s">
            Analyse von Plenarprotokollen für Mensch und Machine
          </DefaultHeadline> */}
          <ColoredSubline as="h2" backgroundColor="pink.500">
            Wie Data Science den Weg zu politischem Diskurs demokratisiert
          </ColoredSubline>
          <DefaultText>
            Open Discourse hat die Plenarprotokolle des deutschen Bundestages
            seit 1949 aufgebrochen und analysierbar gemacht - und zwar für
            Mensch und Maschine. Die Plattform ermöglicht erstmals den Zugang
            und die Recherche in den über 800.000 Redebeiträgen der letzten 70
            Jahre.
          </DefaultText>
          <DefaultText>
            Die Datenbank hinter Open Discourse ist die erste granulare,
            umfassende und maschinenlesbare Aufbereitung jedes jemals
            gesprochenen Wortes in den Parlamentssitzungen des deutschen
            Bundestages. Sie ermöglicht erstmalig gefilterte Recherchen in den
            Reden und Zwischenrufen der Politker_Innen und Fraktionen.
          </DefaultText>
          <DefaultText>
            Für einen offenen Diskurs und eine wissenschaftliche
            Auseinandersetzung mit politischer Sprache.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            spacing="5"
          >
            <Box>
              <AnimatedCountUp
                from={100000}
                to={331197}
                subline="Seiten Text"
                color="black"
              ></AnimatedCountUp>
            </Box>

            <Box>
              <AnimatedCountUp
                from={100000}
                to={896250}
                subline="Redebeiträge"
                color="pink.500"
              ></AnimatedCountUp>
            </Box>
            <Box>
              <AnimatedCountUp
                from={1000000}
                to={2122025}
                subline="Reaktionen & Zwischenrufe"
                color="#FFF78E"
              ></AnimatedCountUp>
            </Box>
          </Stack>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline
            size="s"
            maxWidth={{ base: "100%", lg: "70%", xl: "100%" }}
          >
            An der Schnittstelle zwischen Politikwissenschaft und Data Science
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Open Discourse erleichtert den Zugang zu über 800.000 Reden seit
            1949 und ermöglicht eine strukturierte Stichwortrecherche auf der
            Grundlage von Politiker_Innen, Koalitionen und Positionen.
          </ColoredSubline>
          <DefaultText>
            Mit Methoden der Informatik und Computerlinguistik haben wir alle
            Reden, Zwischenrufe, Anfragen uvm. den jeweiligen Politiker_Innen
            und Fraktionen zugeordnet und durchsuchbar gemacht, sowie zahlreiche
            Metainformationen hinzugefügt.
          </DefaultText>
          <UnorderedList marginLeft={{ base: 10, md: 14, lg: 20, xl: 28 }}>
            <DefaultListItem>
              Wie hat sich der politische Diskurs in den letzten 70 Jahren
              verändert?
            </DefaultListItem>
            <DefaultListItem>
              Wie ist die thematische Nähe von Politiker_Innen zueinander?
            </DefaultListItem>
            <DefaultListItem>
              Wie hoch ist der relative Anteil von Frauen und Männern, die als
              Abgeordnete der verschiedenen Parteien sprechen?
            </DefaultListItem>
          </UnorderedList>
          <DefaultText>
            Bürger_Innen, Journalist_Innen und Wissenschaftler_Innen können
            jetzt den gesamten Datensatz für ihre eigene Forschung herunterladen
            und auf Muster untersuchen.
          </DefaultText>
          <DefaultText>
            Nutzen Sie unsere Volltextsuche, um den politischen Diskurs im
            Bundestag nachzuverfolgen und zu untersuchen oder downloaden Sie den
            Datensatz, um eigene umfassende Analysen der Sprache und Reaktionen
            des Bundestags von 1949 bis heute durchzuführen.
          </DefaultText>
          <NextButtonLink
            colorScheme="pink"
            href="/tools-und-daten"
            marginTop={{
              base: "4",
              md: "4",
              lg: "6",
              xl: "8",
            }}
          >
            Tools und Daten
          </NextButtonLink>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Open Discourse ermöglicht einzigartige Einblicke in die Herzkammer
            der deutschen Politik und holt so den politischen Diskurs ins 21.
            Jahrhundert.
          </Quote>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Welches Potenzial steckt in den Daten?</Tagline>
          <DefaultHeadline size="s">
            Auswertungen und Ergebnisse
          </DefaultHeadline>
          <DefaultText>
            Die Datenbank ermöglicht komplexe Analysen der politischen Sprache
            und erlaubt es, die Reden auf Muster zu untersuchen.
          </DefaultText>
          <DefaultText>
            Hier werden Ihnen bald noch mehr Analysen von uns und von anderen
            Personen zeigen können - wir bitten um noch ewas Gedult.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Stack spacing={{ base: "10", md: "20", lg: "32" }}>
            <ConditionallyRender client>
              <Statistic
                headline="Auswertung"
                subline="Wer kommt zu Wort – Männer oder Frauen?"
                description="Anlässlich des internationalen Frauentages 2020 haben wir untersucht, wie viele Redebeiträge der einzelnen Parteien eigentlich von Frauen kamen."
                descriptionHighlight="Für mehr Transparenz des politischen Diskurses!"
                imagePath="/images/statistics/wer_kommt_zu_wort.png"
                imagePosition="right"
                imageAlt="Statistik"
              />
            </ConditionallyRender>
          </Stack>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Die Zusammenarbeit mit anderen Partner_Innen kann dazu beitragen,
            deutsche Parlamente dauerhaft zu öffnen und politischen Diskurs zu
            demokratisieren.
          </Quote>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">
            Freier Zugang zur Datenbank
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Das Open Discourse Korpus steht Akteur_Innen aus Politik,
            Journalisten_Innen, Wissenschaftler_Innen und Bürger_Innen zur
            freien Verfügung.
          </ColoredSubline>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="10">
            <ProjectCard
              headline="Akademische Forschung"
              subline="Hypothetische Reden"
              description='Der Datensatz wurde von Masterstudent_Innen des 3.Semesters in "Big Data Analytics" für ein Lehrforschungsprojekt verwendet und mittels Generative Adversarial Networks (GAN) werden hypothetische Reden generiert.'
              linkText="Mehr zum Projekt"
              linkHref="/analysen"
              imagePath="/images/logos/akademische_forschung_logo.svg"
              imageAlt="Logo der FOM - Hochschule für Ökonomie und Management"
            />
            <ProjectCard
              headline="CorrelAid"
              subline="Inhaltliche Analysen"
              description="CorrelAid ist ein überparteiliches gemeinnütziges Netzwerk von Data Scientists, die die Welt durch die Arbeit mit Daten  verändern wollen. Ziel der Zusammenarbeit mit unserem Projekt ist es, NLP-Techniken auf den Datensatz anzuwenden, um Einblicke zu gewinnen, worüber die deutschen Abgeordneten seit der Gründung des Bundestages gesprochen haben."
              linkText="Mehr zum Projekt"
              linkHref="/analysen"
              imagePath="/images/logos/correlaid_logo.svg"
              imageAlt="Logo von CorrelAid"
            />
            <ProjectCard
              headline="ZDFHeute"
              subline="Pandemiedebatte"
              description="ZDFheute untersuchte die Plenarprotokolle des Deutschen Bundestages auf Basis unseres Datensatzes und ermittelte inwiefern sich unsere Politiker_innen seit dem Jahr 1949  mit dem Stichwort “Pandemie” auseinandergesetzt haben."
              linkText="Mehr zum Projekt"
              linkHref="/analysen"
              imagePath="/images/logos/zdf_heute_logo.jpg"
              imageAlt="Logo von ZDFHeute"
            />
          </SimpleGrid>

          <NextButtonLink
            colorScheme="pink"
            href="/analysen"
            marginTop={{
              base: "4",
              md: "4",
              lg: "6",
              xl: "8",
            }}
          >
            Analysen
          </NextButtonLink>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Für einen offenen Diskurs mit den technologischen Mitteln des 21.
            Jahrhunderts.
          </Quote>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Warum ist das wichtig?</Tagline>
          <DefaultHeadline size="s">
            Zugang und Durchsuchbarkeit der Dokumente
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Die im Grundgesetz definierte Öffentlichkeit des Bundestages muss
            durch moderne Wege der Datenverarbeitung ausgebaut werden.
          </ColoredSubline>
          <DefaultText>
            In seiner über 70 jährigen Geschichte war der Bundestag immer eins:
            Ein Ort der lebhaften Debatte und parlamentarischer Marktplatz
            unserer Demokratie. Egal ob Grundsätzliches oder Tagesaktuelles,
            ziemlich jedes Thema wurde besprochen, kritisiert oder beklatscht.
            Praktisch alle Dinge in der täglichen Lebenswelt haben eine
            politische Dimension, insbesondere eine bundespolitische. Im
            Grundgesetz ist definiert, dass die Abgeordneten die Vertreter_Innen
            des gesamten Volkes sind und dass der Bundestag öffentlich
            verhandelt. Wir alle haben somit das Recht, die Inhalte und Vorgänge
            im Parlament transparent mitverfolgen zu dürfen.
          </DefaultText>

          <DefaultText>
            Bisher lagen die Protokolle zwar auf den Serven des Bundestages,
            aber die Einsicht in die Dokumenten ist umständlich und das Format
            der Dokumente für eine moderne Datenverarbeitung nicht geeignet. Auf
            Open Discourse können Bürger_Innen, Journalist_Innen und
            Wissenschaftler_Innen jetzt leicht zugänglich und kostenfrei über
            die{" "}
            <NextChakraLink color="pink.500" href="/tools-und-daten">
              Tools und Daten
            </NextChakraLink>{" "}
            der Plattform die Plenarprotokolle nach Stichworten, Politiker_Innen
            und Ämtern durchsuchen und die Ergebnisse für Ihre Arbeit, Forschung
            und natürlich für das eigene Interesse nutzen.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Wie funktioniert das?</Tagline>
          <DefaultHeadline size="s">Die Herangehensweise</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Data Science trifft auf Plenarprotokolle
          </ColoredSubline>
          <Box marginBottom={{ base: 5, md: 10, lg: 10 }}>
            <Image
              src={"/images/regex_erkennung.png"}
              alt={"Mustererkennung "}
              layout="responsive"
              width="1440px"
              height="700px"
              quality="75"
            />
          </Box>
          <DefaultText>
            Wir haben mit verschiedenen Methoden der Informatik und
            Computerlinguistik die Plenarprotokolle aufgebrochen und alle
            Redebeiträge, Zwischenrufe, Rückfragen etc. der jeweiligen
            Politiker_Innen und Fraktionen zugeordnet und durchsuchbar gemacht.
          </DefaultText>
          <DefaultText>
            Open Discourse verfügt damit über eine Datenbank, die jedes bisher
            in Plenarsitzungen gesprochene Wort strukturiert abbildet und sowohl
            für Menschen als auch Maschinen lesbar zur Verfügung stellt. Diese
            aufbereiteten Daten bilden die Grundlage, um Algorithmen aus den
            Bereichen NLP (Natural Language Processing), Machine Learning, Deep
            Learning etc. auf die Daten anzuwenden und umfangreiche Analysen
            durchzuführen.
          </DefaultText>
          <DefaultText>
            Der programmatische Ansatz unseres Verfahrens sichert die
            Reproduzierbarkeit und Validierbarkeit/Falsifizierbarkeit aller
            Analysen und erfüllt somit den Anspruch der Wissenschaftlichkeit.
          </DefaultText>
          <NextButtonLink
            colorScheme="pink"
            href="/methodik"
            marginTop={{
              base: "4",
              md: "4",
              lg: "6",
              xl: "8",
            }}
          >
            Methodik
          </NextButtonLink>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Wer steckt dahinter?</Tagline>

          <DefaultHeadline size="s">
            Unser Beitrag zur Demokratie
          </DefaultHeadline>

          <DefaultText>
            Open Discourse ist ein gemeinnütziges Forschungsprojekt.
          </DefaultText>
          <DefaultText>
            Das Open Discourse Korpus ist selbstfinanziert, unabhängig und aus
            den Fähigkeiten und Motivationen der Mitarbeiter_Innen der Limebit
            GmbH gewachsen. Die Plattform ist unser Beitrag zur Demokratisierung
            des Zugangs zu politischen Themen und eine Herzensangelegenheit.
          </DefaultText>

          <DefaultText>
            Möchten Sie uns Feedback geben oder haben Sie Interesse Ihre
            Fähigkeiten, Ideen oder Anmerkungen in irgendeiner Form zur
            Verfügung zu stellen? Kontaktieren Sie uns gern!
          </DefaultText>

          <NextButtonLink
            colorScheme="pink"
            href="/ueber-uns"
            marginTop={{
              base: "4",
              md: "4",
              lg: "6",
              xl: "8",
            }}
          >
            Über uns
          </NextButtonLink>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Home;
